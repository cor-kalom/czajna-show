const Actions = require('./Actions');
const Alt = require('../../Alt/Alt');

class GalleryStore 
{
    constructor() 
    {
        this.bindActions(Actions);
        this.loading = false;
        this.gallery = [];
        this.error = null;
    }

    onRequestGallery() 
    {
        this.loading = true;
    }

    onReceiveGallery(gallery) 
    {
        this.gallery = gallery;
        this.loading = false;
    }
    
    onReceiveGalleryError(error) 
    {
        this.error = error;
        this.loading = false;
    }
}

module.exports = Alt.createStore(GalleryStore);