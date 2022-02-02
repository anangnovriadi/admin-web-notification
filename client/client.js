const publicKey =
  "BMwD0AUb-FTMOCmgqg6hlitNweAVW67dQsz0_C-Y7XZBhe09GuM0TMLdSvlZv85fK-LZ1yDPZYhT6yhCKbzECrc";

if ("serviceWorker" in navigator) {
  send().catch(err => console.error(err));
}

async function send() {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.map(r => r.unregister());
    navigator.serviceWorker.register("/worker.js");
  });

  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey)
  });

  await fetch("/api/send-subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
