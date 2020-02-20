module.exports = function countCats(cats) {
  return cats ? cats.flat(Infinity).filter(el => el == '^^').length : 0
}
