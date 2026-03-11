"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BookCard from "@/components/Bookcard";
import Navbar from "@/components/Navbar";

export default function Results() {

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`http://127.0.0.1:5000/search?q=${query}`)
        .then(res => res.json())
        .then(data => setBooks(data));
    }
  }, [query]);

  return (
    <div>
    <Navbar />

      <div className="book-container">
        {books.map((b, i) => (

          <BookCard
            key={i}
            title={b.title}
            author={b.author}
            thumbnail={b.thumbnail}
            preview={b.preview}
          />

        ))}
      </div>

    </div>
  );
}