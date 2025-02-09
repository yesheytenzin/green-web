import SignIn from "@/components/sign-in";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <>
      <SignIn />
    </>
  );
};

export default page;
