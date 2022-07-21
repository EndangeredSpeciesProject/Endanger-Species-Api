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

import ToggleDark from './'; // Make URL Directory for ToggleDark
import { Button, Container, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from './Themes';





export default function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(true);

  //fix me // DO NOT PUSH AUSTIN

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

        <div className="dark-light-button">
          <h1 className="text-warning">Dark/Light Mode</h1>
          <InputGroup>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button 
                  color="link"
                  onClick={() => { if (darkMode) {
                    setDarkMode(!darkMode);
                    setLightMode(!lightMode);
                    changeTheme(themes.light);
                  } else {
                    setLightMode(!lightMode);
                    setDarkMode(!darkMode);
                    changeTheme(themes.dark);
                  }
                  }}
                >
                  <span className="d-lg-none d-md-block">Switch mode</span>
                </Button>
              )}
            </ThemeContext.Consumer>
          </InputGroup>
        </div>

        <nav className="nav-header">
          <img className="fish-icon" src="/images/icon-logo.png" />
          <Link className="nav-items" to="/">Home</Link>
          <Link className="nav-items" to="/credits">Credits</Link>
          <Link className="nav-items" to={`/profile-page/${user.id}`}>My Profile</Link>
          <Link className='nav-items' to="/profiles">Friends</Link>
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
          <Route exact path="/credits">
          </Route>
          <Route exact path="/profile-page/:id">
            {
              user ? <ProfilePage /> : <Redirect to='/'/>
            }
          </Route>
          <Route exact path="/credits">
            <About />
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

