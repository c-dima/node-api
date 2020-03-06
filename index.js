const EventBus = require('./lib/event-bus');
const config = require('./config');
const dalFactory = require('./dal');
const serviceFactory = require('./service');
const apiFactory = require('./api');

const container = new Map();
container.set('eventBus', new EventBus());
container.set('config', config);

const dal = dalFactory(container);


