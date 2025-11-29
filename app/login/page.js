"use client";

import { supabase } from "../../lib/supabase";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
    });
    if (error) alert("Error: " + error.message);
    else alert("Revisá tu email para iniciar sesión.");
  }

  return (
    <div style={{ maxWidth: "400px" }}>
      <h1>Iniciar sesión</h1>

      <input
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px",
          background: "#1e90ff",
          border: "none",
          borderRadius: "6px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Enviar enlace mágico
      </button>
    </div>
  );
}
