const axios = require('axios');
const ImgurConf = require('../ImgurConf');

const HEADER = {
    'headers': {
        'authorization': 'Client-ID ' + ImgurConf.CLIENT_ID
    }
};

class ImgurAPI 
{
    static requestGallery() 
    {
        return axios.get('https://api.imgur.com/3/gallery/' + ImgurConf.GALLERY_ID + '/images', HEADER);
    }

    static requestImage(id) 
    {
        return axios.get('https://api.imgur.com/3/image/' + id, HEADER);
    }
}

module.exports = ImgurAPI;
