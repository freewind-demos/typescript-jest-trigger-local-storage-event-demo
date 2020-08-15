export default function listenOnLocalStorage(onStorageEvent: (event: Event) => void) {
  window.addEventListener('storage', onStorageEvent);
};
