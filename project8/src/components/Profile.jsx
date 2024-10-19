import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please login</div>;

  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}

export default Profile;