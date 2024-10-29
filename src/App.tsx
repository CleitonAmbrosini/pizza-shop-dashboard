import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import './global.css';
import { router } from './routes';

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop.dashboard" />
      <RouterProvider router={router} />
      <Toaster richColors closeButton />
    </HelmetProvider>
  );
};
