
"use client";

import { useState } from "react";

type Colleague = {
  id: number;
  name: string;
  role: string;
  initials: string;
  online: boolean;
};

type ColleaguesProps = {
  onSelectColleague: (name: string) => void;
  colleagues?: Colleague[];
  isLoading?: boolean;
  error?: string | null;
};

const demoColleagues: Colleague[] = [
  { id: 1, name: "Ana Silva", role: "Design", initials: "AS", online: true },
  { id: 2, name: "Carlos Mendes", role: "Desenvolvimento", initials: "CM", online: true },
  { id: 3, name: "Mariana Costa", role: "Recursos Humanos", initials: "MC", online: false },
  { id: 4, name: "Pedro Santos", role: "Marketing", initials: "PS", online: true },
  { id: 5, name: "Julia Oliveira", role: "Financeiro", initials: "JO", online: false },
];

export default function Colleagues({
  onSelectColleague,
  colleagues = demoColleagues,
  isLoading = false,
  error = null,
}: ColleaguesProps) {
  const [search, setSearch] = useState("");

  const filteredColleagues = colleagues.filter((colleague) =>
    colleague.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="colleagues-container">
      <header className="colleagues-header">
        <h1>Equipe</h1>
        <p>Encontre e converse com seus colegas.</p>
      </header>

      <div className="colleagues-search">
        <input
          type="search"
          placeholder="Pesquisar colegas..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <section className="colleagues-list">
        {isLoading ? (
          <p className="colleagues-empty">
            Carregando colegas...
          </p>
        ) : error ? (
          <p className="colleagues-empty">
            Não foi possível carregar os colegas: {error}
          </p>
        ) : colleagues.length === 0 ? (
          <p className="colleagues-empty">
            Nenhum colega cadastrado ainda.
          </p>
        ) : filteredColleagues.length === 0 ? (
          <p className="colleagues-empty">
            Nenhum colega encontrado.
          </p>
        ) : (
          filteredColleagues.map((colleague) => (
            <button
              type="button"
              className="colleague-card"
              key={colleague.id}
              onClick={() => onSelectColleague(colleague.name)}
            >
              <div className="colleague-avatar">
                {colleague.initials}
                <span className={colleague.online ? "online" : "offline"} />
              </div>

              <div className="colleague-info">
                <h2>{colleague.name}</h2>
                <p>{colleague.role}</p>
              </div>

              <span className="colleague-status">
                {colleague.online ? "Online" : "Offline"}
              </span>
            </button>
          ))
        )}
      </section>
    </main>
  );
}
