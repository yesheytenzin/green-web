import { signIn } from "@/lib/auth";
import React from "react";

export default function SignIn() {
  return (
    <>
      <div>login page</div>
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <label className="text-black">Email</label>
        <input type="email" name="email" placeholder="Email" required />
        <label className="text-black">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">sign in</button>
      </form>
    </>
  );
}
