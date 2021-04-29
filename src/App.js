import './App.css';
import Welcome from './components/Welcome';
import DogInfo from './components/DogInfo';
import DogList from './components/DogList';
import GetDogs from './components/GetDogs';
import { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  useEffect(() => {
    GetDogs();            
}, []);
  let dogsData = JSON.parse(localStorage.getItem('dogs'));
  console.log('Version: 13')

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
                  <DogList dogsData={dogsData} />
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
