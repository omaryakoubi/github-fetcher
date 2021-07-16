import Link from "next/link";

import { useSelector } from "react-redux";
import { Image, Button } from "react-bootstrap";

import styles from "../styles/userCard.module.css";

function UserCard() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className={styles.card}>
      <div className={styles.cardElements}>
        <Image src={user.data.avatar_url} width="150px" roundedCircle />
        <h5>{user.data.login}</h5>
        <Link href={`/user/${user.data.login}`}>
          <Button variant="dark">More</Button>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
