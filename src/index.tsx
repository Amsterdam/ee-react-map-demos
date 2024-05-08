import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import './style.css';
import routes from './routes';

function renderApp() {
  const root = createRoot(document.getElementById('root') as HTMLElement);
  const router = createBrowserRouter(routes);

  // React.StrictMode removed due to the double rendering introduced in v18,
  // which in dev mode triggers useEffect (including unmount) on render. This
  // breaks the PersonDetail page where the BSN is removed from sessionStorage on unmount
  // @see https://github.com/facebook/react/issues/24553
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

renderApp();
