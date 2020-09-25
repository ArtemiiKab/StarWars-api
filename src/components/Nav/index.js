import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';

import Starships from '../Starships';


import './nav.scss';

export default function Nav({starships}){
  return (
    <BrowserRouter>
      <nav className="Nav">
        <ul className="Nav__container">
          <li><a href="/starships">Starships</a></li>
          <li><a href="/saved">Saved</a></li>
        </ul>
      </nav>

      <Switch>
        <Route path='/starships' render={() => <Starships starships={starships} />} />
        <Route path='./saved' component={()=><div>hi saved</div>} />
      </Switch>
    </BrowserRouter>
    
  )
}