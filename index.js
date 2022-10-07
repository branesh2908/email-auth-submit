import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
import Login from './components/login';
import Logout from './components/logout';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Login />
    ),
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
