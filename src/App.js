import "./App.css";
import { CssBaseline } from "@material-ui/core";

import Header from "./components/Header";
import { Rocket } from "./components/Rocket";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { Switch, Route, Redirect } from "react-router-dom";
import { useCurrentUser } from "./utils/useCurrentUser";

function App() {
  const user = useCurrentUser();

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Switch>
        {user === "loading" ? (
          // When the auth state is unknown: Show the loading logo independently of the current page.
          <Route path="*" component={Rocket} />
        ) : user === null ? (
          // When the auth state is unauthenticated: Only give access to login, and redirect to it if not on it.
          <>
            <Route path="/login" component={Login} />
            <Redirect to="login" />
          </>
        ) : (
          // When the auth state is authenticated: Give access to all routes except login
          // and redirect any other route to home.
          <>
            <Route path="/home" component={Home} />
            <Route path="/profil" component={Profile} />
            <Redirect to="/home" />
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
