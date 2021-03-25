import './App.css';
import Home from './components/home';
import Start from './components/start'
import NewGame from './components/newgame';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/home'>
          <Home />
        </Route>
        <Route path='/start'>
          <Start />
        </Route>
        <Route path="/">
          <NewGame/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
