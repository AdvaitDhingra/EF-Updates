import fire from "../utils/firebase";
import { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";

export default function LandingPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <div>{user ? <Home /> : <Login />}</div>;
}
