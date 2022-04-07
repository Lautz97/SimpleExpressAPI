const mongoose = require("mongoose")
const { Model, Schema } = mongoose

const oggetto = new Schema({
	nome: String
})
class Oggetto extends Model {
	/**
	 *
	 * @param {String} n the name of the product
	 */
	constructor(n, d, p, m) {
		super()
		this.nome = n
	}

	static fromObj(obj) {
		return new Oggetto(obj.nome)
	}
}

module.exports = mongoose.model(Oggetto, oggetto, "Oggetto")
