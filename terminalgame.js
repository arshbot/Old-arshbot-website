var colors = require('colors'),
    Terminal = require('./index');

var terminal = new Terminal({columns: 20, rows: 2});

terminal.write("Terminal.js in rainbows".rainbow);

console.log(terminal.toString('ansi'));