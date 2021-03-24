import './App.css';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import userStore from './components/UserStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserProfile from './components/pages/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/signin'>
            <SignIn userStore={userStore} />
          </Route>

          <Route exact path='/signup'>
            <Signup userStore={userStore} />
          </Route>

          <Route exact path='/userprofile'>
            <UserProfile userStore={userStore} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
