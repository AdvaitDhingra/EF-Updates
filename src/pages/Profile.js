import { Typography, Input, Button } from "@material-ui/core";
import { useState } from "react";
import fire from "../components/firebase";

import Header from "../components/header";

export default function Profile() {
  const [profilePicture, setProfilePicture] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const update = () => {
    fire.auth().currentUser.updateProfile({
      photoURL: profilePicture,
      email: emailAddress,
    });
  };

  return (
    <div>
      <Header />
      <div
        style={{
          padding: "20px 20px",
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h5">Profil Bearbeiten</Typography>
        <br></br>
        <Typography variant="h6">Profilbild:</Typography>
        <Input
          defaultValue={fire.auth().currentUser.photoURL}
          type="text"
          placeholder="Profilbild URL"
          onChange={(e) => setProfilePicture(e.target.value)}
        />
        <br></br>
        <Typography variant="h6">Email Adresse:</Typography>
        <Input
          type="email"
          defaultValue={fire.auth().currentUser.email}
          placeholder="Email Adresse"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <Button
          onClick={update}
          style={{
            width: "100px",
          }}
          variant="contained"
          color="primary"
        >
          Speichern
        </Button>
      </div>
    </div>
  );
}
