import Layout from '../components/Layout';
import Link from 'next/link';

export default ({ statusCode }) => (
  <Layout title="Oops!">
    <p>
      {statusCode
        ? `Could not get user data: Status code ${statusCode}. `
        : '404 - Page Not Found.. '}
      Return{' '}
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </Layout>
);
