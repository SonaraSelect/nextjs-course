import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from "../auth/[...nextauth]/route"

interface Data {
    title: string,
    id: string,
    author: string,
    content: string,
    authorid: string,
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  const data: Data = await req.json();

  const post = await prisma.posts.create({
    data: {
        title: data.title,
        id: data.id,
        author: data.author,
        content: data.content,
        authorid: data.authorid,
    }
  });

  return NextResponse.json(post );
}


export async function DELETE(req: NextRequest) {
  
  const session = await getServerSession();
  const currentUserEmail = session?.user?.email!;
  const targetUserId = req.nextUrl.searchParams.get('targetUserId');

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId!,
      },
    },
  });

  return NextResponse.json(record);
}