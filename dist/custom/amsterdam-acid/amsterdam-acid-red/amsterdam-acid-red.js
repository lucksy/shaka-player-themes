const amsterdam_acid_theme_manifestUri = 'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd';

async function init() {
  const video_red = document.getElementById('amsterdam-acid-red');

    const ui_config_red = video_red['ui'];

      const config_red = {
        'seekBarColors': {
          base: 'rgba(234, 67, 53, 0.5)',
          buffered: 'rgba(234, 67, 53, 0.7)',
          played: 'rgba(234, 67, 53, 0.8)',
        },
        'volumeBarColors': {
          base: 'rgba(234, 67, 53, 0.8)',
          level: 'rgb(234, 67, 53)',
        }
      }

    ui_config_red.configure(config_red);
    const controls_red = ui_config_red.getControls();
    const player_red = controls_red.getPlayer();
    try {
      await player_red.load(amsterdam_acid_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);