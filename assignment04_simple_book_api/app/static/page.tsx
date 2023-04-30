import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = response.json();
  return data;
}

export default async function Staticpage() {
  const books = await getBooks();
  console.log(books);
  return (
    <div>
      <h1>Static Page my</h1>
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
