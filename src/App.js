import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/profil" component={Profile} />
    </Switch>
  );
}

export default App;
