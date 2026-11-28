"use client";

import { useState, useEffect } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import Chat from "@/components/Chat";
import Login from "@/components/Login";
import Colleagues from "@/components/Colleagues";
import Profile from "@/components/Profile";

type Screen = "chat" | "colleagues" | "profile";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeScreen, setActiveScreen] = useState<Screen>("chat");
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setLoading(false);

        if (!session) {
          setActiveScreen("chat");
          setSelectedContact(null);
        }
      });

    return () => subscription.unsubscribe();
  }, []);

  function openColleagueChat(name: string) {
    setSelectedContact(name);
    setActiveScreen("chat");
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("Não foi possível sair da conta.");
      return;
    }

    setSession(null);
    setActiveScreen("chat");
    setSelectedContact(null);
  }

  if (loading) {
    return <main>Carregando...</main>;
  }

  if (!session) {
    return <Login onLogin={() => {}} />;
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