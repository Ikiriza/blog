// pages/posts/[slug].js
import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This is the content of the blog post with the slug "{slug}".</p>
    </div>
  );
};

export default BlogPost;
