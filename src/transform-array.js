module.exports = function transform(arr) {
	let res = [];
	const disNext = '--discard-next',
		disPrev = '--discard-prev',
		doNext = '--double-next',
		doPrev = '--double-prev';
	// arr = arr.flat(Infinity)
	if (!Array.isArray(arr)) {
		throw new Error('It is not array')
	}
	if (!arr.length) {
		return res
	}
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case disNext:
				i++
				break
			case disPrev:
				res.length !== 0 ? res.pop() : res
				break
			case doNext:
				i < arr.length - 1 ? res.push(arr[i + 1]) : res
				break
			case doPrev:
				i >= 1 ? res.push(arr[i - 1]) : res
				break
			default:
				res.push(arr[i])
		}
	}
	return res
}