import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Pizza from './Components/Pizza'

const App = () => {
  return (
    <div className='home'>
      <h1>Lambda Eats</h1>
      <p>Your Favorite Food, Delivered While Coding!</p>
      <div className='Navigation'>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza?</Link>
      </div>
      <div className='routes'>
        <Switch>
          <Route path='/pizza'>
            <Pizza/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
