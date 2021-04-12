import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Aakash';
  //const loading = false;
  // if (loading){
  //   return <h1>Loading!</h1>
  // }
  const isLoggedIn = false;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {isLoggedIn ? name: 'World'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
