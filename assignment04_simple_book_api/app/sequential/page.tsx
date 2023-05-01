import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function get_FictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

async function get_Non_FictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

export default async function Sequential() {
  const getFiction = await get_FictionBooks();
  const getNon_Fiction = await get_Non_FictionBooks();

  return (
    <div>
      <h1>Fiction</h1>
      {getFiction.map((book: Book) => {
        return (
          <ul key={book.id}>
            <li>
              {book.name} - {book.type} - {book.available}
            </li>
          </ul>
        );
      })}

      <h1>Non Fiction</h1>
      {getNon_Fiction.map((book: Book) => {
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
