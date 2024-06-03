import type { RouteObject } from 'react-router-dom';
import App from '@/containers/App';
import Home from '@/pages/Home';
import BaseMap from '@/pages/BaseMap/BaseMap';

const children: RouteObject[] = [
  {
    path: '/',
    element: <BaseMap />,
  },
  {
    path: 'contact',
    element: <Home />,
  },
];

const routes = [
  {
    element: <App />,
    children,
  },
];

export default routes;
