module.exports = class DepthCalculator {
	// constructor() { }
	count = 1
	calculateDepth(arr) {
		// let count = 1
		let res
		if(arr.find(el => Array.isArray(el))) {
			this.count++
			return this.calculateDepth(arr.flat())
		}
		res = this.count
		this.count = 1
		return res
	}
}