const yellow_theme_manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

async function init() {
  const video = document.getElementById('yellow-theme');
    const ui = video['ui'];
    const config = {
      'seekBarColors': {
        base: 'rgba(251, 188, 5, 0.5)',
        buffered: 'rgba(251, 188, 5, 0.7)',
        played: 'rgb(251, 188, 5)',
      },
      'volumeBarColors': {
        base: 'rgba(251, 188, 5, 0.5)',
        level: 'rgb(251, 188, 5)',
      }
    }
   ui.configure(config);

    const controls = ui.getControls();
    const player = controls.getPlayer();

    try {
      await player.load(yellow_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);