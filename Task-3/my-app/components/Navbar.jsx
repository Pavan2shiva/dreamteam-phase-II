"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

export default function Navbar() {

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");   
    router.push("/");                   
  };

  return (
    <div className="navbar">
      <h2 className="logo">Open Reads</h2>
      <div className="nav-right">
        <SearchBar />
        <div className="nav-links">
          <Link href="/home">Home</Link>
          <Link href="/bookmarks">Bookmarks</Link>
          <Link href="/">Login</Link>
        </div>
      </div>
    </div>
  );
}