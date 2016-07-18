#!/usr/bin/env node

'use strict'

const
  pengin = require('./')
, argv = require('yargs')
  .alias('h', 'help')
  .help('help')
  .usage('PENGIN\nget u som pengin in ur xterm\n' + pengin())
  .example('pengin')
  .alias('p', 'pengins')
  .describe('p', 'see pengins')
  .argv
, choice = argv._.join(' ')
, output = argv.p ? 'types of pengin: ' + pengin.pengins.join(', ') : pengin(choice)

process.stdout.write(output)
process.stdout.write('\n')
