"use client";

import { useState } from "react";

const conversations = [
  { name: "Equipe de Desenvolvimento", message: "Vamos alinhar as próximas tarefas?", time: "10:42", initials: "ED", unread: 2, color: "violet" },
  { name: "Ana Souza", message: "Perfeito, obrigado!", time: "09:18", initials: "AS", unread: 0, color: "green" },
  { name: "Design e Produto", message: "O protótipo está disponível para revisão.", time: "Ontem", initials: "DP", unread: 0, color: "orange" },
  { name: "Lucas Mendes", message: "Te envio os detalhes ainda hoje.", time: "Ontem", initials: "LM", unread: 0, color: "blue" },
];

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState("");
  const filtered = conversations.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <header className="brand"><div className="brand-mark">T</div><div><strong>TeamTalk</strong><span>Comunicação interna</span></div></header>
        <div className="profile"><div className="avatar avatar-profile">FC</div><div><strong>Felipe Costa</strong><span>Meu perfil</span></div><span className="online-dot" /></div>
        <div className="section-heading"><span>CONVERSAS</span><button aria-label="Nova conversa" className="icon-button">＋</button></div>
        <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar conversa" /></label>
        <div className="conversation-list">
          {filtered.map((item) => {
            const index = conversations.indexOf(item);
            return <button key={item.name} className={`conversation ${selected === index ? "active" : ""}`} onClick={() => setSelected(index)}>
              <div className={`avatar avatar-${item.color}`}>{item.initials}</div>
              <div className="conversation-copy"><strong>{item.name}</strong><span>{item.message}</span></div>
              <div className="conversation-meta"><span>{item.time}</span>{item.unread > 0 && <b>{item.unread}</b>}</div>
            </button>;
          })}
          {filtered.length === 0 && <p className="empty-search">Nenhuma conversa encontrada.</p>}
        </div>
        <footer className="sidebar-footer"><span className="status-dot" /> Ambiente de demonstração</footer>
      </aside>
      <section className="chat-panel">
        <header className="chat-header"><div className={`avatar avatar-${conversations[selected].color}`}>{conversations[selected].initials}</div><div><strong>{conversations[selected].name}</strong><span>Conversa de demonstração</span></div><button className="icon-button more-button" aria-label="Mais opções">•••</button></header>
        <div className="chat-content"><div className="welcome-icon">✦</div><h1>Seu espaço de comunicação.</h1><p>Conecte-se com sua equipe e mantenha as conversas organizadas em um só lugar.</p><div className="demo-notice">Esta é uma tela inicial ilustrativa. As mensagens ainda não estão conectadas ao servidor.</div></div>
        <div className="message-placeholder"><span>As mensagens aparecerão aqui quando a integração estiver pronta.</span><div className="fake-input">Escreva uma mensagem... <span>➤</span></div></div>
      </section>
    </main>
  );
}
