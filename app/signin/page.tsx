"use client";
import { Suspense } from "react";
import { AuthPage } from "@/components/AuthPage";
import { useSearchParams } from "next/navigation";

function SigninInner() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || undefined;
  return <AuthPage isSignIn={true} redirect={redirect} />;
}

export default function Signin() {
  return (
    <Suspense>
      <SigninInner />
    </Suspense>
  );
}