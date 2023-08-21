function vibrate() {
  if (!window.navigator || !window.navigator.vibrate) {
    return;
  }
  window.navigator.vibrate(10);
}
