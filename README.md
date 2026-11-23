# Letter Sounds

Tap a letter from A to Z to hear a common English phonics sound. The selected letter, example word, and illustration appear together. Tap the letter again or use **Play sound** to repeat it.

The app teaches short vowel sounds, hard C and G, Q with U as in *queen*, and X as in *fox*. The alphabet switch hides lowercase letters. **Settings** lets you hide pictures. These preferences stay on the current browser when local storage is available.

## Open or host the app

- Open the standalone `letter-sounds.html` in a web browser. It contains all 26 sounds and works offline. To rebuild it from this folder, run `python3 build_standalone.py letter-sounds.html`.
- On a computer, open `index.html` in a web browser. Keep the files and the `assets` folder together.
- On a static host, publish `index.html`, `styles.css`, `app.js`, and `assets/` together. The app also works under a subdirectory. It requires no build command, keys, server code, or external network requests during use.
- To preview over HTTP, run `python3 -m http.server 8000 --bind 127.0.0.1` in this folder and open `http://127.0.0.1:8000/`.

## Credits

Phonics sounds by [Phonicademy](https://phonicademy.com/audio-license), used within this app under its audio license. The illustrations were generated for this app. Andika and Nunito are distributed under the SIL Open Font License. Their license texts are in `assets/fonts/`.
