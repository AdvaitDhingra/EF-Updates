import "./App.css";
import { CssBaseline } from "@material-ui/core";

import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/profil" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
