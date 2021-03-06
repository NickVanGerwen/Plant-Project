import NavBar from './components/NavBar';
import AllFamiliesPage from './pages/AllFamiliesPage'
import GroupInfoPage from './pages/GroupInfoPage';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/GroupInfo' exact component={GroupInfoPage} />
          <Route path='/AllUsers' exact component={NavBar} />
          <Route path='/AllFamilies' exact component={AllFamiliesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
