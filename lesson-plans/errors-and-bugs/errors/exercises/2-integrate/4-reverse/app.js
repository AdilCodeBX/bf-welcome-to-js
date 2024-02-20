import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';
debugger;

/*
  environment: Chrome

  name: Uncaught type error
  message: screaming is not iterable at htmFormElement

  location:  line 35

  life cycle: execution

  the mistake: checkbox don't contain text 

  the fix(es): change screaming with text
*/

whenFormDataChanges('reversify', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) {
    reversed = character + reversed;
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (screaming) {
    finalText = reversed.toUpperCase();
  } else {
    finalText = reversed.toLowerCase();
  }

  // --- display the final text ---

  displayString('out', finalText);
});
