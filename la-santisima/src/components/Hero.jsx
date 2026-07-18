import logo from '../assets/Copa_La_Santisima (Finish).svg'

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <img src={logo} alt="La Santísima Logo" className="hero__logo" />
      <h1 className="hero__title">La Santísima</h1>
      <p className="hero__sub">Bebidas para cada ocasión</p>
    </section>
  )
}

