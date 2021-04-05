const red_theme_manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

async function init() {
  const video = document.getElementById('red-theme');
    const ui = video['ui'];
    const config = {
      'seekBarColors': {
        base: 'rgba(234, 67, 53, 0.5)',
        buffered: 'rgba(234, 67, 53, 0.7)',
        played: 'rgb(234, 67, 53)',
      },
      'volumeBarColors': {
        base: 'rgba(234, 67, 53, 0.5)',
        level: 'rgb(234, 67, 53)',
      }
    }
   ui.configure(config);

    const controls = ui.getControls();
    const player = controls.getPlayer();

    try {
      await player.load(red_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);