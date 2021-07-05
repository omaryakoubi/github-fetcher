import { Card, Image } from "react-bootstrap";

import styles from "../styles/userCard.module.css";

function UserCard({ userImage, userName }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardElements}>
        <Card>
          <Image src={userImage} width="150px" roundedCircle />
          <h5>{userName}</h5>
        </Card>
      </div>
    </div>
  );
}

export default UserCard;
