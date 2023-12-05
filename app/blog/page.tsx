import Link from 'next/link';

export default async function Blog() {
  const posts = await fetch('http://localhost:3000/api/contentpost').then((res) =>
    res.json()
  );

  console.log('hello');
  console.log(posts);

  const click = () => {
    console.log('hi')
  }
  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
