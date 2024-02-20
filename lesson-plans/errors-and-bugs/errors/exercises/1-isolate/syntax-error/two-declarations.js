'use strict';

debugger;

console.log('--- in execution phase ---');

/*
  environment:

  name: tree
  message: 'birch'

  location: 22 line

  life cycle: execution

  the mistake: in the second line do not add let

  the fix(es): let tree = 'birch';
*/

let tree = 'oak';

tree = 'birch';

console.log(tree);
