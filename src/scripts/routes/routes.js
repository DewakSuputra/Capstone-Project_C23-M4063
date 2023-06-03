import HomePage from '../views/pages/home-page';
import ListGroundPage from '../views/pages/list-ground-page';
import AboutPage from '../views/pages/about-page';

const routes = {
    '/': HomePage, // default page
    '/home-page': HomePage,
    '/list-ground-page': ListGroundPage,
    '/about-page': AboutPage,
};

export default routes;