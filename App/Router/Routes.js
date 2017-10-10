const React = require('react');
const { Route, DefaultRoute } = require('react-router');

const HomePage = require('../Pages/Home/Page');
const GalleryPage = require('../Pages/Gallery/Page');
const ImagePage = require('../Pages/Image/Page');

const routes = (
    <Route name="homePage" path='/' handler={HomePage}>
        <DefaultRoute name="galleryPage" handler={GalleryPage} />
        <Route name="imagePage" path="/image/:id" handler={ImagePage} />
    </Route>
);

module.exports = routes;
