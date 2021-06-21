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
  IconButton,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect, useState } from "react";
import fire from "../components/firebase";

import Header from "../components/header";

export default function Home() {
  const [postText, setPostText] = useState("");

  const [postRank, setPostRank] = useState(0)

  const [posts, setPosts] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);

  const post = () => {
    if (postText.length <= 100) {
      var date =
        new Date().toLocaleTimeString() +
        " am " +
        new Date().toLocaleDateString();
      var email = fire.auth().currentUser.email;
      var time = new Date().getTime();

      console.log(email);
      fire
        .firestore()
        .collection("posts")
        .doc(String(email + time))
        .set({
          post: postText,
          user: email,
          time: date,
          image: String(fire.auth().currentUser.photoURL),
          docID: String(email + time),
          rank: postRank
        })
        .then({})
        .catch((error) => console.error(error));

      setDialogOpen(false);
    } else {
      alert("Text muss kürzer als 100 Zeichen sein!");
    }
    setPostRank(postRank+1);
  };

  const deletePost = (id) => {
    fire
      .firestore()
      .collection("posts")
      .doc(id)
      .delete()
      .then({})
      .catch((error) => {
        console.error(error);
      });
      setPostRank(postRank-1);
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("posts")
      .orderBy("rank", "desc")
      .onSnapshot((snapshot) => {
        setPostRank(snapshot.size + 1);
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
                    padding: "10px 10px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Avatar className="avatar" src={post.image} />
                  <div>
                    <Typography variant="h6">{post.post}</Typography>
                    <Typography style={{ fontSize: "15px" }}>
                      Gepostet von: {post.user} um {post.time}
                    </Typography>
                  </div>
                  {post.user === fire.auth().currentUser.email ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <IconButton
                        onClick={() => deletePost(post.docID)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ) : (
                    <></>
                  )}
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
