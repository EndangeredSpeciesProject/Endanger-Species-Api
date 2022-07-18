import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Auth from './Auth';
import { useState, useEffect } from 'react';
import { getUser, signOut } from './services/fetch-utils';



export default function App() {
  const [user, setUser] = useState();
  //fix me

  useEffect(() => {
    
    async function checkUser() {
      const user = await getUser();
      setUser(user);
    }
    checkUser();
  }, [user]
  );
  

  async function logout() {
    await signOut();
  }

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
          {
            user ? 
              <button onClick={() => logout()}>Logout</button> 
              : <> </>
          }
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
              user ? <p></p> : <Auth />
            }
            {/* auth to home list*/}
          </Route><Route exact path="/fish">
            {/* list */}
          </Route>
          <Route exact path="/fish/:id">
          </Route>
          <Route exact path="/credits">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

