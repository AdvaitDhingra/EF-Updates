import { Typography, Input, Button } from "@material-ui/core";
import { useState } from "react";
import fire from "../components/firebase";

import Header from "../components/header";

export default function Profile() {
  const [profilePicture, setProfilePicture] = useState("");

  const updatePic = () => {
    fire.auth().currentUser.updateProfile({
      photoURL: profilePicture,
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
        }}
      >
        <Typography variant="h5">Profil Bearbeiten</Typography>
        <br></br>
        <Input
          defaultValue={fire.auth().currentUser.photoURL}
          type="text"
          placeholder="Profilbild URL"
          onChange={(e) => setProfilePicture(e.target.value)}
        />
        <Button
          onClick={updatePic}
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
