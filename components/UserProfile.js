import { useSelector } from "react-redux";

import UserCard from "./UserCard";

function UserProfile() {
  // const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <h1>User profile</h1>
      {/* <UserCard userImage={user.data.avatar_url} userName={user.data.login} /> */}
    </div>
  );
}

export default UserProfile;
