import logo from './logo.svg';
import './App.css';

function App() {
  const params = {
    access_key: '',
    query: '91601'
  };

  const apiUrl = 'http://api.weatherbit.io/v2.0/current';

  //construct url with query params
  const url = `${apiUrl}?postal_code=${params.query}&country=US&key=${params.access_key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(`Current Temperatture in ${data.location.name} is ${data.current.temperature}℃`)
      console.log(data);
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
