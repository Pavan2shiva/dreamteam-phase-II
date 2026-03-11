"use client";
import { useEffect, useState } from "react";
import BookCard from "@/components/Bookcard";
import Navbar from "@/components/Navbar";

export default function Home() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
    <Navbar/>

      <div className="book-container">
        {books.map((b, i) => (
          <BookCard
            key={i}
            title={b.title}
            author={b.author}
            thumbnail={b.thumbnail}
            preview={b.preview}/>
        ))}
      </div>

    </div>
  );
}