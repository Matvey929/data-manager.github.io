import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { PageUser } from './pages/user';
import { PageProfile } from './pages/profile';
import { PageSetting } from './pages/setting';
import { PageHome } from './pages/home';
import { PageContent } from './pages/content';



const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/user',
    Component: PageUser
  },
  {
    path: '/profile',
    Component: PageProfile
  },
  {
    path: '/setting',
    Component: PageSetting
  },
  {
    path: '/home',
    Component: PageHome
  },
  {
    path: '/content',
    Component: PageContent
  }
  
]);

export default router;