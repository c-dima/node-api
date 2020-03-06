
const findById = db => id => {
    return db.findById({ _id: id });
}

module.exports = function factory(db) {
    return {
        findById: findById(db)
    }
};