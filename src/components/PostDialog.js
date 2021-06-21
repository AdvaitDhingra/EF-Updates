import { useState } from "react";
import { Button, Dialog, DialogTitle, Input } from "@material-ui/core";

export const PostDialog = ({ onPost, onCancel, open }) => {
  const [postText, setPostText] = useState("");
  return (
    <Dialog open={open} onClose={() => onCancel()}>
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
          value={postText}
          placeholder="Etwas Posten"
          onChange={(e) => setPostText(e.target.value)}
        />
        <Button onClick={() => onPost(postText)}>Posten</Button>
      </div>
    </Dialog>
  );
};
