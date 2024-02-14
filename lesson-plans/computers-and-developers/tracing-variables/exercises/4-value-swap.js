'use strict';

debugger;

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y';
let b = 'x';
let t = '';

console.log(a, b, t);
// [y,x,'',]

t = a;
a = b;
b = t;

console.log(a, b, t);
// [x,y,y]

// what did you do in this program?
// ASSIGN New values are assigned by reversing the values of the variables

// what are the final values of `a` and `b`?
// [x,y]
// how are they changed from the initial values
// New values are assigned by reversing the values of the variables

// is it possible to swap a and b without using t?
// no, i need an empty value " "
