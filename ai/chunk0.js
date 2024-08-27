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
	const func = function(input = "") {
		// Token id 1 is a greeting. the AI must respond to it carefully.
		// Token id 2 is a "how are you" question.
		const regexes = [
			{
				regex: /h(?:ey(?:a)|i(?:ya?)|ello|owdy)(?:(,?)\s*there?)\s*(\w+)?/gi,
				parse: function(match = "", name) {
					return {
						token: 1,
						name
					}
				}
			},
			{
				regex: /(?:how're\s*you|how\s*(?:(?:was|is)\s*(?:your|(\w+)'s)\s*(?:day|week))|how's\s*(?:(?:your|(\w+)'s)\s*(?:day|week)))/gi,
				parse: function(match = "", name) {
					return {
						token: 2,
						name
					}
				}
			}
		]
		let ai = "", maxTokens = new Array(500), i = 0; // 500 is the amount of tokens there should be.
		for (const parser of regexes) {
			
			i++;
		}
	}
	return func
})
