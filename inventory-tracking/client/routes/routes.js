import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import App from '../components/App';

const Routes = () => (
    <Switch>
      <Route exact path='/' element={<App/>} />
    </Switch>
);
export default Routes;