/**
 Nice work on this! With both the profile pages and the favorites lists kicking around, you have the foundation for a very feature-rich app, with all of the hard parts taken care of. More than that, your code is clean, your components are well-demarcated, and your use of third-party libraries shows a mature understanding of how props flow through a react app. My comments througohut the app are mostly just suggestions (expect for the the page reload refresh setTimeout stuff--that needs a refactor). You also did a great job working with an uncomfortable API--those fish['Species Name'] pieces throughout the app are markers of an API that itself needs a serious refactor. Those property names are ridiculous!

 I always say that my primary measure of a project's code quality is how I would feel if somebody tasked me with maintaining this codebase in the future. With the changes I recommended, this app would be a delight to maintain and add features to. Great work!
 */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Auth from './Auth';
import { React, useState, useEffect } from 'react';
import { getUser, signOut } from './services/fetch-utils';
import FishList from './FishList';
import DetailFish from './DetailFish';
// import ProfileList from './ProfileList';
import ProfilePage from './ProfilePage';
import './App.css';
import About from './About';
import ProfilesPage from './ProfilesPage';


export default function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

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

        <nav className="nav-header">
          <img className="fish-icon" src="/images/icon-logo.png" />
          <Link className="nav-items" to="/">Home</Link>
          { user ? 
            <Link className="nav-items" to={`/profile-page/${user.id}`}>My Profile</Link> : <></> }
          <Link className='nav-items' to="/profiles">Friends</Link>
          <Link className="nav-items" to="/credits">Contact us</Link>
          {
            user ? 
              <button className='button' onClick={logout}>Logout</button> 
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
          <Route exact path="/profile-page/:id">
            {
              user ? <ProfilePage /> : <Redirect to='/'/>
            }
          </Route>
          <Route exact path="/credits">
            {
              user ? <About /> : <Redirect to='/'/>
            }
          </Route>
          <Route exact path="/profiles">
            {
              user ? <ProfilesPage /> : <Redirect to='/'/>
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

