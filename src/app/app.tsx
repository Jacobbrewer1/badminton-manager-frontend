import { RouterProvider, Router, Route, RootRoute } from '@tanstack/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { ThemeProvider } from '@mui/material/styles';

import LandingPage from 'src/pages/LandingPage';
import AuthenticationPage from 'src/pages/Authentication';

import theme from 'src/styles/theme';

import './app.module.css';

// tanStack router setup
const rootRoute = new RootRoute();

const landingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});
const authenticationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'authentication',
  component: AuthenticationPage,
});

const routeTree = rootRoute.addChildren([landingRoute, authenticationRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}

// tanStack query setup
const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
