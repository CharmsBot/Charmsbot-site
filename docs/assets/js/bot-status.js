(function () {
  // Use the clean API URL without timestamp to allow Cloudflare Edge Caching
  const STATUS_API = "https://botstatus.martin-delcampo93.workers.dev/api/bot/status";
  
  // Increased to 60s to match the Worker's s-maxage and save KV read operations
  const CHECK_INTERVAL = 60000; 

  async function checkStatus() {
    try {
      // Removed the ?t= parameter so the Worker can serve the cached response
      const response = await fetch(STATUS_API);
      
      if (response.ok) {
        const data = await response.json();
        updateUI(data.online);
        console.log("Sync successful. Bot Online:", data.online);
      }
    } catch (error) {
      // Maintain last state on network errors to prevent UI flickering
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