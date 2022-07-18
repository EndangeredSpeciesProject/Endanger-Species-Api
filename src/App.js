import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Auth from './Auth';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/fish/:id">
            
          </Route>
          <Route exact path="/fish">
            {/* list */}
          </Route>
          <Route exact path="/">
            {
              user ? <p></p> : <Auth />
            }
            {/* auth to home list*/}
          </Route>
          <Route exact path="/credits">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

