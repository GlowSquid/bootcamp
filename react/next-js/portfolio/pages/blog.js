import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Post = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React" />
      <PostLink slug="icecream-for-dinner" title="Icecream For Dinner" />
      <PostLink
        slug="goldfish-tastes-like-chicken"
        title="Can you cook goldfish?"
      />
    </ul>
  </Layout>
);

export default Post;
