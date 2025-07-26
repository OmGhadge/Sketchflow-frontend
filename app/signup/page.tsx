"use client";
import { Suspense } from "react";
import { AuthPage } from "@/components/AuthPage";
import { useSearchParams } from "next/navigation";

function SignupInner(){
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || undefined;
    return <AuthPage isSignIn={false} redirect={redirect}/>
}
export default function Signup(){

    return(
    <Suspense>
        <SignupInner/>
    </Suspense>
    )
}