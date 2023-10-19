


function playSound(e) {
    const keyMappings = {
      65: '65',
      83: '83',
      68: '68',
      70: '70',
      71: '71',
      72: '72',
      74: '74',
      75: '75',
      76: '76',
    };
  
    const key = document.querySelector(`div[data-key="${keyMappings[e.keyCode]}"`);
    const audio = document.querySelector(`audio[data-key="${keyMappings[e.keyCode]}"`);   
    key.classList.add('playing');  

    audio.currentTime = 0;
    audio.play();
    key.addEventListener('transitionend', function removeTransition() {
        key.classList.remove('playing');
      });

  }
  
  window.addEventListener('keydown', playSound);