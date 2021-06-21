import { Avatar, Card, Typography } from "@material-ui/core";
import React from "react";

export const Post = ({ authorImage, authorName, timestamp, children }) => (
  <Card
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
    <Avatar src={authorImage} />
    <div>
      <Typography variant="h6">{children}</Typography>
      <Typography>
        Gepostet von: {authorName}{" "}
        {typeof timestamp === "string"
          ? "um " + timestamp
          : "am " + timestamp.toDate().toLocaleString("de-DE")}
      </Typography>
    </div>
  </Card>
);
