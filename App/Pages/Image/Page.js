const React = require('react');
const { RouteHandler, Link } = require('react-router');
const ListenerMixin = require('alt/mixins/ListenerMixin');

const Actions = require('./Actions');
const Store = require('./Store');

const Image = require('../../Components/Image');

const Page = React.createClass({

    mixins: [ListenerMixin],
    
    getInitialState() {
        return Store.getState();
    },

    componentWillMount() {
        this.listenTo(Store, this._onChange);
    },

    componentDidMount() {
        console.log(this.props.params);
        Actions.requestImage(this.props.params.id);
    },

    _onChange() {
        this.setState(Store.getState());
    },

    render() {

        let image = null;
        
        if (this.state.loading) {
            image = (
                <div className="loading-element"><img src="171.gif" /></div>
            )
        } else {
            if (this.state.error) {
                image = (
                    <div className="error">{this.state.error}</div>
                )
            } else {
                image = (
                    <Image image={this.state.image} />
                )
            }
        }

        return (
            <div>
                <div id="menu-top">
                    <Link to='/'>Cosplay</Link>
                </div>
                <div id="body">
                    {image}
                </div>
            </div>
        );
    }
});

module.exports = Page;