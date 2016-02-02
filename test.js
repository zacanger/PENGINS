var tap    = require('tap')
  , pengin = require('./')

tap.test('get a pengin', function(t){
  t.plan(1)
  var peng = pengin()
  t.equal(typeof pengin, 'string', 'does it')
  console.log(peng)
})

var sqweek =
' ( T >   '  + '\n' +
' // /\   '  + '\n' +
' \ _ /,, '  + '\n'

tap.test('get a pengin', function(t){
  t.plan(1)
  var peng = pengin('sqweek')
  t.equal(peng, sqweek, 'does it')
  console.log(peng)
})

tap.test('get a pengin', function(t){
  t.plan(1)
  var pengins = pengin.pengins
  t.ok(pengins.indexOf('sqwak') !== -1, 'does it')
})

