import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';
import './App.css';
//import { useDataContext } from './DataProvider';

export default function AuthPage() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPass, setSignInPass] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPass, setSignUpPass] = useState('');
  const [user, setUser] = useState({}); 
  
  //const { setUser } = useDataContext();
  // console.log(setUser); undefined

  function clearForms() {
    setSignInEmail('');
    setSignUpEmail('');
    setSignInPass('');
    setSignUpPass('');
  }

  function refreshPage() {
    window.location.reload(false);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const currentUser = await signUp(signUpEmail, signUpPass);
    setUser(currentUser);
    if (user) {refreshPage();} else clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const currentUser = await signIn(signInEmail, signInPass);
    setUser(currentUser);
    if (user) {refreshPage();} else clearForms();
  }

  return (
    <>
      <div className="Auth">
        <div className="auth-header">
          <img className="full-logo" src="./images/full-logo.png" />
          <h3 className="mission-statement">Marine research tool that shows info about nutritional dietary info, to help who wants to know more about edible sea life.</h3>
        </div>
        <form onSubmit={handleSignUp} className="signUp-signIn">
          <div className='auth-divs'>
            <label>
              <h2>Sign Up</h2> 
          E-mail:
              <input value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
            </label>
            <label>
          Password:
              <input
                value={signUpPass}
                type="password"
                onChange={(e) => setSignUpPass(e.target.value)}
              />
            </label>
          </div>
          <button className="button">sign up</button>
        </form>
        <form onSubmit={handleSignIn} className="signUp-signIn">
          <div className='auth-divs'>
            <label>
              <h2>Sign In</h2>
          E-mail:
              <input value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
            </label>
            <label>
          Password:
              <input
                value={signInPass}
                type="password"
                onChange={(e) => setSignInPass(e.target.value)}
              />
            </label>
          </div>
          <button className="button">sign in</button>
        </form>
      </div>
    </>
  );
}
