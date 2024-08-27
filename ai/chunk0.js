// Basic 1.1
const setup = (function(inst = {
	instructions: ""
}) {
	const information = {
		username: "",
		history: [],
		instructions: []
	}
	function ranItem(stringOrArray) {
		return stringOrArray[Math.floor(Math.random() * stringOrArray.length)]
	}
	const reheirbase = {
		hello: [
			[" "],
			["Well h", "H"],
			["ello", "ey", "i"],
			[", there", ""],
			["!", "."]
		]
	} // Respoding Heirarchy Base
	const func = function(input = "") {
		// Token id 1 is a greeting. the AI must respond to it carefully.
		// Token id 2 is a "how are you" question.
		const regexes = {
				regex: /h(?:ey(?:a)|i(?:ya?)|ello|owdy)(?:(,?)\s*there?)\s*(\w+)?|(?:how're\s*you|how\s*(?:(?:was|is)\s*(?:your|(\w+)'s)\s*(?:day|week))|how's\s*(?:(?:your|(\w+)'s)\s*(?:day|week)))/gi,
				parse: function(match = "", ...name) {
					return {
						token: (match !== "") + 1,
						name: name.find(name => !!name)
					}
				}
		}
		let ai = "", i = 0, matches = Array.from(input.match(regexes.regex)).map(match => regexes.parse(match, Array.from(match.match(/^(?:\w+)|(\w+)/g)))); // 500 is the amount of tokens there should be.
		// AI responds
		let decisions = {
			shouldGreet: false
		}
		for (const parse of matches) {
			switch (parse.token) {
				case 1:
					decisions.shouldGreet = i === 0
					break
				case 2:
					decisions.shouldGreet = false
					ai += reheirbase.hello.reduce((item, result) => result + ranItem(item), "")
					break
			}
			i++
		}
		return ai.trim()
	}
	return func
})
