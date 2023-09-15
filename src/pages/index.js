// pages/index.js
import Link from 'next/link';
import { useMemo } from 'react';

const Home = ({ posts }) => {
  const memoizedPosts = useMemoizedData(posts);

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {memoizedPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


// Create a memoization function
const useMemoizedData = (data) => useMemo(() => data, [data]);

// Dummy data (replace with your own data)
const dummyData = [
  { id: 1, title: 'First Blog Post' },
  { id: 2, title: 'Second Blog Post' },
  // Add more dummy blog post data here
];

export async function getServerSideProps() {
  // Simulate fetching data from an API (replace with your data source)
  const posts = dummyData;

  // Return the fetched posts as props
  return {
    props: {
      posts,
    },
  };
}

export default Home;
