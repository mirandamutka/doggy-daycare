import './App.css';
import Welcome from './components/Welcome';
import DogInfo from './components/DogInfo';
import Registry from './components/Registry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <button onClick={() => localStorage.removeItem('dogs')}>Clear</button>
        <Registry />
        
      </header>
    </div>
  );
}

export default App;
