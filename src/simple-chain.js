const chainMaker = {
  arr: [],
  getLength: function () {
    return this.arr.length
  },
  addLink: function (value) {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink: function (position) {
    if (typeof position !== 'number' || !Number.isInteger(position)) {
      this.arr = []
      throw new Error('Uncorrect value')
    }
    if (position > this.arr.length || position <= 0) {
      this.arr = []
      throw new Error('Uncorrect position')
    }
    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain: function () {
    this.arr.reverse()
    return this
  },
  finishChain: function () {
    let res = this.arr.join('~~')
    this.arr = []
    return res
  }
}


module.exports = chainMaker