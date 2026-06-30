import { useState } from 'react'
import DrinkCard from './components/DrinkCard.jsx'

function MarbleTexture() {
  return (
    <svg
      className="marble-texture"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M-100,200 C100,50 300,300 500,100 S700,400 900,150 S1100,350 1300,200" stroke="#C9A84C" strokeWidth="2" fill="none" opacity="0.08" />
      <path d="M-100,400 C150,250 350,500 550,300 S750,600 950,350 S1150,550 1350,400" stroke="#C9A84C" strokeWidth="1.5" fill="none" opacity="0.1" />
      <path d="M-100,600 C200,450 400,700 600,500 S800,800 1000,550 S1200,750 1400,600" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.12" />
      <path d="M-100,800 C180,700 380,850 580,750 S780,950 980,800 S1180,900 1380,850" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.08" />
      <path d="M-100,1000 C130,900 330,1050 530,950 S730,1150 930,1000 S1130,1100 1330,1050" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.06" />
      <path d="M-100,50 C220,-50 420,150 620,50 S820,250 1020,100 S1220,200 1420,50" stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.15" />
      <path d="M-100,1200 C160,1100 360,1250 560,1150 S760,1350 960,1200 S1160,1300 1360,1250" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.09" />
      <path d="M-100,300 C300,100 500,400 700,200 S900,500 1100,300 S1300,450 1500,350" stroke="#C9A84C" strokeWidth="1.8" fill="none" opacity="0.07" />
      <path d="M-100,700 C250,550 450,800 650,600 S850,900 1050,700 S1250,850 1450,750" stroke="#C9A84C" strokeWidth="1.3" fill="none" opacity="0.11" />
      <path d="M-100,900 C280,780 480,950 680,830 S880,1050 1080,920 S1280,1000 1480,950" stroke="#C9A84C" strokeWidth="0.9" fill="none" opacity="0.07" />
      <path d="M-100,1100 C210,1000 410,1150 610,1050 S810,1250 1010,1100 S1210,1200 1410,1150" stroke="#C9A84C" strokeWidth="0.5" fill="none" opacity="0.13" />
      <path d="M-100,1300 C190,1200 390,1350 590,1250 S790,1450 990,1300 S1190,1400 1390,1350" stroke="#C9A84C" strokeWidth="0.4" fill="none" opacity="0.1" />
      <path d="M-100,500 C170,350 370,550 570,420 S770,650 970,500 S1170,600 1370,550" stroke="#C9A84C" strokeWidth="0.7" fill="none" opacity="0.09" />
      <path d="M-100,150 C240,0 440,200 640,80 S840,300 1040,150 S1240,250 1440,180" stroke="#C9A84C" strokeWidth="1.1" fill="none" opacity="0.06" />
      <path d="M-100,1400 C230,1300 430,1450 630,1350 S830,1550 1030,1400 S1230,1500 1430,1450" stroke="#C9A84C" strokeWidth="0.6" fill="none" opacity="0.08" />
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <span className="navbar__brand">La Santísima</span>
        <ul className="navbar__links">
          <li><a href="#catalogo" className="navbar__link">Catálogo</a></li>
          <li><a href="#sobre-nosotros" className="navbar__link">Nosotros</a></li>
          <li><a href="#contacto" className="navbar__link">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

const products = {
  CERVEZAS: [
    { name: 'Clásica', description: 'Rubia de carácter suave y equilibrado' },
    { name: 'Suave', description: 'De baja amargor, ideal para el día a día' },
    { name: 'Tostada', description: 'Notas de malta caramelizada' },
    { name: 'Radler', description: 'Con limón natural, refrescante' },
    { name: 'Doble Malta', description: 'Cuerpo robusto y sabor intenso' },
    { name: 'Sin Alcohol', description: 'Todo el sabor, sin el alcohol' },
    { name: 'Gluten Free', description: 'Apta para celíacos' },
  ],
  VINOS: [
    { name: 'Tinto Reserva', description: 'Estructura firme, taninos elegantes' },
    { name: 'Tinto Joven', description: 'Frutal y directo, para tomar fresco' },
    { name: 'Blanco Seco', description: 'Fresco y mineral, notas cítricas' },
    { name: 'Rosado', description: 'Delicado, con aromas de frutos rojos' },
    { name: 'Cava Brut', description: 'Burbujas finas, final seco y limpio' },
    { name: 'Dulce Natural', description: 'Postre líquido, suave y aromático' },
  ],
  LICORES: [
    { name: 'Licor Crema de Sandía Royal Swan', description: 'Dulce y refrescante, ideal para el verano', abv: '15% vol' },
    { name: 'Licor Crema de Fresa Royal Swan', description: 'Suave y frutal, perfecto en las rocas' },
    { name: 'Licor Crema de Arroz Royal Swan', description: 'Delicado y oriental, una experiencia distinta' },
    { name: 'Licor de Hierbas Puente Pazos', description: 'Herbal y digestivo, tradición gallega', abv: '30% vol' },
    { name: 'Licor Melón Pi.omka', description: 'Frutal sin culpa, apto para todos', abv: 'sin alcohol' },
  ],
  DESTILADOS: [
    { name: 'Ginebra', description: 'Botánica y aromática, para gin tonics de autor' },
    { name: 'Ron', description: 'Cañero y suave, base de los mejores tragos' },
    { name: 'Vodka', description: 'Neutro y limpio, versátil en coctelería' },
    { name: 'Whisky James Webb', description: 'Ahumado suave, carácter propio' },
    { name: 'Whisky Johnnie Walker', description: 'Clásico escocés de confianza' },
    { name: 'Brandy', description: 'Cálido y añejado, para cerrar la noche' },
  ],
  'CÓCTELES LISTOS': [
    { name: 'Mojito La Recompensa Ice', description: 'Listo para tomar, refrescante y balanceado', abv: '12% vol' },
  ],
}

const drinks = [
  { name: 'Negroni', description: 'Ginebra, Campari, vermouth rojo y un toque de naranja.' },
  { name: 'Moscow Mule', description: 'Vodka, jengibre, lima y soda bien fría.' },
  { name: 'Margarita', description: 'Tequila, triple sec, jugo de lima y sal en el borde.' },
  { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda y rodaja de naranja.' },
]

const categories = Object.keys(products)

function App() {
  const [activeCat, setActiveCat] = useState(categories[0])

  return (
    <>
      <MarbleTexture />
      <Navbar />

      <section id="hero" className="hero-section">
        <h1 className="hero__title">La Santísima</h1>
        <p className="hero__sub">Vinos y licores</p>
      </section>

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
            {products[activeCat].map((p, i) => (
              <div key={i} className="catalog-product">
                <p className="catalog-product__name">
                  {p.name}
                  {p.abv && <span className="catalog-product__abv">{p.abv}</span>}
                </p>
                <p className="catalog-product__desc">{p.description}</p>
                {i < products[activeCat].length - 1 && <hr className="catalog-product__sep" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tragos" className="section drinks-section">
        <div className="container">
          <h2>Tragos delivery</h2>
          <hr className="section-divider" />
          <p className="section-subtitle">
            Además de nuestro catálogo, preparamos tragos de especialidad para llevar o recibir en tu casa
          </p>
          <div className="drink-grid">
            {drinks.map((d, i) => (
              <DrinkCard key={i} name={d.name} description={d.description} />
            ))}
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
            <p className="location__address">Av. San Martín 1452, Salta</p>
            <p className="location__note">Pronto abrimos nuestras puertas. Seguinos en redes para novedades.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="container">
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
    </>
  )
}

export default App
