import { Typography, Input, Button, Card, Avatar, Dialog, DialogTitle, Fab } from "@material-ui/core";
import {Add} from '@material-ui/icons'
import { useEffect, useState } from "react";
import fire from "../components/firebase";

import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from "react-router-dom";

export default function Home() {

    const [postText, setPostText] = useState("")

    const [posts, setPosts] = useState([])

    const [dialogOpen, setDialogOpen] = useState(false)

    const post = () => {


        var date = new Date().toLocaleTimeString() + " am " + new Date().toLocaleDateString();

        fire.firestore().collection("posts").add({
            post: postText,
            user: fire.auth().currentUser.email,
            time: date,
            image: String(fire.auth().currentUser.photoURL)
        }).then({
        }).catch(error => console.error(error))

        setDialogOpen(false)
    }

    useEffect(() => {
        

        fire.firestore().collection("posts").orderBy("time", "desc").onSnapshot(snapshot => {
            var postss = []
            snapshot.forEach(doc => {
                postss.push(doc.data())
            })
            setPosts(postss);
        })
        
    }, [])

    return(
        <div>
            <AppBar position = "static">
                <Toolbar style = {{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <Link to = "/" style = {{
                        textDecoration: "none",
                        color: "black"
                    }}><Typography variant = "h5">EF-Updates</Typography></Link>
                    <Link style = {{
                        color: "black",
                        textDecoration: "none"
                    }} to = "/profil">Profil Bearbeiten</Link>
                    <Button onClick = {() => fire.auth().signOut()}>Ausloggen</Button>
                </Toolbar>
            </AppBar>
            <div style = {{padding: "20px 20px"}}>
             
            <br></br>
            <div>
                {posts.map(post => {
                    return(
                        <Card key = {post.time} style = {{
                            maxWidth: "600px",
                            padding: "10px 10px",
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}>
                            <Avatar src = {post.image}/>
                            <div>
                                <Typography variant = "h6">{post.post}</Typography>
                                <Typography>Gepostet von: {post.user} um {post.time}</Typography>
                            </div>
                        </Card>
                    )
                })}
            </div>
            <Dialog open = {dialogOpen} onClose = {() => setDialogOpen(false)}>
                <DialogTitle>Posten</DialogTitle>
                <div style = {{
                    marginLeft: "10px",
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexDirection: "column"
                }}>
                <Input type = "text" placeholder = "Etwas Posten" onChange = {(e) => setPostText(e.target.value)}/>
                <Button onClick = {post}>Posten</Button>
                </div>
            </Dialog>
            <Fab style = {{
                position: "fixed",
                right: "10%",
                bottom: "10%"
            }} onClick = {() => setDialogOpen(true)}>
                <Add/>
            </Fab>
            </div>
        </div>

    )
}