const blue_theme_manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

async function init() {
  const video = document.getElementById('blue-theme');
    const ui = video['ui'];
    const config = {
      'seekBarColors': {
        base: 'rgba(66, 133, 244, 0.5)',
        buffered: 'rgba(66, 133, 244, 0.7)',
        played: 'rgb(66, 133, 244)',
      },
      'volumeBarColors': {
        base: 'rgba(66, 133, 244, 0.5)',
        level: 'rgb(66, 133, 244)',
      }
    }
   ui.configure(config);

    const controls = ui.getControls();
    const player = controls.getPlayer();

    try {
      await player.load(blue_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);