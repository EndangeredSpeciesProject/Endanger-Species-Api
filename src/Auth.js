import { useState } from 'react';
import { signInUser, signUpUser } from './services/FetchUtils';
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
    const user = await signUpUser(signUpEmail, signUpPass);
    setUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(signInEmail, signInPass);
    setUser(user);
    clearForms();
  }

  return (
    <div className="Auth">
      <form onSubmit={handleSignUp} className="signUp">
        <label>
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
      <form onSubmit={handleSignIn} className="signIn">
        <label>
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
