// docs/assets/js/header-bar.js
(function () {
  'use strict';

  // ============================================
  // INSERCIÓN AUTOMÁTICA DEL HEADER
  // ============================================
  
  function getPathPrefix() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    return depth > 1 ? '../'.repeat(depth - 1) : '';
  }

  function insertHeaderHTML() {
    const pathPrefix = getPathPrefix();
    
    const headerHTML = `
    <div class="top-header-bar">
      <!-- Bot Status (Izquierda) -->
      <div class="header-left offline">
        <div class="bot-status-indicator"></div>
        <span class="bot-status-text">CHARMSBOT OFFLINE</span>
      </div>

      <!-- Server Save Countdown (Centro) -->
      <div class="header-center">
        <span class="countdown-label">Time to Server Save</span>
        <span id="serverSaveCountdown" class="countdown-timer">00:00:00</span>
      </div>

      <!-- Today's Boosted (Derecha) -->
      <div class="header-right">
        <span class="boosted-label">Today's Boosted</span>
        <div class="boosted-pedestal">
          <img class="pedestal-base" 
               src="${pathPrefix}/assets/images/_shared/boosted/_ui/pedestal.png" 
               alt="Pedestal">
          
          <!-- Slot para Creature -->
          <div class="pedestal-slot-creature">
            <img id="boostedCreatureImg" 
                 class="boosted-sprite-creature" 
                 alt="Boosted Creature" 
                 loading="lazy"
                 style="display:none;">
          </div>
          
          <!-- Slot para Boss -->
          <div class="pedestal-slot-boss">
            <img id="boostedBossImg" 
                 class="boosted-sprite-boss" 
                 alt="Boosted Boss" 
                 loading="lazy"
                 style="display:none;">
          </div>
        </div>
      </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // ============================================
  // APIs
  // ============================================
  const BOT_STATUS_API = "https://botstatus.martin-delcampo93.workers.dev/api/bot/status";
  const BOOSTED_API = "https://charmsbot-boosted.martin-delcampo93.workers.dev/api/boosted";

  // ============================================
  // SERVER SAVE COUNTDOWN
  // ============================================
  function updateServerSaveCountdown() {
    const timerEl = document.getElementById('serverSaveCountdown');
    if (!timerEl) return;

    const now = new Date();

    const germanTimeStr = now.toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false });
    const germanHour = parseInt(germanTimeStr.split(', ')[1].split(':')[0]);

    let target = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    target.setHours(10, 0, 0, 0);

    if (germanHour >= 10) {
      target.setDate(target.getDate() + 1);
    }

    const nowInGermany = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    const diff = target - nowInGermany;

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // ============================================
  // BOT STATUS
  // ============================================
  async function updateBotStatus() {
    const container = document.querySelector('.header-left');
    const textEl = document.querySelector('.bot-status-text');
    if (!container || !textEl) return;

    try {
      const res = await fetch(`${BOT_STATUS_API}?nocache=${Date.now()}`, { 
        cache: "no-store", 
        mode: 'cors' 
      });
      const data = await res.json();

      if (data.online === true || data.online === "true") {
        container.classList.remove("offline");
        container.classList.add("online");
        textEl.textContent = "CHARMSBOT ONLINE";
      } else {
        container.classList.remove("online");
        container.classList.add("offline");
        textEl.textContent = "CHARMSBOT OFFLINE";
      }
    } catch (e) {
      container.classList.remove("online");
      container.classList.add("offline");
      textEl.textContent = "CHARMSBOT OFFLINE";
    }
  }

  // ============================================
  // BOOSTED CREATURES/BOSSES
  // ============================================

  // Excepciones: cuando la API devuelve el nombre diferente al archivo
  const NAME_EXCEPTIONS = {
    "the Enraged Thorn Knight": "The_Enraged_Thorn_Knight.gif",
    "the Percht Queen":         "The_Percht_Queen.gif",
    "the Welcoming":            "The_Welcoming.gif",
    "the Fear Feaster":         "The_Fear_Feaster.gif",
    "the Time Guardian":        "The_Time_Guardian.gif",
  };

  // Palabras pequeñas que no se capitalizan (excepto al inicio)
  const SMALL_WORDS = new Set(["of", "the", "and", "to", "a", "an", "in", "on", "at", "for", "from", "with"]);

  function toBoostedFilename(name) {
    if (!name) return null;

    // 1. Revisar excepciones exactas primero
    if (NAME_EXCEPTIONS[name]) return NAME_EXCEPTIONS[name];

    // 2. Limpiar solo caracteres invisibles unicode
    //    ✅ Preserva apóstrofes ASCII (') para Goshnar's, Tentugly's, etc.
    //    ✅ Preserva guiones (-) para Timira the Many-Headed, etc.
    const cleaned = String(name)
      .trim()
      .replace(/[\u200B\u200C\u200D\uFEFF]/g, "") // elimina caracteres invisibles
      .replace(/[\u2018\u2019]/g, "'")             // normaliza apóstrofes fancy → ASCII
      .replace(/\s+/g, " ");                        // colapsa espacios múltiples

    // 3. Separar por espacios y capitalizar cada palabra
    const words = cleaned.split(" ");
    const processed = words.map((word, index) => {
      const lower = word.toLowerCase();
      // No capitalizar palabras pequeñas en medio del nombre
      if (SMALL_WORDS.has(lower) && index !== 0) return lower;
      // Capitaliza primera letra, preserva el resto (incluye apóstrofes y guiones internos)
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    });

    return processed.join("_") + ".gif";
  }

  async function updateBoosted() {
    const creatureImg = document.getElementById('boostedCreatureImg');
    const bossImg = document.getElementById('boostedBossImg');
    if (!creatureImg || !bossImg) return;

    const pathPrefix = getPathPrefix();

    try {
      const res = await fetch(`${BOOSTED_API}?nocache=${Date.now()}`, { 
        cache: "no-store", 
        mode: 'cors' 
      });
      const data = await res.json();

      if (data.boostedCreature) {
        creatureImg.src = `${pathPrefix}/assets/images/_shared/boosted/Creature/${toBoostedFilename(data.boostedCreature)}`;
        creatureImg.style.display = 'block';
      }
      if (data.boostedBoss) {
        bossImg.src = `${pathPrefix}/assets/images/_shared/boosted/Boss/${toBoostedFilename(data.boostedBoss)}`;
        bossImg.style.display = 'block';
      }
    } catch (e) {
      console.error('Error loading boosted:', e);
    }
  }

  // ============================================
  // INICIALIZACIÓN
  // ============================================
  function init() {
    insertHeaderHTML();
    
    setTimeout(() => {
      updateBotStatus();
      updateBoosted();
      updateServerSaveCountdown();
      setInterval(updateBotStatus, 30000);
      setInterval(updateServerSaveCountdown, 1000);
      setInterval(updateBoosted, 300000);
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();