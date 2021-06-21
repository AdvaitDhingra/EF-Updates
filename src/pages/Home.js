import { useState } from "react";
import { Link } from "react-router-dom";

import { Typography, Button, Fab, AppBar, Toolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { PostDialog } from "../components/PostDialog";
import { PostsList } from "../components/PostsList";

import { auth, firestore } from "../utils/Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { signOut } from "@firebase/auth";

const postsCollection = collection(firestore, "posts");

export default function Home() {
  const [postDialogOpen, setPostDialogOpen] = useState(false);

  const post = (postText) => {
    addDoc(postsCollection, {
      post: postText,
      user: auth.currentUser.email,
      time: Timestamp.now(),
      image: "" + auth.currentUser.photoURL,
    }).catch((error) => console.error(error));

    setPostDialogOpen(false);
  };

  return (
    <div>
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
          <Button onClick={() => signOut(auth)}>Ausloggen</Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: "20px 20px" }}>
        <br />
        <PostsList collection={postsCollection} />
        <PostDialog
          open={postDialogOpen}
          onCancel={() => setPostDialogOpen(false)}
          onPost={post}
        />
        <Fab
          style={{
            position: "fixed",
            right: "10%",
            bottom: "10%",
          }}
          onClick={() => setPostDialogOpen(true)}
        >
          <Add />
        </Fab>
      </div>
    </div>
  );
}
