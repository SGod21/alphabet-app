"use strict";

const alphabet = [
  [
    "apple",
    "/a/ — short 'a', mouth open wide like taking a big bite of an apple"
  ],
  [
    "ball",
    "/b/ — lips press together, voice turns on, then pop open. (Quick: not 'buh')"
  ],
  [
    "cat",
    "/k/ — hard 'c'. Back of tongue to roof of mouth, sharp voiceless pop"
  ],
  [
    "dog",
    "/d/ — tongue tip taps firmly behind top teeth with voice. (Quick: not 'duh')"
  ],
  [
    "egg",
    "/e/ — short 'e', mouth half open, corners of lips relaxed (like 'eh')"
  ],
  [
    "fish",
    "/f/ — top front teeth gently rest on bottom lip, blow air softly. Voiceless"
  ],
  [
    "goat",
    "/g/ — hard 'g'. Like /k/ at back of throat, but with voice buzzing. (Not 'guh')"
  ],
  [
    "hat",
    "/h/ — soft breath out through an open mouth, like gently fogging a mirror"
  ],
  [
    "igloo",
    "/ɪ/ — short 'ih' sound (as in igloo, in, it). NOT 'Eye'! Mouth relaxed, jaw slightly dropped"
  ],
  [
    "jam",
    "/dʒ/ — tongue tip pushes against roof of mouth, release with a quick voiced burst"
  ],
  [
    "kite",
    "/k/ — sharp burst of air from back of tongue against soft palate. Voiceless"
  ],
  [
    "leaf",
    "/l/ — tongue tip pressed behind top teeth. Continuous /lll/ sound. (Do NOT say 'luh'!)"
  ],
  [
    "moon",
    "/m/ — lips pressed together, gentle humming sound through the nose. (Do NOT say 'muh'!)"
  ],
  [
    "nest",
    "/n/ — tongue tip behind top teeth, hum through the nose. (Do NOT say 'nuh'!)"
  ],
  [
    "octopus",
    "/ɒ/ — short 'o' sound (as in octopus, on, off). Drop jaw, round 'O' mouth. NOT 'Oh'!"
  ],
  [
    "pig",
    "/p/ — lips press together and release a small, voiceless puff of air. (Not 'puh')"
  ],
  [
    "queen",
    "'qu' makes /kw/ — two sounds together: /k/ followed immediately by /w/"
  ],
  [
    "rabbit",
    "/r/ — tongue curls back, rolled or tapped 'r'. (Crisp tap in Indian English; not 'ruh')"
  ],
  [
    "sun",
    "/s/ — teeth together, tongue behind teeth, continuous voiceless hiss. Like a snake"
  ],
  [
    "turtle",
    "/t/ — tongue tip taps sharply behind top teeth. Crisp and voiceless. (Not 'tuh')"
  ],
  [
    "up",
    "/ʌ/ — short 'u' sound (as in up, umbrella, cup). Jaw drops slightly, relaxed throat"
  ],
  [
    "van",
    "/v/ — top teeth rest on lower lip with voice vibrating. (Distinct from /w/!)"
  ],
  [
    "whale",
    "/w/ — round lips into an 'O' ring, then open. Teeth DO NOT touch lips. (Not /v/!)"
  ],
  [
    "fox",
    "/ks/ — two sounds blended: /k/ + /s/. Usually heard at the END of words (fox, box)"
  ],
  [
    "yo-yo",
    "/j/ — lips spread, tongue high, glide quickly into vowel. (Not 'yuh')"
  ],
  [
    "zebra",
    "/z/ — like /s/ with teeth together, but turn voice box ON to buzz loudly"
  ]
];

