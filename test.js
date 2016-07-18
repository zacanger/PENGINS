'use strict'

const
  tap    = require('tap')
, pengin = require('./')

tap.test('get a pengin', t => {
  t.plan(1)
  let peng = pengin()
  t.equal(typeof pengin, 'function', 'does it')
  console.log(peng)
})

let sqweek =
' ( T >   '  + '\n' +
' // /\   '  + '\n' +
' \ _ /,, '  + '\n'

tap.test('get a pengin', t => {
  t.plan(1)
  let peng = pengin('sqweek')
  t.equal(peng, sqweek, 'does it')
  console.log(peng)
})

tap.test('get a pengin', t => {
  t.plan(1)
  let pengins = pengin.pengins
  t.ok(pengins.indexOf('sqwak') !== -1, 'does it')
})
