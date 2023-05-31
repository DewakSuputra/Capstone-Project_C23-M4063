import HomePage from '../views/pages/home-page';
import ListGroundPage from '../views/pages/list-ground-page';
import DetailPage from '../views/pages/detail-page';

const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/list-ground-page': ListGroundPage,
  '/detail-page': DetailPage,
};

export default routes;
