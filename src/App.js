import './App.css';
import Welcome from './components/Welcome';
import DogInfo from './components/DogInfo';
import DogList from './components/DogList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  let dogsData = JSON.parse(localStorage.getItem('dogs'));

  return (
    <div className="container">
        <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/doglist">
              <DogList dogsData={dogsData} />
            </Route>
            <Route path="/dog/:currentDog">
              <DogInfo />
            </Route>
          </Switch>
        </Router>
        </main>
    </div>
  );
}

export default App;
