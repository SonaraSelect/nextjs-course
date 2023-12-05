import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const posts = await prisma.posts.findMany();

  return NextResponse.json(posts);
}