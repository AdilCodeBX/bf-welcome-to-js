/* eslint-disable linebreak-style */
'use strict';

debugger;

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message:

  location: js

  life cycle:  line 33

  the mistake: we had isHappy = true; two times we don't need that

  the fix(es): isHappy = true;
*/
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line linebreak-style

let isHappy = false;

console.log(isHappy);

isHappy = true;

console.log(isHappy);

isHappy = 'good';

console.log(isHappy);
