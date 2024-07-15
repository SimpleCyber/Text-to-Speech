let speech = new SpeechSynthesisUtterance();

// to change the voices
let voices = [];

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // display each voices on drop down
    voices.forEach((voice, i) => (voiceSelect.options[i]= new Option(voice.name, i) ) );
};


// change voice o select
voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});

// -----------


document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


