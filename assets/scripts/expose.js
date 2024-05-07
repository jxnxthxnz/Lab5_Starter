// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let jsConfetti = new JSConfetti();
  // TODO
  document.getElementById("horn-select").addEventListener("change", (event) => {
    let events = event.target.value;
    let pic = document.querySelector("#expose img");
    let sounds =  document.querySelector("audio");
    if (events == "air-horn") {
      pic.src = "assets/images/air-horn.svg";
      sounds.src = "assets/audio/air-horn.mp3";
    } else if (events == "car-horn") {
      pic.src = "assets/images/car-horn.svg";
      sounds.src = "assets/audio/car-horn.mp3";
    } else if (events == "party-horn") {
      pic.src = "assets/images/party-horn.svg";
      sounds.src = "assets/audio/party-horn.mp3";
    }
  });

  document.getElementById("volume-controls").addEventListener("input", (event) => {
    const volume = event.target.value;
    const icon = document.querySelector("#volume-controls img");
    const sounds = document.querySelector("audio");
    sounds.volume = volume / 100;
    if (volume == 0) {
      icon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      icon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      icon.src = "assets/icons/volume-level-2.svg";
    } else {
      icon.src = "assets/icons/volume-level-3.svg";
    }
  });

  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("audio").play();
    if (document.getElementById("horn-select").value === "party-horn") {
      jsConfetti.addConfetti();
  }
  });
}
