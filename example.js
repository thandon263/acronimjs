
const acrnm = require("./")

acrnm("By The Way", (err, result) => {
	 try {
		console.log(result.toLowerCase())		
	} catch(err) {
		console.log(err)
	}
})
