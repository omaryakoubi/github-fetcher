import Image from "next/image";
import notFound from "../public/404.jpg";

import styles from "../styles/notFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <Image src={notFound} height="300px" width="300px" />
    </div>
  );
}

export default NotFound;
