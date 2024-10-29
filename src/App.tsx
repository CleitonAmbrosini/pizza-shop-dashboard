import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './global.css';
import { router } from './routes';

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop.dashboard" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};
