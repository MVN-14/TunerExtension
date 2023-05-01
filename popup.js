const audio = new Audio();

const input = document.getElementById("chkLoop");
if (input) {
  input.addEventListener("change", (event) => {
    audio.loop = event.currentTarget.checked;
  });
}

const button = document.querySelector(".buttonContainer");
if (button) {
  button.addEventListener("click", (event) => {
    audio.src = getAudioSource(event.target.id);
    audio.play();
  });
}

function getAudioSource(id) {
  if (id === "1") {
    return "assets/lowE.wav";
  } else if (id === "2") {
    return "assets/A.wav";
  } else if (id === "3") {
    return "assets/D.wav";
  } else if (id === "4") {
    return "assets/G.wav";
  } else if (id === "5") {
    return "assets/B.wav";
  } else if (id === "6") {
    return "assets/highE.wav";
  }
}
