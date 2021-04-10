import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './header';
import HookOne from './counter';



function App() {
  return (
    <HashRouter>
      <Header/>
      <Route exact path="/counter"component={HookOne}/>
    </HashRouter>
  )
}

export default App;
