// Boosted widget (single pedestal)
// - Left slot: boosted creature
// - Right slot: boosted boss
// - Loads local GIFs from:
//   /assets/images/_shared/boosted/Creature/<Name>.gif
//   /assets/images/_shared/boosted/Boss/<Name>.gif
// - Pedestal:
//   /assets/images/_shared/boosted/_ui/pedestal.gif
//
// FIX: mount container directly under <body> so position:fixed is truly viewport-fixed
// even if your layout wrappers use transform/filter.
// Optional: hide on scroll like your tibiaroute example.

(function () {
  const BOOSTED_API =
    "https://charmsbot-boosted.martin-delcampo93.workers.dev/api/boosted";

  // Toggle this if you want it to "hide" after scrolling down
  const HIDE_ON_SCROLL = true;
  const HIDE_AFTER_PX = 140; // adjust to taste

  function toBoostedFilename(name) {
    const small = new Set(["of", "the", "and", "to", "a", "an", "in", "on", "at", "for", "from", "with"]);
    const cleaned = String(name)
      .trim()
      .replace(/['’]/g, "")
      .replace(/-/g, " ")
      .replace(/\s+/g, " ");

    const parts = cleaned.split(" ").map((w) => {
      const lower = w.toLowerCase();
      if (small.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    });

    return parts.join("_") + ".gif";
  }

  function hideSprite(imgEl) {
    if (!imgEl) return;
    imgEl.removeAttribute("src");
    imgEl.style.display = "none";
  }

  function setSprite(imgEl, folder, name) {
    if (!imgEl) return;
    const filename = toBoostedFilename(name);
    imgEl.style.display = "";
    imgEl.src = `/assets/images/_shared/boosted/${folder}/${filename}`;
    imgEl.onerror = () => hideSprite(imgEl);
  }

  function ensureBodyMountedContainer() {
    let container = document.getElementById("boosted-widget");

    // If it doesn't exist, create it.
    if (!container) {
      container = document.createElement("div");
      container.id = "boosted-widget";
    }

    // Force it to be a direct child of <body> (key fix)
    if (container.parentElement !== document.body) {
      document.body.appendChild(container);
    }

    return container;
  }

  function render(container) {
    container.innerHTML = `
      <div class="tibia-boosted-panel" id="tibiaBoostedPanel" aria-label="Boosted Creature and Boss">
        <div class="tibia-boosted-title">Today Boosted</div>

        <div class="tibia-pedestal">
          <img class="tibia-pedestal-base"
               src="/assets/images/_shared/boosted/_ui/pedestal.gif"
               alt="Pedestal">

          <img class="tibia-sprite-creature"
               id="boostedCreatureSprite"
               alt="Boosted Creature"
               loading="lazy">

          <img class="tibia-sprite-boss"
               id="boostedBossSprite"
               alt="Boosted Boss"
               loading="lazy">
        </div>
      </div>
    `;
  }

  async function loadData() {
    const res = await fetch(BOOSTED_API + "?nocache=1", { cache: "no-store" });
    return res.json();
  }

  function setupHideOnScroll(panelEl) {
    if (!HIDE_ON_SCROLL || !panelEl) return;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      if (y > HIDE_AFTER_PX) panelEl.classList.add("is-hidden");
      else panelEl.classList.remove("is-hidden");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const container = ensureBodyMountedContainer();
    render(container);

    const panel = document.getElementById("tibiaBoostedPanel");
    setupHideOnScroll(panel);

    const cImg = document.getElementById("boostedCreatureSprite");
    const bImg = document.getElementById("boostedBossSprite");

    try {
      const d = await loadData();

      if (d.boostedCreature) setSprite(cImg, "Creature", d.boostedCreature);
      else hideSprite(cImg);

      if (d.boostedBoss) setSprite(bImg, "Boss", d.boostedBoss);
      else hideSprite(bImg);
    } catch (e) {
      hideSprite(cImg);
      hideSprite(bImg);
    }
  });
})();
