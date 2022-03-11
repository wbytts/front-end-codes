var shell = require('shelljs');

var result = shell.ls();
/*
[
  '001-hello.js',
  'commit-gitee-script.js',
  'echo.js',
  'note',
  stdout: '001-hello.js\ncommit-gitee-script.js\necho.js\nnote\n',
  stderr: null,
  code: 0,
  cat: [Function: bound ],
  exec: [Function: bound ],
  grep: [Function: bound ],
  head: [Function: bound ],
  sed: [Function: bound ],
  sort: [Function: bound ],
  tail: [Function: bound ],
  to: [Function: bound ],
  toEnd: [Function: bound ],
  uniq: [Function: bound ]
]
 */

var purgeResult = result.map(x => x);

console.log(purgeResult);
