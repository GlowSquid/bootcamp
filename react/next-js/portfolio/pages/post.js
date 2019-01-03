import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '70vw' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
      mollitia ex. Velit qui, in ipsum nam architecto earum ratione, illum fuga,
      molestiae placeat accusantium. Illo commodi temporibus necessitatibus!
      Repellendus.
    </p>
  </Layout>
);

export default withRouter(Post);
