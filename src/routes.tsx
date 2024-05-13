import type { RouteObject } from 'react-router-dom';
import App from '@/containers/App';
import BaseLayer from '@/pages/BaseLayer';
import RLBaseLayer from '@/pages/ReactLeaflet/BaseLayer';

const children: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayer />,
  },
  {
    path: 'react-leaflet',
    element: <RLBaseLayer />,
  },
];

const routes = [
  {
    element: <App />,
    children,
  },
];

export default routes;
