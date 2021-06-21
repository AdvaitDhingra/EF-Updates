import {
  Typography,
  Input,
  Button,
  Card,
  Avatar,
  Dialog,
  DialogTitle,
  Fab,
  Slide,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useEffect, useState } from "react";
import fire from "../components/firebase";

import Header from "../components/header";

export default function Home() {
  const [postText, setPostText] = useState("");

  const [posts, setPosts] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);

  const post = () => {
    if (postText.length <= 100) {
      var date =
        new Date().toLocaleTimeString() +
        " am " +
        new Date().toLocaleDateString();

      fire
        .firestore()
        .collection("posts")
        .add({
          post: postText,
          user: fire.auth().currentUser.email,
          time: date,
          image: String(fire.auth().currentUser.photoURL),
        })
        .then({})
        .catch((error) => console.error(error));

      setDialogOpen(false);
    } else {
      alert("Text muss kürzer als 100 Zeichen sein!");
    }
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("posts")
      .orderBy("rank", "desc")
      .onSnapshot((snapshot) => {
        var postss = [];
        snapshot.forEach((doc) => {
          postss.push(doc.data());
        });
        setPosts(postss);
      });
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: "20px 20px" }}>
        <br></br>
        <div>
          {posts.map((post) => {
            return (
              <Slide in={true}>
                <Card
                  key={post.time}
                  style={{
                    maxWidth: "600px",
                    padding: "10px 10px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Avatar className="avatar" src={post.image} />
                  <div>
                    <Typography variant="h6">{post.post}</Typography>
                    <Typography>
                      Gepostet von: {post.user} um {post.time}
                    </Typography>
                  </div>
                </Card>
              </Slide>
            );
          })}
        </div>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Posten</DialogTitle>
          <div
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              width: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <Input
              type="text"
              placeholder="Etwas Posten"
              onChange={(e) => setPostText(e.target.value)}
              multiline
            />
            <Button onClick={post}>Posten</Button>
          </div>
        </Dialog>
        <Fab
          style={{
            position: "fixed",
            right: "10%",
            bottom: "10%",
          }}
          onClick={() => setDialogOpen(true)}
        >
          <Add />
        </Fab>
      </div>
    </div>
  );
}
