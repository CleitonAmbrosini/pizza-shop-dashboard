import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme/theme-provider';
import './global.css';
import { router } from './routes';

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
        <Helmet titleTemplate="%s | pizza.shop.dashboard" />
        <RouterProvider router={router} />
        <Toaster richColors closeButton />
      </ThemeProvider>
    </HelmetProvider>
  );
};
