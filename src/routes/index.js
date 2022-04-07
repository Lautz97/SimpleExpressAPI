const express = require("express")
const path = require("path")
const router = express.Router()
const config = require("../config")

router.all("/*/", (req, res, next) => {
	console.dir(`requested: ` + req.url + `    ` + `with method: ` + req.method)
	next()
})
router.get("/favicon.ico", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/favicon.ico"))
})

router.get("/", (req, res) => {
	res.status(200)	
	res.send({ message: "HELLO WORLD" })
})

module.exports = router
