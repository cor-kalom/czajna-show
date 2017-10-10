const React = require('react');
const { RouteHandler, Link } = require('react-router');
const ListenerMixin = require('alt/mixins/ListenerMixin');

const Actions = require('./Actions');
const Store = require('./Store');

const ImageThumbnail = require('../../Components/ImageThumbnail');

const Page = React.createClass({

    mixins: [ListenerMixin],

    getInitialState() {
        return Store.getState();
    },

    componentWillMount() {
        this.listenTo(Store, this._onChange);
    },

    componentDidMount() {
        if (!this.state.gallery.length) {
            Actions.requestGallery();
        }
    },

    _onChange() {
        this.setState(Store.getState());
    },

    render() {
        let gallery = null;

        if (this.state.loading) {
            gallery = (
                <div className="loading-element"><img src="171.gif" /></div>
            )
        } else {

            if (this.state.error) {
                gallery = (
                    <div className="error">
                        <img src='https://i.ytimg.com/vi/_aQ4sQMh2cs/hqdefault.jpg' />Coś się zepsuło... {this.state.error}</div>
                )
            } else {
                gallery = this.state.gallery.slice(0, 10).map((image) => {
                    return (
                        <ImageThumbnail key={image.id} image={image} />
                    );
                })
            }
        }

        return (
            <div>
                <div id="menu-top">
                    <Link to='/'>Cosplay</Link>
                </div>
                <div id="body">
                    <ul id="gallery-elements">
                        <h1>Maksymalnie 10 obrazków</h1>
                        {gallery}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Page;