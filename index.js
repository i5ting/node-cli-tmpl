#!/usr/bin/env node

require('shelljs/global');
var child_process = require('child_process');
var subl = '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl';

var argv = process.argv;
argv.shift();
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var cp_files = ['.gitignore', 'tmpl.js', 'package.json', 'LICENSE', 'README.md'];

echo("start init cli-tmpl...");

cp_files.forEach(function(path){
  var p = path;
  if(path == 'tmpl.js'){
    p = "index.js";
  }
  
  if(path == 'gitignore'){
    p = ".gitignore";
  }
  
  cp('-f', file_path + '/' + path, current_path +'/' + p);  
});

echo("init finished");