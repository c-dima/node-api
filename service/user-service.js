
const findById = container => id => {
    const userDAO = container.get('userDAO');
    return userDAO.findById({ _id: id });
}

const create = container => async props => {
    const userDAO = container.get('userDAO');
    const eventBus = container.get('eventBus');
    //do some validation
    const user = await userDAO.insert(props);
    eventBus.emit('USER_CREATED', user);

    return user;
}

const otherMethod = container => async param => {
    const { findById } = container.get('userService')
    const user = await findById(param.id)
    //do something with user
}

module.exports = function factory(container) {
    return {
        findById: findById(container),
        create: create(container)
    }
};