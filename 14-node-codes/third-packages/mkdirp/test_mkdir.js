var mkdirp = require('mkdirp');

mkdirp('f:/temp/upload').then(made => console.log(`made directories, starting with ${made}`));
