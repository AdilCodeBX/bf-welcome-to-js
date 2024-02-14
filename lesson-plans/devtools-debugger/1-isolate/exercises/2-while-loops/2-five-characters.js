'use strict';
debugger;

let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let input1 = null;
while (input1 === null || input1.length !== 2) {
  input1 = prompt('enter something with 2 characters:');
}
let message1 = 'thank you for that"' + input1 + '" !';

alert(message1);
let input2 = null;
while (input2 === null || input2.length !== 3) {
  input2 = prompt('enter something with 3 characters:');
}
let message2 = message1 + input2 + '!';

alert(message2);
