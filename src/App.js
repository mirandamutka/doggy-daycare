import './App.css';
import Welcome from './components/Welcome';
import DogInfo from './components/DogInfo';
import DogList from './components/DogList';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  let dogsData = JSON.parse(localStorage.getItem('dogs'));
  console.log('Version: 3')
  return (
    <div>
        <header className="App-header">
        Doggy Daycare
        </header>
        <div className="container">
            <main>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Welcome />
                </Route>
                <Route path="/doglist">
                  <div className="stickyWrapper">
                    <div className="presentCircle">
                      <div className="present"></div>
                      <div className="presentText">Present</div>
                      <div className="present absent"></div>
                      <div className="presentText">Absent</div>
                    </div>
                    </div>
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
