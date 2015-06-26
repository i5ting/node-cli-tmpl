#!/usr/bin/env node

require('shelljs/global');
var child_process = require('child_process');

var argv = process.argv;
argv.shift();
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var cp_files = ['.coveralls.yml', '.travis.yml','gitignore','Gulpfile.js', 'tmpl.js', 'package.json', 'LICENSE', 'README.md'];

echo("start init cli-tmpl...");

mkdir(current_path + '/test');
cp('-f',file_path + '/test.js', current_path + '/test');

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