import { useEffect, useState } from "react";
import { auth } from "./firebase";

let cachedCurrentUser = "loading";
const onUpdate = [];
auth.onAuthStateChanged((user) => {
  cachedCurrentUser = user || null;
  onUpdate.forEach((f) => f(cachedCurrentUser));
});

/**
 * A react hook to get the current user,
 * know if it is still loading, and
 * update the component when the user state changes
 * using only one listener.
 */
export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(cachedCurrentUser);
  useEffect(() => {
    onUpdate.push(setCurrentUser);
    return () => onUpdate.splice(onUpdate.indexOf(setCurrentUser), 1);
  }, [currentUser]);
  return currentUser;
};
