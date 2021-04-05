const green_theme_manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

async function init() {
  const video = document.getElementById('green-theme');
    const ui = video['ui'];
    const config = {
     'seekBarColors': {
       base: 'rgba(52, 168, 83, 0.3)',
       buffered: 'rgba(52, 168, 83, 0.54)',
       played: 'rgb(52, 168, 83)',
     },
      'volumeBarColors': {
        base: 'rgba(52, 168, 83, 0.5)',
        level: 'rgb(52, 168, 83)',
      }
    }
    ui.configure(config);

    const controls = ui.getControls();
    const player = controls.getPlayer();

    try {
      await player.load(green_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);