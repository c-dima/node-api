const userServiceFactory = require('./user-service');

module.exports = function factory(container) {
    containser.set('userService', userServiceFactory(container));
}