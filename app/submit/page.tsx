import { useState } from "react";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from '@/lib/prisma';

import { SubmitForm } from "./SubmitForm"
import { ProfileForm } from "../dashboard/ProfileForm";
import { SignOutButton } from "@/components/buttons";
import { DummyProfileForm } from "./DummyProfileForm";

export default async function page() {
    
    const session = await getServerSession(authOptions);

    if(!session) {
        redirect('api/auth/signin');
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