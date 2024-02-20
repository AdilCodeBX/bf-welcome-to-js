import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

debugger;

/*
  environment: Chrome

  name: Syntax error
  message: invalid left-hand side expression in prefix operation

  location: line 25

  life cycle: execution

  the mistake: hyphen in the console

  the fix(es): add quotes inside the console for the string
*/

whenFormDataChanges('input', () => {
  console.log('form data changed');

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});
