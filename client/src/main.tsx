// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import Routes from './routes';

import "./styles/index.css";

const router = createBrowserRouter(Routes);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
);
