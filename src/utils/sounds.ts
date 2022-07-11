const getSoundURL = (file: string) =>
  `https://github.com/thetarnav/vue-bubble-pop/blob/main/public/sounds/${file}?raw=true`;

const audio1 = new Audio(getSoundURL('pop1.mp3'));
const audio2 = new Audio(getSoundURL('pop2.mp3'));

const sounds = [audio1, audio2];

export function playPopSound() {
  const sound = sounds[Math.round(Math.random())];
  sound.currentTime = 0;
  sound.play();
}
