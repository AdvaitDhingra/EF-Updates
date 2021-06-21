import { useState } from "react";

import { Button, Card, Input } from "@material-ui/core";

import { auth } from "../utils/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(true);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      console.error(error)
    );
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error)
    );
  };
  return (
    <div>
      {signIn ? (
        <Card
          style={{
            position: "absolute",
            padding: "10px 10px",
            width: "200px",
            height: "200px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Input
            type="Email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Passwort"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={login}>
            Einloggen
          </Button>
          <p>
            Hast du noch kein Account?{" "}
            <Button onClick={() => setSignIn(false)}>Anmelden</Button>
          </p>
        </Card>
      ) : (
        <Card
          style={{
            position: "absolute",
            padding: "10px 10px",
            width: "200px",
            height: "200px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <Input
            type="Email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Passwort"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={signUp}>
            Anmelden
          </Button>
          <p>
            Hast du schon einein Account?{" "}
            <Button onClick={() => setSignIn(true)}>Einloggen</Button>
          </p>
        </Card>
      )}
    </div>
  );
}
