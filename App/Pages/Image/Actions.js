const Alt = require('../../Alt/Alt');
const ImgurAPI = require('../../Common/ImgurAPI');

class ImageActions 
{
    receiveImage(image) 
    {
        this.dispatch(image);
    }

    receiveImageError(error) 
    {
        this.dispatch(error);
    }

    requestImage(id) 
    {
        const actionDispatcher = this;

        actionDispatcher.dispatch();

        ImgurAPI.requestImage(id).then((image) => {
            actionDispatcher.actions.receiveImage(image.data.data);
        }).catch((error) => {
            actionDispatcher.actions.receiveImageError(error);
        });
    }
}

module.exports = Alt.createActions(ImageActions);
