import HomePage from '../views/pages/home-page';
import ListGroundPage from '../views/pages/list-ground-page';
import AboutPage from '../views/pages/about-page';
import PemberiSewa from '../views/pages/pemberi-sewa';
import DetailPage from '../views/pages/detail-page';

const routes = {
    '/': HomePage, // default page
    '/home-page': HomePage,
    '/list-ground-page': ListGroundPage,
    '/about-page': AboutPage,
    '/pemberi-sewa': PemberiSewa,
    '/detail-page': DetailPage,
};

export default routes;