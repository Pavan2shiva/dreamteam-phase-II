"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <div>
      <input
        placeholder="Search books..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => router.push(`/results?q=${query}`)}>
        Search
      </button>
    </div>
  );
}