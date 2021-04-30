import './App.css';
import Welcome from './components/Welcome';
import DogInfo from './components/DogInfo';
import DogList from './components/DogList';
import GetDogs from './components/GetDogs';
import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    GetDogs(() => setLoaded(true));            
}, []);

  return (
    <div className="container">
        <header className="App-header">
        Doggy Daycare
        </header>
        <div>
          <main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/doglist">
                <div className="stickyWrapper" />
                <DogList loaded={loaded} />
              </Route>
              <Route path="/currentDog">
                <DogInfo />
              </Route>
            </Switch>
          </Router>
          </main>
        </div>
    </div>
  );
}

export default App;
