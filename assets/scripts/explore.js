// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const textToSpeak = document.getElementById("text-to-speak");

  let voices = [];

  function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }

  populateVoiceList();
  synth.onvoiceschanged = populateVoiceList;

  document.querySelector("button").addEventListener("click", () => {
    if (document.getElementById("voice-select").value === "select" || textToSpeak.value === "") {
      alert("Please select a voice and enter some text.");
      return;
    }

    const selectedOption = document.getElementById("voice-select").selectedOptions[0];
    const selectedVoiceName = selectedOption.getAttribute("data-name");

    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    utterThis.voice = voices.find(voice => voice.name === selectedVoiceName);

    utterThis.onstart = () => {
      document.querySelector("#explore img").src = "assets/images/smiling-open.png";
    };

    utterThis.onend = () => {
      document.querySelector("#explore img").src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);
  });
}
