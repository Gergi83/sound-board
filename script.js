const sounds = ['applause', 'boo', 'tada', 'victory', 'wrong', 'gasp'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSound();

    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const effect = document.getElementById(sound);

    effect.pause();
    effect.currentTime = 0;
  });
}
