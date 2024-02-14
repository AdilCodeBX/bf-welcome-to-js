'use strict';

debugger;

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar;
}

alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/

// hyphen after each character
let text1 = null;
while (text1 === null) {
  text1 = prompt('enter some text, each character will be doubled with hyphen');
}

let doubled1 = '';
for (let nextChar of text1) {
  doubled1 = doubled1 + "'-'" + nextChar + "'-'" + nextChar;
}

alert(doubled1);

// hyphen  between the characters.
let text2 = null;
while (text2 === null) {
  text2 = prompt('enter some text, each character will be doubled :');
}

let doubled2 = '';
for (let nextChar of text2) {
  doubled2 = doubled2 + "'-'" + nextChar + nextChar;
}

alert(doubled2);
