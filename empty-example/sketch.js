let speech = new p5.Speech();

function setup() {
  createCanvas(400, 100);
  background(0);

  speech.setRate(0.5);
  speech.setPitch(0.1);
  speech.started(startSpeaking);
  speech.ended(endSpeaking);

  function startSpeaking() {
    background(0,255,0);
  }

  function endSpeaking() {
    background(0);
  }

  let mic = new p5.AudioIn();
  mic.start();

  getAudioContext().resume();
}

function mousePressed() {
  let voices = speech.voices;
  let voice = random(voices);
  console.log(voice);
  speech.setVoice(voice.name);
  speech.speak("Hey Dhruv!");
}