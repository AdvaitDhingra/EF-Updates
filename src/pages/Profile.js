import { useState } from "react";

import { Typography, Input, Button } from "@material-ui/core";

import { useCurrentUser } from "../utils/useCurrentUser";

export default function Profile() {
  const user = useCurrentUser();
  const [profilePicture, setProfilePicture] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const update = () => {
    user.updateProfile({
      photoURL: profilePicture,
      email: emailAddress,
    });
  };

  return (
    <div>
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
          defaultValue={user.photoURL}
          type="text"
          placeholder="Profilbild URL"
          onChange={(e) => setProfilePicture(e.target.value)}
        />
        <br></br>
        <Typography variant="h6">Email Adresse:</Typography>
        <Input
          type="email"
          defaultValue={user.email}
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
