const React = require('react');
const { RouteHandler, Link } = require('react-router');
const { PropTypes } = React;

const Page = React.createClass({

    propTypes: {
        params: PropTypes.object.isRequired,
        query: PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div id="container">
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

module.exports = Page;