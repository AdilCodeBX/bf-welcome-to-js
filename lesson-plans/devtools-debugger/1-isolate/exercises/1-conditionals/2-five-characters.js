'use strict';

debugger;

let input = 'hello';

input = prompt('enter something with 5 characters:');

input = 'sonia';

let message = '';
if (input === false) {
  message = ':(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} else {
  message = 'too long';
}
if (input.length > 6) {
  message = 'delete 1 character';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
