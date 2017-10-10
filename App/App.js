const React = require('react');
const router = require('./Router/Router');

router.run((Handler, state) => {
    React.render(<Handler {...state} />, document.body);
});
