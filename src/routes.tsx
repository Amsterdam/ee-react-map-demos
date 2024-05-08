import type { RouteObject } from 'react-router-dom';
import App from '@/containers/App';
import BaseLayer from '@/pages/BaseLayer';
import Contact from '@/pages/Contact';

const children: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayer />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
];

const routes = [
  {
    element: <App />,
    children,
  },
];

export default routes;
