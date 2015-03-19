#!/usr/bin/env node

require('shelljs/global');
var child_process = require('child_process');
var subl = '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl';

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var cp_files = ['index.js', 'package.json', 'LICENSE', 'README.md'];

if ( argv.length >= 1 ) {
  var first_arg = argv[0];
  if ( first_arg == '-h' || first_arg == '--help' ) {
    echo("icli usage : icli init")
  }
  
  if ( first_arg == 'init' ) {
    file_path.forEach(function(path){
      cp('-f', file_path + '/' + path, current_path);  
    });
    
  }
}

// execFile: executes a file with the specified arguments
child_process.exec('cat *.js bad_file | wc -l',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});