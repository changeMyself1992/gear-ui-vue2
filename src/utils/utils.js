/* 类型检测 */
const Type = {}
// eslint-disable-next-line no-cond-assign
for (let i = 0, type; type = ['String', 'Number', 'Boolean', 'Array', 'Object', 'Function'][i++];) {
  (function (type) {
    Type['is' + type] = function (obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']'
    }
  })(type)
}

export {
  Type
}
