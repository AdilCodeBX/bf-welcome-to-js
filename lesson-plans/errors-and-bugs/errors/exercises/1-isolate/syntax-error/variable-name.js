'use strict';

debugger;

console.log('--- in execution phase ---');

/*
  environment: js

  name: const number
  message: 'three'

  location: line 27

  life cycle: execution

  the mistake: we can't declare variable with a number

  the fix(es): const number = 'three'
*/

const number = 'three';

console.log(number);
