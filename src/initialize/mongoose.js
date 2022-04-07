const mongoose = require("mongoose")
const config = require("../config")
const collections = require("../utilities/persistanceUtilities/collectionsEnum")

module.exports = class MongooseStarter {
	constructor() {
		// console.dir(config)
	}

	async dbConnect() {
		let connection
		try {
			connection = await mongoose
				.connect(config.databaseURL, {
					useNewUrlParser: true,
					useUnifiedTopology: true
				})
				.catch((err) => {
					console.dir(err)
				})
		} catch (error) {
			console.dir(error)
			return false
		} finally {
			this.createIdxs()
			return connection.connection.db
		}
	}

	async createIdxs() {
		const list = (await mongoose.connection.db.listCollections().toArray()).map(({ name }) => name)
		Object.keys(collections).forEach(async (collectionItem) => {
			if (!list.includes(collectionItem)) {
				await (
					await mongoose.connection.db.createCollection(collectionItem)
				).createIndex(eval("collections." + collectionItem + ".key"), { unique: true })
			}
		})
	}

	async dbDisconnect() {
		mongoose.disconnect()
	}
}