const teacherNotes = [
  {
    "action": "Mime holding a big juicy apple and taking a big crunchy bite saying /a/! /a/! Or wiggle fingers up your forearm like ants crawling.",
    "asd": "For tactile-sensitive children, demonstrate the ant crawling on your own arm or let them tap fingers on a table. A plastic toy apple gives a concrete visual and tactile anchor."
  },
  {
    "action": "Mime holding a bat and swinging to hit a ball: /b/! Or bounce a pretend ball with both hands onto the floor.",
    "asd": "Large bilateral motor movements (like swinging or bouncing) provide excellent proprioceptive input that helps ground and organize children with ASD. Use a real soft sensory ball."
  },
  {
    "action": "Click fingers together like castanets: /k/-/k/-/k/. Or scratch gently like a kitten.",
    "asd": "If finger snapping is frustrating for fine-motor challenges, give the child two rhythm sticks or wooden blocks to tap together. The crisp auditory click provides instant feedback."
  },
  {
    "action": "Pretend to hold two drumsticks and beat on a drum: /d/-/d/-/d/! Or pat your thighs rhythmically.",
    "asd": "Rhythmic drumming on thighs or a table offers deep proprioceptive pressure that many ASD learners find soothing. Rhythm also strongly supports verbal sequencing."
  },
  {
    "action": "Mime tapping a pretend egg on the edge of a pan and cracking it open with two hands: /e/-/e/.",
    "asd": "Use a plastic split toy egg that clicks open. Concrete, cause-and-effect props remove ambiguity for visual thinkers. Keep the opening gesture identical every single time."
  },
  {
    "action": "Put palms together like a swimming fish, then slowly lower them as if deflating, making a soft /fffff/ sound.",
    "asd": "The slow, steady exhalation of /f/ acts as a calming breath exercise. Children with ASD who feel overwhelmed can use this gentle breath out to self-regulate."
  },
  {
    "action": "Spiral one hand downward in a circle like water gurgling down a drain, saying /g/-/g/-/g/.",
    "asd": "Help the child place their fingertips against their throat to feel their voice box turn ON for /g/, then OFF for /k/. This tactile biofeedback makes abstract voice distinctions concrete."
  },
  {
    "action": "Hold an open palm in front of your mouth and gently pant /h/-/h/-/h/, feeling the warm breath on your hand.",
    "asd": "Holding the hand in front of the mouth gives immediate thermal and tactile confirmation of breath. A small hand mirror that fogs up is another fun, visual, high-interest tool."
  },
  {
    "action": "Hug yourself and shiver like sitting inside a freezing igloo: 'brrr! /ih/-/ih/-/ih/!' Or wiggle fingers at cheeks like mouse whiskers.",
    "asd": "Crucial: ASD learners often name the letter ('Eye') instead of saying the phonics sound ('ih'). Use the shivering action or a toy igloo to anchor the short vowel sound. Do not stretch it into 'ee'."
  },
  {
    "action": "Pretend to wobble your whole body or hands like jelly and jam on a plate: /j/-/j/-/j/!",
    "asd": "Whole-body wobbling gives vestibular stimulation that movement-seeking children crave. If the child gets easily overstimulated, limit the wobble to just their hands or fingers."
  },
  {
    "action": "Raise your hands high into the air as if holding a kite string in the wind, saying /k/-/k/-/k/.",
    "asd": "Reaching upward stretches the torso and offers calming postural input. Point out that letter K and letter C make the exact same /k/ sound to reduce confusion for rule-oriented thinkers."
  },
  {
    "action": "Hold a green leaf or mime licking an ice lolly, placing tongue tip firmly behind top front teeth: /lllllll/.",
    "asd": "NEVER add 'uh' at the end ('luh') — adding schwa makes word blending very difficult for autistic learners. Have the child feel their tongue tip glued behind their upper front teeth while humming the sound."
  },
  {
    "action": "Look up at the moon or rub your tummy, keeping lips completely closed, humming a calm, steady /mmmmmm/.",
    "asd": "Keep lips firmly shut until the sound stops (never 'muh'). Have the child place a finger on the side of their nose or lips to feel the vibration. The continuous /m/ vibration is very soothing for sensory seekers."
  },
  {
    "action": "Spread arms out wide like a mother bird flying back to her nest, making a continuous engine hum: /nnnnnn/.",
    "asd": "Do NOT say 'nuh'! Sensory test: have the child hum /nnn/ and gently pinch their nose — the sound immediately stops! This visual and physical cause-and-effect experiment is memorable and engaging."
  },
  {
    "action": "Wiggle all 8 fingers like octopus tentacles in the ocean, chanting /o/-/o/-/o/. Or mime flicking a light switch on and off.",
    "asd": "Avoid the long alphabet name 'Oh'. Use a hand mirror so the child can visually inspect their own mouth making a round open oval shape. The on/off light switch cause-and-effect action is also highly preferred."
  },
  {
    "action": "Hold up your index finger like a birthday candle and puff it out saying /p/! /p/!",
    "asd": "Hold a light feather, tissue, or strip of paper in front of the mouth. The child sees the paper flutter when they produce /p/ correctly without voice. Visual cause-and-effect is deeply effective."
  },
  {
    "action": "Mime placing a sparkling royal crown on your head, or make duck hands quacking /kw/-/kw/-/kw/.",
    "asd": "Children with ASD thrive on clear, invariable rules: 'Q never goes anywhere without its best friend U!' Teach 'qu' as a buddy pair so they never look for lone Q in reading."
  },
  {
    "action": "Put two fingers up as rabbit ears and twitch them, or pretend to be a playful puppy tugging a cloth: /rrrrr/.",
    "asd": "Indian English speakers naturally produce a tapped or retroflex /r/ — validate this natural accent! Do not force a heavy American 'er' sound. Use a soft toy rabbit as a tangible classroom prop."
  },
  {
    "action": "Weave one hand smoothly through the air in an 'S' wave like a slithering snake, hissing a long /ssssss/.",
    "asd": "The smooth snake hand motion gives visual flow. The long hiss is easy to sustain and self-monitor. Contrast with /z/ by checking whether the throat is vibrating."
  },
  {
    "action": "Turn head left and right like watching a tennis ball, or tap fingers like turtle footsteps: /t/-/t/-/t/.",
    "asd": "Keep it short and crisp (never 'tuh'). Use a finger-tapping pattern on the desk. Bilateral tracking (watching a tennis ball or finger move left-to-right) also prepares eyes for reading left-to-right."
  },
  {
    "action": "Point both index fingers straight up toward the sky, jumping or standing up saying /u/-/u/-UP!",
    "asd": "Standing up on the word 'UP' provides vestibular and gross motor activation. Contrast /u/ (short, deep in throat) with /a/ (wide mouth) using side-by-side mouth shapes."
  },
  {
    "action": "Hold a pretend steering wheel and drive a van around the room, making a continuous motor vibration /vvvvv/.",
    "asd": "Touch the lower lip to feel the tickle and vibration of top teeth. For Indian learners, practice contrasting /v/ (teeth on lip) with /w/ (both lips rounded like a kiss, teeth do not touch)."
  },
  {
    "action": "Cup hands together and arch them through the air like a big whale diving in ocean waves: /w/-/w/-/w/.",
    "asd": "Critical Indian English distinction: Ensure the child rounds their lips into an 'O' ring. Place an open palm in front of the mouth to feel the puff of wind when saying /w/ (whale/wind)."
  },
  {
    "action": "Cross your arms in front of your chest to make an 'X' shape, or mime an x-ray snapshot: /ks/-/ks/!",
    "asd": "Explain explicitly that X is special: it almost always comes at the end or middle of words (like f-o-x). Crossing arms across the chest provides deep pressure across the body, which aids sensory regulation."
  },
  {
    "action": "Move one hand up and down with an index finger hooked, pretending to play with a yo-yo: /y/-/y/-/y/.",
    "asd": "A real yo-yo or ball on an elastic string is a fantastic visual fascination for many children with ASD. Use the repetitive rhythmic up-and-down motion to anchor the /y/ glide."
  },
  {
    "action": "Put elbows out and flap your hands like a busy bee buzzing around a zebra: /zzzzzz/!",
    "asd": "Vocal cord buzzing can be felt strongly by placing hands on top of the head or against the throat. This tactile vibration is highly rewarding and makes the difference between /s/ and /z/ crystal clear."
  }
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
const teacherAction = document.querySelector("#teacher-action");
const teacherAsd = document.querySelector("#teacher-asd");
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

function selectLetter(index, force = false) {
  if (selected === index && !force) return;

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

  if (teacherAction && teacherAsd) {
    const note = teacherNotes[index];
    teacherAction.textContent = note.action;
    teacherAsd.textContent = note.asd;
  }
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

// Initialize first letter completely
selectLetter(0, true);
