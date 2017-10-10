const Alt = require('../../Alt/Alt');
const ImgurAPI = require('../../Common/ImgurAPI');

class GalleryActions 
{
    receiveGallery(gallery) 
    {
        this.dispatch(gallery);
    }

    receiveGalleryError(error) 
    {
        this.dispatch(error);
    }

    requestGallery() 
    {
        const actionDispatcher = this;

        actionDispatcher.dispatch();

        ImgurAPI.requestGallery().then((gallery) => {
            actionDispatcher.actions.receiveGallery(gallery.data.data);
        }).catch((error) => {
            actionDispatcher.actions.receiveGalleryError(error);
        });
    }
}

module.exports = Alt.createActions(GalleryActions);
