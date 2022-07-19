import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';
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

  async function handleSignUp(e) {
    e.preventDefault();
    const currentUser = await signUp(signUpEmail, signUpPass);
    console.log(currentUser);
    setUser(currentUser);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const currentUser = await signIn(signInEmail, signInPass);
    setUser(currentUser);
    clearForms();
  }

  return (
    <div className="Auth">
      <form onSubmit={(e) => handleSignUp(e)} className="signUp">
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
        <button className="button">sign up</button>
      </form>
      <form onSubmit={(e) => handleSignIn(e)} className="signIn">
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
        <button className="button">sign in</button>
      </form>
    </div>
  );
}
