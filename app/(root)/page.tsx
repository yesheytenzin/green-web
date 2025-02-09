import React from "react";
import SignOut from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/sign-in");
  return (
    <>
      <h1>welcome to the home page</h1>
      <h2>${session?.user?.email}</h2>
      <SignOut />
    </>
  );
};

export default page;
