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
// import ProfileList from './ProfileList';
import ProfilePage from './ProfilePage';



export default function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  //fix me

  useEffect(() => {
    
    async function checkUser() {
      const currUser = await getUser();
      setUser(currUser);
    }
    checkUser();
  }, [] 
  );
  

  async function logout() {
    await signOut();
    setUser();
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
              <Link to="/profile-page">Users</Link>
            </li>
          </ul>
          {
            user ? 
              <button onClick={logout}>Logout</button> 
              : <> </>
          }
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
              user ? <Redirect to="/fish"/> : <Auth />
            }
            {/* auth to home list*/}
          </Route>
          <Route exact path="/fish">
            {
              user ? <FishList /> : <Redirect to='/'/>
            }
            {/* list */}
          </Route>
          <Route exact path="/fish/:name">
            {
              user ? <DetailFish /> : <Redirect to='/'/>
            }
          </Route>
          <Route exact path="/credits">
          </Route>
          <Route exact path="/profile-page">
            {
              user ? <ProfilePage /> : <Redirect to='/'/>
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

