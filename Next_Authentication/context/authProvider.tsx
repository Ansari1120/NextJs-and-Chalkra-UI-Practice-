"use client";
//saves client cridentials for client login persistance.
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function AuthProvider({
  children,
  Component,
  pageProps,
}: {
  children: React.ReactNode;
  Component: AppProps;
  pageProps: AppProps;
}) {
  return (
    <SessionProvider session={pageProps.session}>{children}</SessionProvider>
  );
}
