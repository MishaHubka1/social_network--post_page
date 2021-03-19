import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import HomePage from './Pages/HomePage';
import NewsPage from './Pages/NewsPage';

function App() {
  return <div>
      <Router>
      <Header />
      <Switch>
      <Route path="/home">
      <HomePage />
      </Route>
      </Switch>
        <Switch>
         <Route path="/news">
         <NewsPage />
          </Route>
        </Switch>
    </Router>
    </div>
}

export default App;