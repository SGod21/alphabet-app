"use strict";

const alphabet = [
  ["apple", "Short a sound"],
  ["ball", "The b sound"],
  ["cat", "Hard c sound"],
  ["dog", "The d sound"],
  ["egg", "Short e sound"],
  ["fish", "The f sound"],
  ["goat", "Hard g sound"],
  ["hat", "The h sound"],
  ["igloo", "Short i sound"],
  ["jam", "The j sound"],
  ["kite", "The k sound"],
  ["leaf", "The l sound"],
  ["moon", "The m sound"],
  ["nest", "The n sound"],
  ["octopus", "Short o sound"],
  ["pig", "The p sound"],
  ["queen", "“Qu” makes /kw/"],
  ["rabbit", "The r sound"],
  ["sun", "The s sound"],
  ["turtle", "The t sound"],
  ["up", "Short u sound"],
  ["van", "The v sound"],
  ["whale", "The w sound"],
  ["fox", "/ks/ at the end"],
  ["yo-yo", "The y sound"],
  ["zebra", "The z sound"],
];

const main = document.querySelector("#main");
const grid = document.querySelector("#letters");
const card = document.querySelector("#sound-card");
const largeUpper = document.querySelector("#large-upper");
const largeLower = document.querySelector("#large-lower");
const examplePrefix = document.querySelector("#example-prefix");
const exampleWord = document.querySelector("#example-word");
const description = document.querySelector("#sound-description");
const picture = document.querySelector("#example-picture");
const audio = document.querySelector("#phonics-audio");
const playButton = document.querySelector("#play-sound");
const playbackStatus = document.querySelector("#playback-status");
const settings = document.querySelector("#settings");
const lowercaseSwitch = document.querySelector("#show-lowercase");
const picturesSwitch = document.querySelector("#show-pictures");
const bundledSounds = document.querySelector("#bundled-sounds");
const soundSources = bundledSounds ? JSON.parse(bundledSounds.textContent) : null;

let selected = 0;
let loaded = -1;
let playbackAttempt = 0;

const letterButtons = alphabet.map(([word], index) => {
  const upper = String.fromCharCode(65 + index);
  const button = document.createElement("button");
  button.className = "letter";
  button.type = "button";
  button.setAttribute("aria-label", `${upper} as in ${word}`);
  button.setAttribute("aria-pressed", String(index === selected));

  const upperGlyph = document.createElement("span");
  upperGlyph.textContent = upper;
  const lowerGlyph = document.createElement("span");
  lowerGlyph.className = "lowercase";
  lowerGlyph.textContent = upper.toLowerCase();
  button.append(upperGlyph, lowerGlyph);
  button.addEventListener("click", () => {
    selectLetter(index);
    playSound();
  });
  grid.append(button);
  return button;
});

function selectLetter(index) {
  if (selected === index) return;

  const upper = String.fromCharCode(65 + index);
  const [word, soundDescription] = alphabet[index];
  const sheet = index < 13 ? 1 : 2;
  const cell = index % 13;
  letterButtons[selected].setAttribute("aria-pressed", "false");
  selected = index;
  letterButtons[selected].setAttribute("aria-pressed", "true");

  largeUpper.textContent = upper;
  largeLower.textContent = upper.toLowerCase();
  examplePrefix.textContent = upper === "X" ? "X is in" : `${upper} is for`;
  exampleWord.textContent = word;
  description.textContent = soundDescription;
  picture.dataset.sheet = sheet;
  picture.style.setProperty("--picture-x", `${(cell % 4) * 100 / 3}%`);
  picture.style.setProperty("--picture-y", `${Math.floor(cell / 4) * 100 / 3}%`);
}

async function playSound() {
  const attempt = ++playbackAttempt;
  playbackStatus.hidden = true;
  audio.pause();
  main.removeAttribute("data-playing");

  if (loaded !== selected || audio.error) {
    const letter = String.fromCharCode(97 + selected);
    audio.src = soundSources?.[letter] ?? `assets/audio/${letter}.mp3`;
    loaded = selected;
  }

  try {
    audio.currentTime = 0;
    await audio.play();
    if (attempt === playbackAttempt && !audio.paused) {
      main.dataset.playing = "";
    }
  } catch {
    if (attempt === playbackAttempt) {
      playbackStatus.textContent = "Couldn’t play the sound. Tap the letter again.";
      playbackStatus.hidden = false;
    }
  }
}

function setupPreference(control, name, apply) {
  const key = `letter-sounds:${name}`;
  try {
    control.checked = localStorage.getItem(key) !== "false";
  } catch {
    // Storage can be unavailable when opening a local file.
  }
  apply(control.checked);
  control.addEventListener("change", () => {
    apply(control.checked);
    try {
      localStorage.setItem(key, String(control.checked));
    } catch {
      // The setting still applies for this session.
    }
  });
}

setupPreference(lowercaseSwitch, "lowercase", (enabled) => {
  document.documentElement.toggleAttribute("data-uppercase-only", !enabled);
});
setupPreference(picturesSwitch, "pictures", (enabled) => {
  card.toggleAttribute("data-hide-pictures", !enabled);
});

playButton.addEventListener("click", playSound);
audio.addEventListener("pause", () => {
  if (audio.paused) main.removeAttribute("data-playing");
});
document.querySelector("#open-settings").addEventListener("click", () => settings.showModal());
