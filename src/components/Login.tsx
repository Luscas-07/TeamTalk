
"use client";

import { useState, type FormEvent } from "react";

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Preencha o e-mail e a senha.");
      return;
    }

    onLogin();
  }

  return (
    <main className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>TeamTalk</h1>
        <p>Entre na sua conta para continuar.</p>

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
