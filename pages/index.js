import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import UserCard from "../components/UserCard";
import NotFound from "../components/NotFound";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions";

import styles from "../styles/index.module.css";

export default function Home() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => setSearchInput(e.target.value);

  const handleClick = async () => {
    dispatch(await getUser(searchInput));
  };

  const handleEnterKeyPress = async (e) => {
    if (e.key === "Enter") await handleClick();
  };

  const user = useSelector((state) => state.userReducer.user);

  return (
    <Fragment>
      <Head>
        <title>Github Fetcher | Home</title>
        <meta
          name="description"
          content="A web application that fetches users github profiles informations and reder it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter username here"
            value={searchInput}
            onChange={handleChange}
            onKeyPress={handleEnterKeyPress}
          />
        </InputGroup>
        <Button
          className={styles.searchButton}
          variant="dark"
          onClick={handleClick}
        >
          Search
        </Button>

        {user.name === "Error" ? (
          <NotFound />
        ) : user.status === 200 ? (
          <UserCard
            userName={user.data.login}
            userImage={user.data.avatar_url}
          />
        ) : null}
      </div>
    </Fragment>
  );
}
