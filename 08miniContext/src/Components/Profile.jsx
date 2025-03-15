import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext.js";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div>Yes come back :{user.username}</div>;
};

export default Profile;
