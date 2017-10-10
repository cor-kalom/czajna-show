const ReactRouter = require('react-router');
const routes = require('./Routes');

const router = ReactRouter.create({
    location : ReactRouter.HashLocation,
    routes : routes
});

module.exports = router;
