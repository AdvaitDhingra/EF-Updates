import { useEffect, useState } from "react";

import Home from "./Home";
import Login from "./Login";

import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "@firebase/auth";

export default function LandingPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <div>{user ? <Home /> : <Login />}</div>;
}
