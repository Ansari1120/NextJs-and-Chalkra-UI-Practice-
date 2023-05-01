"use client";

import React from "react";
import useSWR from "swr";

const url = "https://api.quotable.io/random";

//give us data from api

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Clientpage() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>error</div>;
  if (isLoading)
    return (
      <div>
        <h1>client page</h1>
        Loading....
      </div>
    );
  console.log(data.content);
  return (
    <div>
      <h1>client page</h1>
      {data.content}
    </div>
  );
}
