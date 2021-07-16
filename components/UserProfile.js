import { useSelector } from "react-redux";

import UserCard from "./UserCard";

function UserProfile() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <UserCard style={{ backgroundColor: "black" }} />
    </div>
  );
}

export default UserProfile;
