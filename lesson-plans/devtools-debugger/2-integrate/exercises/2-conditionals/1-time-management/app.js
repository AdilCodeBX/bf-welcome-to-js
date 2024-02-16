import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('sleep-info', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read user input ---

  // read a boolean from the <input> with id "tired"
  let isTired = readBoolean('tired');

  // read a boolean from the <input> with id "free-time"
  let hasTime = readBoolean('free-time');

  let isFree = readBoolean('free');

  // --- generate advice ---

  let advice = '';
  if (isTired && hasTime && isFree) {
    advice = 'Take a nap!';
  } else if (!isTired && hasTime && isFree) {
    advice = 'Study some flashcards.';
  } else if (isTired && !hasTime && !isFree) {
    advice = 'Make some coffee.';
  } else if (!isTired && !hasTime && !isFree) {
    advice = 'Have a great day!';
  } else if (isTired && hasTime && !isFree) {
    advice = 'watch some tutorials about js!';
  }

  // --- display the advice ---

  // display a string to the <pre> with id "advice-area"
  displayString('advice-area', advice);
});

/*  ===== Challenges =====

  - change the conditional so it uses `else` instead of `else if`

*/
