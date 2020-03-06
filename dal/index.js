const { MongoClient } = require('mongodb');
const userFactory = require('./user/user-dao');

module.exports = async function factory(container) {
    const { db: dbConfig } = container.get('config');
    
    const client = new MongoClient(dbConfig.uri, dbConfig.connectionOptions);
    await client.connect();
    const db = client.db();

    container.set('userDAO', userFactory(db));
}