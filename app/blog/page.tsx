import { prisma } from '@/lib/prisma';
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export const revalidate = 800;

export default async function Blog() {

  const posts = await prisma.posts.findMany();
  
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

// &nbsp; --- &nbsp; 
