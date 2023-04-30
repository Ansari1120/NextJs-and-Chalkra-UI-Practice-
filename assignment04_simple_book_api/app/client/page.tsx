"use client";
import React from "react";
import useSwr from "swr";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

const url = "https://simple-books-api.glitch.me/books";
//give us data from api
const fetcher = (url: string) =>
  fetch(url).then((res) => {
    res.json;
  });

export default async function Staticpage() {
  useSwr(url,fetcher)
  return (
    <div>
      <h1>client page</h1>
      {books.map((book: Book) => {
        return (
          <ul key={book.id}>
            <li>
              {book.name} - {book.type} - {book.available}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
