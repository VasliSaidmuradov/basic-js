class VigenereCipheringMachine {
	constructor(data) {
		this.data = data
	}
	encrypt(message, key) {
		if (!message || !key) throw new Error()
		let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
		let str = message.toLowerCase()
		key = key.toLowerCase()
		let res = ''
		let keyIndex = 0
		// console.log(str)
		for (let i = 0; i < str.length; i++) {
			let strIndex = alphabet.indexOf(str[i])
			if (strIndex < 0) {
				res += str[i]
				continue
			}

			let resIndex = strIndex + alphabet.indexOf(key[keyIndex])
			// console.log(strIndex, resIndex)
			keyIndex++
			if (keyIndex >= key.length) {
				keyIndex = 0
			}
			if (resIndex >= 0 && resIndex < 26) {
				res += alphabet[resIndex]
			}
			if (resIndex > 25) {
				res += alphabet[resIndex - 26]
			}
		}
		if (this.data === false) {
			res = res.split('').reverse().join('')
		}
		return res.toUpperCase()
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) throw new Error()
		let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
		let str = encryptedMessage.toUpperCase()
		key = key.toUpperCase()
		let res = ''
		let keyIndex = 0
		// console.log(str)
		for (let i = 0; i < str.length; i++) {
			let strIndex = alphabet.indexOf(str[i])
			if (strIndex < 0) {
				res += str[i]
				continue
			}

			let resIndex = strIndex - alphabet.indexOf(key[keyIndex])
			// console.log(strIndex, resIndex)
			keyIndex++
			if (keyIndex >= key.length) {
				keyIndex = 0
			}
			if (resIndex >= 0 && resIndex < 26) {
				res += alphabet[resIndex]
			}
			if (resIndex < 0) {
				res += alphabet[resIndex + 26]
			}
		}
		// console.log(res)
		if (this.data === false) res = [...res].reverse().join('')
		return res
	}
}

module.exports = VigenereCipheringMachine;
