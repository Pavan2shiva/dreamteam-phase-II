"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const res = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);  
      router.push("/home");                       
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="center-container">
      <div className="card">

        <h1>Open Reads</h1>
        <h2>Login Page</h2>

        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password" placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>Login</button>

      </div>
    </div>
  );
}