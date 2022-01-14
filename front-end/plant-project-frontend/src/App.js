import FamiliesPage from './pages/FamiliesPage';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react'
import GroupInfoPage from './pages/GroupInfoPage';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/GroupInfo' exact component={GroupInfoPage} />
          <Route path='/Families' exact component={FamiliesPage} />
          <Route path='/' exact component={FamiliesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;