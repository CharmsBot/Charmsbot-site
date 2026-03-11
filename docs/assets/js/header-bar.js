// docs/assets/js/header-bar.js
// ─────────────────────────────────────────────────────────────────────────────
// CharmsBot — Header dinámico
// Se inserta automáticamente en todas las páginas.
// REQUIERE: i18n.js cargado ANTES que este archivo.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  'use strict';

  // ── Rutas relativas (se ajustan solos según la profundidad del directorio) ──
  function getPathPrefix() {
    const parts = window.location.pathname
      .replace(/\/[^\/]*$/, '')
      .split('/')
      .filter(Boolean);
    return parts.length > 0 ? '../'.repeat(parts.length) : '';
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // HTML DEL HEADER
  // ═══════════════════════════════════════════════════════════════════════════
  function insertHeaderHTML() {
    const p = getPathPrefix();

    document.body.insertAdjacentHTML('afterbegin', `
      <div class="top-header-bar">

        <!-- Bot Status ── izquierda -->
        <div class="header-left offline" id="botStatusContainer">
          <div class="bot-status-indicator"></div>
          <span class="bot-status-text" data-i18n="header_status_offline">CHARMSBOT OFFLINE</span>
        </div>

        <!-- Server Save Countdown ── centro -->
        <div class="header-center">
          <span class="countdown-label"
                data-i18n="header_server_save">Time to Server Save</span>
          <span id="serverSaveCountdown" class="countdown-timer">00:00:00</span>
        </div>

        <!-- Boosted + Lang switcher ── derecha -->
        <div class="header-right">

          <span class="boosted-label"
                data-i18n="header_boosted_label">Today's Boosted</span>

          <div class="boosted-pedestal">
            <img class="pedestal-base"
                 src="${p}assets/images/_shared/boosted/_ui/pedestal.png"
                 alt="Pedestal">
            <div class="pedestal-slot-creature">
              <img id="boostedCreatureImg"
                   class="boosted-sprite-creature"
                   alt="Boosted Creature"
                   loading="lazy"
                   style="display:none;">
            </div>
            <div class="pedestal-slot-boss">
              <img id="boostedBossImg"
                   class="boosted-sprite-boss"
                   alt="Boosted Boss"
                   loading="lazy"
                   style="display:none;">
            </div>
          </div>

          <!-- Selector de idioma — banderas SVG -->
          <div class="lang-switcher" role="group" aria-label="Language selector">
            <button class="lang-btn"
                    data-lang="en"
                    onclick="setLang('en')"
                    aria-label="Switch to English"
                    title="English">
              <img src="https://flagcdn.com/gb.svg" alt="English" width="28" height="20">
            </button>
            <button class="lang-btn"
                    data-lang="es"
                    onclick="setLang('es')"
                    aria-label="Cambiar a Español"
                    title="Español">
              <img src="https://flagcdn.com/es.svg" alt="Español" width="28" height="20">
            </button>
          </div>

        </div>
      </div>
    `);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // APIs
  // ═══════════════════════════════════════════════════════════════════════════
  const BOT_STATUS_API = 'https://botstatus.martin-delcampo93.workers.dev/api/bot/status';
  const BOOSTED_API    = 'https://charmsbot-boosted.martin-delcampo93.workers.dev/api/boosted';

  // ═══════════════════════════════════════════════════════════════════════════
  // SERVER SAVE COUNTDOWN
  // ═══════════════════════════════════════════════════════════════════════════
  function updateServerSaveCountdown() {
    const timerEl = document.getElementById('serverSaveCountdown');
    if (!timerEl) return;

    const now    = new Date();
    const deStr  = now.toLocaleString('en-US', { timeZone: 'Europe/Berlin', hour12: false });
    const deHour = parseInt(deStr.split(', ')[1].split(':')[0]);

    let target = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    target.setHours(10, 0, 0, 0);
    if (deHour >= 10) target.setDate(target.getDate() + 1);

    const nowDE = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    const diff  = target - nowDE;

    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000)   / 1_000);

    timerEl.textContent =
      `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // BOT STATUS
  // ═══════════════════════════════════════════════════════════════════════════
  let _retryDone = false;

  function _applyBotStatus(online) {
    const container = document.getElementById('botStatusContainer');
    const textEl    = container && container.querySelector('.bot-status-text');
    if (!container || !textEl) return;

    if (online) {
      container.classList.remove('offline');
      container.classList.add('online');
      textEl.setAttribute('data-i18n', 'header_status_online');
      textEl.textContent = typeof t === 'function'
        ? t('header_status_online') : 'CHARMSBOT ONLINE';
    } else {
      container.classList.remove('online');
      container.classList.add('offline');
      textEl.setAttribute('data-i18n', 'header_status_offline');
      textEl.textContent = typeof t === 'function'
        ? t('header_status_offline') : 'CHARMSBOT OFFLINE';
    }
  }

  async function updateBotStatus(isRetry) {
    try {
      // Sin cache: 'no-store' ni ?t=Date.now() — usa CF Cache del Worker
      const res  = await fetch(BOT_STATUS_API, { mode: 'cors' });
      const data = await res.json();
      const online = data.online === true || data.online === 'true';

      _applyBotStatus(online);

      if (!online && !isRetry && !_retryDone) {
        _retryDone = true;
        setTimeout(() => updateBotStatus(true), 4000);
      }

    } catch (_e) {
      _applyBotStatus(false);
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // BOOSTED CREATURES / BOSSES
  // ═══════════════════════════════════════════════════════════════════════════
  const NAME_EXCEPTIONS = {
    'the Enraged Thorn Knight': 'The_Enraged_Thorn_Knight.gif',
    'the Percht Queen':         'The_Percht_Queen.gif',
    'the Welcoming':            'The_Welcoming.gif',
    'the Fear Feaster':         'The_Fear_Feaster.gif',
    'the Time Guardian':        'The_Time_Guardian.gif',
  };

  const SMALL_WORDS = new Set(['of','the','and','to','a','an','in','on','at','for','from','with']);

  function toBoostedFilename(name) {
    if (!name) return null;
    if (NAME_EXCEPTIONS[name]) return NAME_EXCEPTIONS[name];

    return String(name)
      .trim()
      .replace(/[\u200B\u200C\u200D\uFEFF]/g, '')
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((w, i) => {
        const lower = w.toLowerCase();
        return (SMALL_WORDS.has(lower) && i !== 0)
          ? lower
          : lower.charAt(0).toUpperCase() + lower.slice(1);
      })
      .join('_') + '.gif';
  }

  async function updateBoosted() {
    const creatureImg = document.getElementById('boostedCreatureImg');
    const bossImg     = document.getElementById('boostedBossImg');
    if (!creatureImg || !bossImg) return;

    const p = getPathPrefix();

    try {
      // Sin cache: 'no-store' ni ?t=Date.now() — usa CF Cache del Worker
      const res  = await fetch(BOOSTED_API, { mode: 'cors' });
      const data = await res.json();

      if (data.boostedCreature) {
        creatureImg.src           = `${p}assets/images/_shared/boosted/Creature/${toBoostedFilename(data.boostedCreature)}`;
        creatureImg.style.display = 'block';
      }
      if (data.boostedBoss) {
        bossImg.src           = `${p}assets/images/_shared/boosted/Boss/${toBoostedFilename(data.boostedBoss)}`;
        bossImg.style.display = 'block';
      }
    } catch (e) {
      console.warn('[CharmsBot] Boosted API error:', e);
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // INICIALIZACIÓN
  // ═══════════════════════════════════════════════════════════════════════════
  function translateHeader() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (typeof window.t === 'function') {
        var val = window.t(key);
        if (val && val !== key) el.innerHTML = val;
      }
    });
  }

  function init() {
    insertHeaderHTML();

    translateHeader();

    if (typeof window.t !== 'function') {
      setTimeout(translateHeader, 50);
      setTimeout(translateHeader, 200);
    }

    function updateActiveLangBtn() {
      var lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
      document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    }

    updateActiveLangBtn();

    window.addEventListener('langchange', function() {
      translateHeader();
      updateActiveLangBtn();
      var container = document.getElementById('botStatusContainer');
      var textEl = container && container.querySelector('.bot-status-text');
      if (!textEl) return;
      var key = textEl.getAttribute('data-i18n');
      if (key && typeof window.t === 'function') {
        textEl.textContent = window.t(key);
      }
    });

    setTimeout(function () {
      updateBotStatus(false);
      updateBoosted();
      updateServerSaveCountdown();

      setInterval(function () { updateBotStatus(false); }, 300_000); // cada 5 min
      setInterval(updateServerSaveCountdown, 1_000);                  // cada 1 s
      setInterval(updateBoosted, 3_600_000);                          // cada 1 hora
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();