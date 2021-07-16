import Head from "next/head";

import { Fragment } from "react";
import { useSelector } from "react-redux";

import UserProfile from "../../components/UserProfile";

function UserProfileDetails() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <Fragment>
      <Head>
        <title>Github Fetcher | {user.data.name}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>User Informations</h1>
    </Fragment>
  );
}

export default UserProfileDetails;
