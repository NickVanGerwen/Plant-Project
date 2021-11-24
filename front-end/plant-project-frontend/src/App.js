import FamiliesPage from './pages/FamiliesPage';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={null} />
          <Route path='/FamiliesPage' exact component={FamiliesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
