import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Auth from './Auth';
import { useState, useEffect } from 'react';
import { getUser, signOut } from './services/fetch-utils';
import FishList from './FishList';
import DetailFish from './DetailFish';



export default function App() {
  const [user, setUser] = useState();
  //fix me

  useEffect(() => {
    
    async function checkUser() {
      const user = await getUser();
      setUser(user);
    }
    checkUser();
  }, [] 
  );
  

  async function logout() {
    await signOut();
  }

  return (
    <Router>
      <div className='app'>
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
              user ? <Redirect to="Fish"/> : <Auth />
            }
            {/* auth to home list*/}
          </Route><Route exact path="/fish">
            <FishList />
            {/* list */}
          </Route>
          <Route exact path="/fish/:name">
            <DetailFish/>
          </Route>
          <Route exact path="/credits">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

