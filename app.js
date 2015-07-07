#!/usr/bin/env node

var http = require('http'),
    httpProxy = require('http-proxy'),
    argv = require('optimist').argv,
    clc = require('cli-color');

var green = clc.green.bold;
var blue = clc.blue.bold;
var red = clc.red;

var config = {
    target: argv.to
};

httpProxy.createProxyServer(config).listen(argv.port);

console.log('');
console.log(red('--------------------- Proxy Server Running ---------------------'));
console.log(blue('All Trafic Redirect to: '), green(config.target));
console.log(blue('Which are coming on your machine PORT: '), green(argv.port));
console.log(red('----------------------------------------------------------------'));