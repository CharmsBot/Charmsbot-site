(function () {
  const STATUS_API = "https://botstatus.martin-delcampo93.workers.dev/api/bot/status";
  const CHECK_INTERVAL = 30000; // 30 seconds

  async function fetchStatus() {
    try {
      // Adding timestamp to avoid browser or Codespaces caching
      const response = await fetch(`${STATUS_API}?t=${Date.now()}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      console.log("Bot Status Received:", data); // Debug log
      return data;
    } catch (error) {
      console.error("Status API Fetch Error:", error);
      return { online: false };
    }
  }

  function updateUI(isOnline) {
    const container = document.getElementById("bot-status-container");
    const textLabel = document.getElementById("botStatusText");
    
    if (!container || !textLabel) {
        console.error("UI Elements not found! Check your HTML IDs.");
        return;
    }

    if (isOnline) {
      container.classList.add("online");
      container.classList.remove("offline");
      textLabel.textContent = "BOT ONLINE";
      console.log("UI Updated: Bot is Online");
    } else {
      container.classList.add("offline");
      container.classList.remove("online");
      textLabel.textContent = "BOT OFFLINE";
      console.log("UI Updated: Bot is Offline");
    }
  }

  async function checkStatus() {
    const data = await fetchStatus();
    updateUI(data.online);
  }

  // Run on load and every 30s
  document.addEventListener("DOMContentLoaded", () => {
    checkStatus();
    setInterval(checkStatus, CHECK_INTERVAL);
  });
})();