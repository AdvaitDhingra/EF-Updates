import './App.css';

import Profile from './pages/profile'
import LandingPage from './pages/LandingPage';

import { Switch, Route  } from 'react-router-dom';




function App() {

  
  return (
    <div className="App">
      
      
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route path = "/profil" component = {Profile}/>
        </Switch>
    </div>
  );
}

export default App;
