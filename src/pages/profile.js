import { Typography, Input, Button, AppBar, Toolbar } from "@material-ui/core";
import {useState} from 'react'
import fire from "../components/firebase";
import {Link} from 'react-router-dom'

export default function Profile() {

    const [profilePicture, setProfilePicture] = useState("")

    const updatePic = () => {
        fire.auth().currentUser.updateProfile({
            photoURL: profilePicture
        })
    }

    return(
        <div >
            <AppBar position = "static">
                <Toolbar style = {{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <Link to = "/" style = {{
                        textDecoration: "none",
                        color: "white"
                    }}><Typography variant = "h5">EF-Updates</Typography></Link>
                    <Link style = {{
                        color: "white",
                        textDecoration: "none"
                    }} to = "/profil">Profil Bearbeiten</Link>
                    <Button onClick = {() => fire.auth().signOut()} style={{color:"white"}}>Ausloggen</Button>
                </Toolbar>
            </AppBar>
            <div style = {{
                padding: "20px 20px",
                display: "flex",
                flexDirection: "column"
                }}>
            <Typography variant = "h5">Profil Bearbeiten</Typography>
            <br></br>
            <Input defaultValue = {fire.auth().currentUser.photoURL} type = "text" placeholder = "Profilbild URL" onChange = {(e) => setProfilePicture(e.target.value)}/>
            <Button onClick = {updatePic} style = {{
                width: "100px"
            }} variant = "contained" color = "primary">Speichern</Button>
            </div>
        </div>
    )
}
