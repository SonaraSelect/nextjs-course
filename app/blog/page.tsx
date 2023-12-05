import Link from 'next/link';

export const revalidate = 800;

export default async function Blog() {
  const posts = await fetch('http://localhost:3000/api/contentpost').then((res) =>
    res.json()
  );

  console.log('hello');
  console.log(posts);
  console.log('now original');
  console.log('blogpage')

  const click = () => {
    console.log('hi')
  }

  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <div className='flex flex-row'>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
              
              &nbsp; --- &nbsp; by {post.author}
              
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
