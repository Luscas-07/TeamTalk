
"use client";

import { useState } from "react";
import Chat from "@/components/Chat";
import Login from "@/components/Login";
import Colleagues from "@/components/Colleagues";
import Profile from "@/components/Profile";

type Screen = "chat" | "colleagues" | "profile";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState<Screen>("chat");
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  function openColleagueChat(name: string) {
    setSelectedContact(name);
    setActiveScreen("chat");
  }

  function logout() {
    setIsLoggedIn(false);
    setActiveScreen("chat");
    setSelectedContact(null);
  }

  return (
    <>
      <nav className="app-navigation">
        <button
          className={activeScreen === "chat" ? "active" : ""}
          onClick={() => setActiveScreen("chat")}
        >
          Conversas
        </button>

        <button
          className={activeScreen === "colleagues" ? "active" : ""}
          onClick={() => setActiveScreen("colleagues")}
        >
          Equipe
        </button>

        <button
          className={activeScreen === "profile" ? "active" : ""}
          onClick={() => setActiveScreen("profile")}
        >
          Perfil
        </button>
      </nav>

      {activeScreen === "chat" ? (
        <Chat
          key={selectedContact ?? "default"}
          contactName={selectedContact ?? undefined}
        />
      ) : activeScreen === "colleagues" ? (
        <Colleagues onSelectColleague={openColleagueChat} />
      ) : (
        <Profile onLogout={logout} />
      )}
    </>
  );
}
