"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function SignOut() {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Sign Out
      </button>
    </>
  );
}
