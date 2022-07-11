const sounds = ['/sounds/pop1.mp3', '/sounds/pop2.mp3'];

const getRandomSound = () => sounds[Math.round(Math.random())];

const popSound = new Audio(getRandomSound());
popSound.play();
export function playPopSound() {
  // popSound.
  // node.dispatchEvent(new CustomEvent("pop"))
}
