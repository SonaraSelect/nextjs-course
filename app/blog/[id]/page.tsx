import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const revalidate = 1200; // not necessary, just for ISR demonstration

interface Post {
  title: string;
  content: string;
  id: string;
  author: string;
}

interface Props {
  params: { id: string };
}

export default async function BlogPostPage({ params }: Props) {
  // deduped
  const posts: Post[] = await fetch('http://localhost:3000/api/contentpost').then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.id === params.id)!;

  // Find user by email (authorid)
  const user = await prisma.user
    .findUnique({ where: { email: post.authorid } });

  const userLink = '/users/' + user?.id;
  
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>Posted by <Link href={userLink}>{user?.name}</Link></h2>
      <p>{post.content}</p>
    </div>
  );
}
