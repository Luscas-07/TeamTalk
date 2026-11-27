
type ProfileProps = {
  onLogout: () => void;
};

export default function Profile({ onLogout }: ProfileProps) {
  return (
    <main className="profile-page">
      <header className="profile-page-header">
        <h1>Meu perfil</h1>
        <p>Informações da sua conta</p>
      </header>

      <section className="profile-card">
        <div className="profile-large-avatar">FC</div>

        <h2>Felipe Costa</h2>
        <p className="profile-role">Usuário do TeamTalk</p>

        <div className="profile-details">
          <div className="profile-detail">
            <span>Nome</span>
            <strong>Felipe Costa</strong>
          </div>

          <div className="profile-detail">
            <span>Status</span>
            <strong className="profile-active-status">
              <span /> Ativo
            </strong>
          </div>

          <div className="profile-detail">
            <span>Organização</span>
            <strong>Ambiente de demonstração</strong>
          </div>
        </div>

        <button
          type="button"
          className="profile-logout"
          onClick={onLogout}
        >
          Sair da conta
        </button>
      </section>
    </main>
  );
}
