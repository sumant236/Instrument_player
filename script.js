// Create eventListener to all the button
// All button should be able to play a different sound.

const buttons = document.querySelectorAll(".drum");

function playSound(key) {
  let audio;

  switch (key) {
    case "w":
      audio = new Audio("https://files.codingninjas.in/tom-1-28537.mp3");
      break;
    case "a":
      audio = new Audio("https://files.codingninjas.in/tom-2-28541.mp3");
      break;
    case "s":
      audio = new Audio("https://files.codingninjas.in/tom-3-28542.mp3");
      break;
    case "d":
      audio = new Audio("https://files.codingninjas.in/tom-4-28543.mp3");
      break;
    case "j":
      audio = new Audio("https://files.codingninjas.in/snare-28545.mp3");
      break;
    case "k":
      audio = new Audio("https://files.codingninjas.in/crash-28546.mp3");
      break;
    case "l":
      audio = new Audio("https://files.codingninjas.in/kick-bass-28547.mp3");
      break;
    default:
      console.log("Invalid key: " + key);
      return;
  }

  audio.play();
}

buttons.forEach((button) =>
  button.addEventListener("click", () => playSound(button.textContent))
);

document.addEventListener("keydown", (e) => playSound(e.key));
