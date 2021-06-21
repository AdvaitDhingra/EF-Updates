import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

import fire from './firebase'

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Typography variant="h5">EF-Updates</Typography>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/profil"
        >
          Profil Bearbeiten
        </Link>
        <Button
          onClick={() => fire.auth().signOut()}
          style={{ color: "white" }}
        >
          Ausloggen
        </Button>
      </Toolbar>
    </AppBar>
  );
}
