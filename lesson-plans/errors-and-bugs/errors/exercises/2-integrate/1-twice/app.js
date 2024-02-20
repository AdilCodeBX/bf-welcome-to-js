// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

('use strict');

debugger;

/*
  environment: Chrome

  name:
  message:

  location: line 36

  life cycle:  execution

  the mistake:  miss the = , and we don't need + before text

  the fix(es): let repeated = + text + '\n' + text;
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
