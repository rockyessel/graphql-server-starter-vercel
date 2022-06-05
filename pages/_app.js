import '../styles/globals.css';
import { Layout } from '../components/index';
import { ManageStateContext } from '../context/ManageStateContext';

function MyApp({ Component, pageProps }) {
  return (
    <ManageStateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ManageStateContext>
  );
}

export default MyApp;
