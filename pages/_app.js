import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
