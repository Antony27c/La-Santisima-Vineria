import { useState } from 'react'
import logoIcon from './assets/Copa_La_Santisima (Finish).svg'
import Hero from './components/Hero'

function MarbleTexture() {
  return <div className="marble-texture" aria-hidden="true" />
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar-brand">
          <img src={logoIcon} alt="La Santísima" className="navbar-glass-icon" />
          <span className="navbar-brand-text">La Santísima</span>
        </div>
        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <a href="#catalogo" className="navbar__mobile-link" onClick={closeMenu}>Catálogo</a>
        <hr className="navbar__mobile-sep" />
        <a href="#sobre-nosotros" className="navbar__mobile-link" onClick={closeMenu}>Nosotros</a>
        <hr className="navbar__mobile-sep" />
        <a href="#contacto" className="navbar__mobile-link" onClick={closeMenu}>Contacto</a>
      </div>
    </nav>
  )
}

const products = {
  CERVEZAS: [],
  VINOS: [
    { name: 'Estancia Mendoza Malbec', description: 'Un tinto de cuerpo profundo, ideal para acompañar un asado o una picada de barrio.' },
    { name: 'Toro Clásico Tinto', description: 'El tinto de mesa de todos los días, simple y noble.' },
  ],
  LICORES: [],
  DESTILADOS: [
    { name: 'Vodka New Style Frutos Rojos', description: 'Vodka saborizado, fresco y frutal.' },
    { name: 'Vodka Smirnoff Raspberry', description: 'El clásico Smirnoff con un toque a frambuesa.' },
    { name: 'Vodka Smirnoff Watermelon', description: 'Smirnoff sabor sandía, para los tragos de verano.' },
  ],
  'CÓCTELES LISTOS': [
    { name: 'Aperitivo Dr. Lemon Mojito', description: 'El mojito de siempre, ya preparado y listo para servir bien frío.' },
    { name: 'Aperitivo Dr. Lemon Vodka', description: 'Combinado de vodka, práctico y directo al vaso.' },
  ],
}

const categories = Object.keys(products)

function App() {
  const [activeCat, setActiveCat] = useState(categories[0])

  return (
    <>
      <MarbleTexture />
      <Navbar />
      <Hero />

      <section id="sobre-nosotros" className="section">
        <div className="container">
          <h2>Sobre nosotros</h2>
          <hr className="section-divider" />
          <div className="about__text">
            <p>
              La Santísima nace de un sueño de barrio: acercar los mejores vinos, licores y espumantes
              a nuestra gente, con la calidez de quien recibe amigos en casa.
            </p>
            <p>
              Somos un emprendimiento familiar que recién comienza su camino. Creemos en el producto
              bien seleccionado, en el trato personalizado y en que cada botella cuenta una historia.
            </p>
            <p>
              Este es nuestro primer paso. Te invitamos a ser parte de esta historia.
            </p>
          </div>
        </div>
      </section>

      <section id="catalogo" className="section">
        <div className="container">
          <h2>Catálogo</h2>
          <hr className="section-divider" />

          <div className="catalog-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`catalog-category ${activeCat === cat ? 'catalog-category--active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="catalog-products" key={activeCat}>
            {products[activeCat].length === 0 ? (
              <p className="catalog-empty">Estamos sumando variedad en esta categoría.</p>
            ) : (
              products[activeCat].map((p, i) => (
                <div key={i} className="catalog-product">
                  <p className="catalog-product__name">
                    {p.name}
                    {p.abv && <span className="catalog-product__abv">{p.abv}</span>}
                  </p>
                  <p className="catalog-product__desc">{p.description}</p>
                  {i < products[activeCat].length - 1 && <hr className="catalog-product__sep" />}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="section">
        <div className="container">
          <h2>Ubicación</h2>
          <hr className="section-divider" />
          <div className="location__content">
            <svg className="location__icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="location__address">Orán 1767, Salta Capital, Salta</p>
            <p className="location__note">Pronto abrimos nuestras puertas. Seguinos en redes para novedades.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="container">
          <p className="contact-eyebrow">Contacto</p>
          <h2>Contacto</h2>
          <hr className="section-divider" />
          <p className="section-subtitle">Escribinos por WhatsApp y te respondemos al toque</p>
          <a
            href="https://wa.me/5493XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Mandanos un WhatsApp
          </a>
        </div>
      </section>

      <footer className="contact-footer">
        <div className="container">
          <div className="contact-badges">
            <a href="mailto:lasantisimavineria@gmail.com" aria-label="Email" className="contact-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="M3 7l9 6 9-6"/>
              </svg>
            </a>
            <a href="https://wa.me/5493XXXXXXXXXX" aria-label="WhatsApp" className="contact-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3a9 9 0 00-7.75 13.5L3 21l4.5-1.25A9 9 0 1012 3z"/>
                <path d="M8.5 8.5c.3 2 3 4.7 5 5l1-1c.3-.3.8-.4 1.2-.1l1.8 1.3c.4.3.5.9.2 1.3-1 1.4-2.7 2-4.3 1.4-3-1.1-5.4-3.5-6.5-6.5-.6-1.6 0-3.3 1.4-4.3.4-.3 1-.2 1.3.2l1.3 1.8c.3.4.2.9-.1 1.2z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/lasantisima_ar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
