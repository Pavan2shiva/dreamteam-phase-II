"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="center-container">
      <div className="card">

        <h1>Open Reads</h1>
        <h2>Login Page</h2>

        <div>
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <Link href="/home">
          <button>Login</button>
        </Link>

      </div>
    </div>
  );
}