
const acrnm = require("./")

acrnm("by the way", (err, result) => {
	 try {
		console.log(result.toLowerCase())		
	} catch(err) {
		console.log(err)
	}
})
