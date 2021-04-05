const amsterdam_acid_theme_manifestUri = 'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd';

async function init() {
  const video_green = document.getElementById('amsterdam-acid-green');
    const ui_config_green = video_green['ui'];

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


    ui_config_green.configure(config_green);
    const controls_green = ui_config_green.getControls();
    const player_green = controls_green.getPlayer();

    try {
      await player_green.load(amsterdam_acid_theme_manifestUri);
    } catch (error) {
    }
}

document.addEventListener('shaka-ui-loaded', init);