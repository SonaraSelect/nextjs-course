import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import Link from "next/link";
import { PostfixUnaryExpression } from "typescript";

export const revalidate = 1200; // not necessary, just for ISR demonstration



interface Post {
  title: string;
  content: string;
  id: string;
  author: string;
  authorid: string;
}

interface Props {
  params: { id: string };
}

async function xxdeletePost(post: Post) {
  
}

export default async function BlogPostPage({ params }: Props) {
  
  const posts = await prisma.posts.findMany();
  const post: Post = posts.find((post) => post.id === params.id)!;

  // Find user by email (authorid)
  const user = await prisma.user
    .findUnique({ where: { email: post.authorid } });

  const userLink = '/users/' + user?.id;

  // Manage delete button
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email!;

  const deletePost = async () => {
    await prisma.posts.delete({
      where: { id: post.id },
    })
    redirect('/blog');
  }
  return (
    <div>
      <h1>{post?.title! ?? 'This post does not exist'}</h1>
      <h2>Posted by <Link href={userLink}>{user?.name!}</Link></h2>
      <p>{post?.content!}</p>
      <button onClick={deletePost}>Delete post</button>
    </div>
  );
}

/**
{post.authorid === userEmail ? 
        <button onClick={deletePost}>Delete post</button>
          :
        </>} 

 */