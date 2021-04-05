const amsterdam_acid_theme_manifestUri = 'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd';

async function init() {
  const video_yellow = document.getElementById('amsterdam-acid-yellow');

    const ui_config_yellow = video_yellow['ui'];

      const config_yellow = {
        'seekBarColors': {
          base: 'rgba(251, 188, 5, 0.5)',
          buffered: 'rgba(251, 188, 5, 0.7)',
          played: 'rgba(251, 188, 5, 0.8)',
        },
        'volumeBarColors': {
          base: 'rgba(251, 188, 5, 0.8)',
          level: 'rgb(251, 188, 5)',
        }
      }

    ui_config_yellow.configure(config_yellow);
    const controls_yellow = ui_config_yellow.getControls();
    const player_yellow = controls_yellow.getPlayer();

    try {
      await player_yellow.load(amsterdam_acid_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);