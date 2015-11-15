#!/usr/bin/env node

var pengin = require('./')
var argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('PENGIN\nget u som pengin in ur xterm\n' + pengin())
  .example('pengin')
  .alias('p', 'pengins')
  .describe('p', 'see da pengins')
  .argv

var choice = argv._.join(' ')

var output = argv.p ? 'tipes of pengin: ' + pengin.pengins.join(', ') : pengin(choice)

process.stdout.write(output)
process.stdout.write('\n')
