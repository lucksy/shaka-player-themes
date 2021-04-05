const amsterdam_acid_theme_manifestUri = 'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd';

async function init() {
  const video_blue = document.getElementById('amsterdam-acid-blue');
  const video_green = document.getElementById('amsterdam-acid-green');
  const video_red = document.getElementById('amsterdam-acid-red');
  const video_yellow = document.getElementById('amsterdam-acid-yellow');

    const ui_config_blue= video_blue['ui'];
    const ui_config_green = video_green['ui'];
    const ui_config_red = video_red['ui'];
    const ui_config_yellow = video_yellow['ui'];

      const config_blue = {
        'seekBarColors': {
          base: 'rgba(66, 133, 244, 0.35)',
          buffered: 'rgba(66, 133, 244, 0.6)',
          played: 'rgba(66, 133, 244, 0.8)',
        },
        'volumeBarColors': {
          base: 'rgba(66, 133, 244, 0.8)',
          level: 'rgb(66, 133, 244)',
        }
      }
      const config_green = {
        'seekBarColors': {
           base: 'rgba(52, 168, 83, 0.3)',
           buffered: 'rgba(52, 168, 83, 0.54)',
           played: 'rgba(52, 168, 83, 0.8)',
         },
          'volumeBarColors': {
            base: 'rgba(52, 168, 83, 0.8)',
            level: 'rgb(52, 168, 83)',
          }
      }
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

    ui_config_blue.configure(config_blue);
    const controls_blue = ui_config_blue.getControls();
    const player_blue = controls_blue.getPlayer();

    ui_config_green.configure(config_green);
    const controls_green = ui_config_green.getControls();
    const player_green = controls_green.getPlayer();

    ui_config_red.configure(config_red);
    const controls_red = ui_config_red.getControls();
    const player_red = controls_red.getPlayer();

    ui_config_yellow.configure(config_yellow);
    const controls_yellow = ui_config_yellow.getControls();
    const player_yellow = controls_yellow.getPlayer();

    try {
      await player_blue.load(amsterdam_acid_theme_manifestUri);
      await player_green.load(amsterdam_acid_theme_manifestUri);
      await player_red.load(amsterdam_acid_theme_manifestUri);
      await player_yellow.load(amsterdam_acid_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);