import { useState } from "react";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from '@/lib/prisma';

import { SubmitForm } from "./SubmitForm"
import { SignOutButton } from "@/components/buttons";

export default async function page() {
    
    const session = await getServerSession(authOptions);

    if(!session) {
        return (
            <h1>Sign in to post!</h1>
        )
    }

    const currentUserEmail = session?.user?.email!;
    const user = await prisma.user.findUnique({
        where: {
        email: currentUserEmail,
        },
    });


    return (
        <>
            <SubmitForm user={user} />
        </>
        
      );
    }


/**
 * If !session, then we can post anonymous
*/