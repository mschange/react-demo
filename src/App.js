import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Index from './view/index/index'
import Main from './view/main/index'
import My from './view/my/index'
import Shop from './view/shop/index'
import Detail from './view/detail/index'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route  exact={true} path="/" component={Index}/>
          <Route  exact={true} path="/main" component={Main}/>
          <Route  exact={true} path="/shop" component={Shop}/>
          <Route  exact={true} path="/my" component={My}/>
          <Route  exact={true} path="/detail" component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default App;
