export default function registerServiceWorker() {
  if (
    process.env.NODE_ENV !== 'production' ||
    !('serviceWorker' in navigator)
  ) {
    return;
  }

  const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  if (publicUrl.origin !== window.location.origin) {
    return;
  }

  const serviceWorkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(serviceWorkerUrl).catch((error) => {
      console.error('Falha ao registrar o service worker:', error);
    });
  });
}
