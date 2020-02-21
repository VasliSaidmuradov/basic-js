module.exports = function repeater(str, { repeatTimes: repTime = 1, separator: sep = '+', addition: add = '', additionRepeatTimes: addRepTime = 1, additionSeparator: addSep = '|' } = options) {
  str = str === null ? 'null' : str.toString() 
  add = add === null ? 'null' : add.toString()
  let res
  let addition = []
  let repeat = []
  for (let i = 1; i <= addRepTime; i++) {
    addition.push(add)
  }
  addition = addition.join(`${addSep}`)

  for (let i = 1; i <= repTime; i++) {
    repeat.push(str + addition)
  }
  repeat = repeat.join(`${sep}`)
  res = repeat
  return res
  // return repeat.join(`${sep}`)
}