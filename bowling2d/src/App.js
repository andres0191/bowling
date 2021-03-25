import './App.css';
import Register from './components/Register';
import Start from './components/Start'
import NewGame from './components/Newgame';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
      <Route path='/register'>
          <Register />
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
