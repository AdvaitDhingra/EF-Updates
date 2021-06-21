import { AppBar, Toolbar, Button, Typography, Drawer } from "@material-ui/core";

import fire from "./firebase";

import { Link } from "react-router-dom";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="bigMenu">
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
        </div>
        <div className="smallMenu">
          <IconButton onClick={() => setMenuOpen(true)}>
            <Menu />
          </IconButton>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography variant="h5">EF-Updates</Typography>
          </Link>
        </div>
      </Toolbar>
      <Drawer open={MenuOpen} onClose={() => setMenuOpen(false)}>
        <List>
          <ListItem>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography variant="h5">EF-Updates</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/profil"
            >
              Profil Bearbeiten
            </Link>
          </ListItem>
          <ListItem button onClick={() => fire.auth().signOut()}>
            Ausloggen
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
