var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

shell.exec(`cd ${__dirname}`);
shell.exec('git add .');
shell.exec('git commit -m "update"');
shell.exec('git push origin master');
