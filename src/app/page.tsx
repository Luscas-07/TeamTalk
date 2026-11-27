
"use client";

import { useState, type FormEvent } from "react";

type Message = {
  text: string;
  time: string;
  sent: boolean;
};

const conversations = [
  { name: "Equipe de Desenvolvimento", message: "Vamos alinhar as próximas tarefas?", time: "10:42", initials: "ED", unread: 2, color: "violet" },
  { name: "Ana Souza", message: "Perfeito, obrigado!", time: "09:18", initials: "AS", unread: 0, color: "green" },
  { name: "Design e Produto", message: "O protótipo está disponível para revisão.", time: "Ontem", initials: "DP", unread: 0, color: "orange" },
  { name: "Lucas Mendes", message: "Te envio os detalhes ainda hoje.", time: "Ontem", initials: "LM", unread: 0, color: "blue" },
];

const initialMessages: Record<number, Message[]> = {
  0: [
    { text: "Bom dia, pessoal! Como estamos com as tarefas?", time: "10:30", sent: false },
    { text: "A estrutura inicial do frontend já está pronta.", time: "10:35", sent: true },
    { text: "Vamos alinhar as próximas tarefas?", time: "10:42", sent: false },
  ],
  1: [
    { text: "Você conseguiu revisar o material?", time: "09:10", sent: false },
    { text: "Perfeito, obrigado!", time: "09:18", sent: true },
  ],
  2: [
    { text: "O protótipo está disponível para revisão.", time: "Ontem", sent: false },
  ],
  3: [
    { text: "Te envio os detalhes ainda hoje.", time: "Ontem", sent: false },
  ],
};

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [messagesByConversation, setMessagesByConversation] =
    useState<Record<number, Message[]>>(initialMessages);

  const filtered = conversations.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const messages = messagesByConversation[selected] || [];

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = draft.trim();
    if (!text) return;

    const newMessage: Message = {
      text,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sent: true,
    };

    setMessagesByConversation((previous) => ({
      ...previous,
      [selected]: [...(previous[selected] || []), newMessage],
    }));

    setDraft("");
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <header className="brand">
          <div className="brand-mark">T</div>
          <div>
            <strong>TeamTalk</strong>
            <span>Comunicação interna</span>
          </div>
        </header>

        <div className="profile">
          <div className="avatar avatar-profile">FC</div>
          <div>
            <strong>Felipe Costa</strong>
            <span>Meu perfil</span>
          </div>
          <span className="online-dot" />
        </div>

        <div className="section-heading">
          <span>CONVERSAS</span>
          <button aria-label="Nova conversa" className="icon-button">＋</button>
        </div>

        <label className="search">
          <span>⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar conversa"
          />
        </label>

        <div className="conversation-list">
          {filtered.map((item) => {
            const index = conversations.indexOf(item);

            return (
              <button
                key={item.name}
                className={`conversation ${selected === index ? "active" : ""}`}
                onClick={() => setSelected(index)}
              >
                <div className={`avatar avatar-${item.color}`}>
                  {item.initials}
                </div>
                <div className="conversation-copy">
                  <strong>{item.name}</strong>
                  <span>
                    {messagesByConversation[index]?.slice(-1)[0]?.text || item.message}
                  </span>
                </div>
                <div className="conversation-meta">
                  <span>{item.time}</span>
                  {item.unread > 0 && <b>{item.unread}</b>}
                </div>
              </button>
            );
          })}

          {filtered.length === 0 && (
            <p className="empty-search">Nenhuma conversa encontrada.</p>
          )}
        </div>

        <footer className="sidebar-footer">
          <span className="status-dot" /> Ambiente de demonstração
        </footer>
      </aside>

      <section className="chat-panel">
        <header className="chat-header">
          <div className={`avatar avatar-${conversations[selected].color}`}>
            {conversations[selected].initials}
          </div>
          <div>
            <strong>{conversations[selected].name}</strong>
            <span>Conversa de demonstração</span>
          </div>
          <button className="icon-button more-button" aria-label="Mais opções">
            •••
          </button>
        </header>

        <div className="chat-messages">
          <div className="demo-notice">
            Esta é uma demonstração. As mensagens ainda não estão conectadas ao servidor.
          </div>

          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${message.sent ? "sent" : "received"}`}
            >
              <div className="message-bubble">
                <p>{message.text}</p>
                <span>{message.time}</span>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <p className="no-messages">Nenhuma mensagem nesta conversa.</p>
          )}
        </div>

        <form className="message-form" onSubmit={sendMessage}>
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Escreva uma mensagem..."
          />
          <button type="submit" aria-label="Enviar mensagem">
            ➤
          </button>
        </form>
      </section>
    </main>
  );
}
