(function () {
  const STATUS_API = "https://botstatus.martin-delcampo93.workers.dev/api/bot/status";
  const CHECK_INTERVAL = 30000; 

  async function checkStatus() {
    try {
      const response = await fetch(`${STATUS_API}?t=${Date.now()}`);
      
      // If the request is successful, we parse the data
      if (response.ok) {
        const data = await response.json();
        updateUI(data.online);
        console.log("Sync successful. Bot Online:", data.online);
      }
    } catch (error) {
      // If there is a network error or timeout, we DON'T change the UI.
      // We keep the last known state to avoid false "OFFLINE" flashes.
      console.warn("Network hiccup. Maintaining last known status.");
    }
  }

  function updateUI(isOnline) {
    const container = document.getElementById("bot-status-container");
    const textLabel = document.getElementById("botStatusText");
    
    if (!container || !textLabel) return;

    if (isOnline) {
      container.className = "online";
      textLabel.textContent = "BOT ONLINE";
    } else {
      container.className = "offline";
      textLabel.textContent = "BOT OFFLINE";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    checkStatus();
    setInterval(checkStatus, CHECK_INTERVAL);
  });
})();