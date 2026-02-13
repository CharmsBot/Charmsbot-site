// docs/assets/js/header-bar.js
(function () {
  const BOT_STATUS_API = "https://botstatus.martin-delcampo93.workers.dev/api/bot/status";
  const BOOSTED_API = "https://charmsbot-boosted.martin-delcampo93.workers.dev/api/boosted";

  // --- 1. Lógica del Server Save (Alemania Europe/Berlin) ---
  function updateServerSaveCountdown() {
    const timerEl = document.getElementById('serverSaveCountdown');
    if (!timerEl) return;

    const now = new Date();

    // Obtener la hora actual en Alemania para determinar el próximo SS (10:00 AM)
    // Esto maneja automáticamente DST (Horario Verano)
    const germanTimeStr = now.toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false });
    const germanHour = parseInt(germanTimeStr.split(', ')[1].split(':')[0]);

    let target = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    target.setHours(10, 0, 0, 0);

    // Si ya pasaron las 10:00 en Alemania, el próximo SS es mañana
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

  // --- 2. Lógica de Bot Status ---
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

  // --- 3. Lógica de Boosted ---
  const NAME_EXCEPTIONS = {
    "the Enraged Thorn Knight": "The_Enraged_Thorn_Knight.gif",
    "the Percht Queen": "The_Percht_Queen.gif",
    "the Welcoming": "The_Welcoming.gif",
    "the Fear Feaster": "The_Fear_Feaster.gif",
    "the Time Guardian": "The_Time_Guardian.gif",
  };

  function toBoostedFilename(name) {
    if (!name) return null;
    if (NAME_EXCEPTIONS[name]) return NAME_EXCEPTIONS[name];
    const small = new Set(["of", "the", "and", "to", "a", "an", "in", "on", "at", "for", "from", "with"]);
    const cleaned = String(name).trim().replace(/['​']/g, "").replace(/-/g, " ").replace(/\s+/g, " ");
    const words = cleaned.split(" ");
    const processed = words.map((word, index) => {
      const lower = word.toLowerCase();
      if (small.has(lower) && index !== 0) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    });
    return processed.join("_") + ".gif";
  }

  async function updateBoosted() {
    const creatureImg = document.getElementById('boostedCreatureImg');
    const bossImg = document.getElementById('boostedBossImg');
    if (!creatureImg || !bossImg) return;

    try {
      const res = await fetch(`${BOOSTED_API}?nocache=${Date.now()}`, { 
        cache: "no-store", 
        mode: 'cors' 
      });
      const data = await res.json();

      if (data.boostedCreature) {
        creatureImg.src = `assets/images/_shared/boosted/Creature/${toBoostedFilename(data.boostedCreature)}`;
        creatureImg.style.display = 'block';
      }
      if (data.boostedBoss) {
        bossImg.src = `assets/images/_shared/boosted/Boss/${toBoostedFilename(data.boostedBoss)}`;
        bossImg.style.display = 'block';
      }
    } catch (e) {}
  }

  function init() {
    updateBotStatus();
    updateBoosted();
    updateServerSaveCountdown();
    setInterval(updateBotStatus, 30000);
    setInterval(updateServerSaveCountdown, 1000);
    setInterval(updateBoosted, 300000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();