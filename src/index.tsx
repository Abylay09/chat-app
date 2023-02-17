import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import Layout from './components/layout/Layout';
import { CookiesProvider } from 'react-cookie';
import UserAuth from 'context/UserAuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<App />} />
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeProvider theme={Theme}>
        <UserAuth>
          <RouterProvider router={router} />
        </UserAuth>
      </ThemeProvider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
