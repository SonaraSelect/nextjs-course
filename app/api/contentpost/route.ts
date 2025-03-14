import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.posts.findMany();

  return NextResponse.json(posts);
}