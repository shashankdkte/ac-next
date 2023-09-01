import { useRouter } from "next/router";
function BlogPostPage()
{
  const router = useRouter();
  console.log(router.query);
  return <div>
    <h2>BlogPostPage</h2>
  </div>
}

export default BlogPostPage; 