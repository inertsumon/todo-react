import './App.css';
import Todos from './components/Todos/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import ShowCartDetails from './components/ShowCartDetails/ShowCartDetails';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/todos">
          <Todos></Todos>
          </Route>
          <Route exact path="/todos/:itemId">
              <ShowCartDetails></ShowCartDetails>
          </Route>
        </Switch>
  </Router>
    </div>
  );
}

export default App;
