"use client";
import { useEffect, useState } from "react";
import BookCard from "@/components/Bookcard";
import Navbar from "@/components/Navbar";

export default function Bookmarks() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("http://127.0.0.1:5000/bookmarks", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBooks(data);
      });

  }, []);

  return (
    <div>
      <Navbar />

      <div className="book-container">
        {books.length === 0 ? (
          <p>No bookmarks yet</p>
        ) : (
          books.map((b, i) => (
            <BookCard
              key={i}
              title={b.title}
              author={b.author}
              thumbnail={b.thumbnail}
              preview={b.preview}
            />
          ))
        )}
      </div>
    </div>
  );
}