import './App.css';

function App() {
  return (
    <div className="App">
        <form className="SignInForm">
            <label htmlFor="login">Login</label>
            <input type="text" id="loginfield" placeholder="yourlogin"/> <br/>
            <label htmlFor="password">Password</label>
            <input type="password" id="passwordfield" placeholder="**********"/> <br/>
            <button onClick=>Sign In</button>
        </form>
    </div>
  );
}

export default App;
