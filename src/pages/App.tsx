import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UrlContext, serverUrl } from '../utils/context';
import { store } from '../store/store';
import Dashboard from './Dashboard/Dashboard';
import HomePage from './Home/Home';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import AboutPage from './About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <UrlContext.Provider value={serverUrl}>
        <RouterProvider router={router} />
      </UrlContext.Provider>      
    </Provider>
  );
};

export default App;
