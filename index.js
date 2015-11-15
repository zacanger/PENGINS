var penginz = require('./penginz')
var pengins = Object.keys(penginz)
module.exports = function (peng) {
  if (!peng) peng = pengins[~~(Math.random() * pengins.length)]
  return penginz[peng]
}
module.exports.pengins = pengins
