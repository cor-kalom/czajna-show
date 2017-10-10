const React = require('react');
const { Link } = require('react-router');

const Image = React.createClass({

    render() {

        return(
            <div className='image'>
                <img src={this.props.image.link} />
            </div>
        )
    }
});

module.exports = Image;