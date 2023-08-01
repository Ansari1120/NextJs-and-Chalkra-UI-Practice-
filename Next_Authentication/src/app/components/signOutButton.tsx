"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <div>
      <button
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
        className="grid bg-purple-200 rounded-md p-2"
      >
        Sign Out
      </button>
    </div>
  );
}
