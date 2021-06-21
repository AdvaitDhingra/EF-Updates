import { useEffect, useState } from "react";

import { Post } from "../components/Post";

import { query, orderBy, onSnapshot } from "firebase/firestore";

export const PostsList = ({ collection }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postCollectionQuery = query(collection, orderBy("time", "desc"));
    return onSnapshot(postCollectionQuery, (snapshot) => {
      setPosts(snapshot.docs.map((document) => document.data()));
    });
  }, [collection]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.time}
            authorImage={post.image}
            authorName={post.user.split("@")[0]}
            timestamp={post.time}
          >
            {post.post}
          </Post>
        );
      })}
    </div>
  );
};
