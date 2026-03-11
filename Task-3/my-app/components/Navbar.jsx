"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Open Reads</h2>
      <div className="nav-right">

        <SearchBar />

        <div className="nav-links">
          <Link href="/home">Home</Link>
          <Link href="/bookmarks">Bookmarks</Link>
          <Link href="/login">Logout</Link>
        </div>

      </div>

    </div>
  );
}