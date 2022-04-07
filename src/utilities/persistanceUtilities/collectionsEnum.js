module.exports = class collectionsEnum {
	static Oggetto = new collectionsEnum("Oggetto", "nome")

	constructor(name, key) {
		this.name = name
		this.key = key
	}
}
