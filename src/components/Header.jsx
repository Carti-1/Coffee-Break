export default function Header({ onJoin }) {
  return (
    <header className="wrap nav">
      <a className="brand" href="#inicio"><span className="brand-mark">↗</span><span>clube do intervalo</span></a>
      <nav className="navlinks" aria-label="Navegação principal">
        <a href="#agenda">Agenda</a><a href="#sobre">O clube</a><a href="#participar">Participar</a>
        <button className="nav-cta" onClick={onJoin}>Vem com a gente ↗</button>
      </nav>
      <a className="mobile-menu" href="#agenda" aria-label="Ir para agenda">☰</a>
    </header>
  )
}
