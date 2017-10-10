const React = require('react');
const { Link } = require('react-router');

const ImageThumbnail = React.createClass({

    render() {

        return(
            <Link to='imagePage' params={{id: this.props.image.id}}>
                <li className="image-thumbnail" key={this.props.image.id}>
                    <img src={this.props.image.link} width="100" height="100" />
                </li>
            </Link>
        )
    }
});

module.exports = ImageThumbnail;
