import { Button, Card, Input } from "@material-ui/core";

import fire from '../components/firebase'

import {useState} from 'react'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [signIn, setSignIn] = useState(true)


    const login = () => {
        fire.auth().signInWithEmailAndPassword(email, password).then({}).catch(error => console.error(error))
    }


    const signUp = () => {
        fire.auth().createUserWithEmailAndPassword(email, password).then({}).catch(error => alert(error))
    }
    return(
        <div>
            {
                signIn ? (
                    <Card style = {{
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
                        flexDirection: "column"
                    }}>
                        <Input type = "Email" placeholder = "email" onChange = {(e) => setEmail(e.target.value)}/>
                        <Input type = "password" placeholder = "Passwort" onChange = {(e) => setPassword(e.target.value)}/>
                        <Button variant = "contained" color = "primary" onClick = {login}>Einloggen</Button>
                        <p>Hast du noch kein Account? <Button onClick = {() => setSignIn(false)}>Anmelden</Button></p>
                    </Card>
                ) : (
                    <Card style = {{
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
                        flexDirection: "column"
                    }}>
                        <Input type = "Email" placeholder = "email" onChange = {(e) => setEmail(e.target.value)}/>
                        <Input type = "password" placeholder = "Passwort" onChange = {(e) => setPassword(e.target.value)}/>
                        <Button variant = "contained" color = "primary" onClick = {signUp}>Anmelden</Button>
                        <p>Hast du schon einein Account? <Button onClick = {() => setSignIn(true)}>Einloggen</Button></p>
                    </Card>
                )
            }
            
        </div>
    )
}