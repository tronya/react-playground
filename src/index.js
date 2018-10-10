import React from 'react';
import { render } from 'react-dom';
import './index.css';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import App from './client/components/App/App';
import { Provider } from "react-redux";
import store from "./client/store";

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>
  </Provider>
);

render(<AppRouter/>, document.getElementById('root'));
