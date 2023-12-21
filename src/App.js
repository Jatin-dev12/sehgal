import logo from './jj.jpg';
import Header from './componets/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <button> jatin sehgal</button><br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          jatin sehgal
        </a>
    
        <section>
        <h1>My First Component</h1>
        <ol>
        <li>Defining a Component</li>
        <li>Components: UI Building Blocks</li>
        <li>Using a Component</li>
        </ol>
        </section>
        
      </header>
    </div>
  );
}

export default App;
