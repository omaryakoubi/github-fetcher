import Head from "next/head";

import { Fragment } from "react";
import { useRouter } from "next/dist/client/router";

import UserProfile from "../../components/UserProfile";

function UserProfileDetails() {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <Fragment>
      <Head>
        <title>Github Fetcher | {userName}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProfile />
    </Fragment>
  );
}

export default UserProfileDetails;
