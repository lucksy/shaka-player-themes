const manifestUri =
    'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

NodeList.prototype.forEach = Array.prototype.forEach;
var videos = document.querySelectorAll('video').forEach(function(el) {
    document.addEventListener('shaka-ui-loaded', async function init() {
    const video = el;
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();

    // Attach player and ui to the window to make it easy to access in the JS console.
    window.player = player;
    window.ui = ui;
    try {
      await player.load(manifestUri);
    } catch (error) {
      console.log(error);
    }
   });
});