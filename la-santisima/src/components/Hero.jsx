import logo from '../assets/Copa_La_Santisima (Finish).svg'

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <img src={logo} alt="" className="hero__logo" />
      <h1 className="hero__title">La Santísima</h1>
      <p className="hero__sub">Bebidas para cada ocasión</p>
      <div className="hero__actions">
        <a href="#catalogo" className="btn">Ver catálogo</a>
      </div>
      <a href="#sobre-nosotros" className="hero__scroll" aria-label="Seguir a Sobre nosotros">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
