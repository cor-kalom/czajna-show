const Actions = require('./Actions');
const Alt = require('../../Alt/Alt');

class ImageStore 
{
    constructor() 
    {
        this.bindActions(Actions);
        this.loading = false;
        this.image = {};
        this.error = null;
    }

    onRequestImage() 
    {
        this.loading = true;
    }

    onReceiveImage(image) 
    {
        this.image = image;
        this.loading = false;
    }

    onReceiveImageError(error) 
    {
        this.error = error;
        this.loading = false;
    }
}

module.exports = Alt.createStore(ImageStore);