# La Santísima — Vinería

Landing page institucional para La Santísima, una vinería de barrio en Salta.

Desarrollada con **React 19 + Vite**, JavaScript puro, CSS plano con variables, y Oxlint.

## Stack

- **React 19** + **Vite 8**
- **JavaScript (JSX)** — sin TypeScript
- **CSS plano** — sin frameworks UI, sin Tailwind, sin librerías externas
- **Oxlint** — linting
- **Google Fonts** — Playfair Display (títulos) + Lato (cuerpo)

## Estructura

```
la-santisima/
├── index.html
├── vite.config.js
├── .oxlintrc.json
├── src/
│   ├── main.jsx
│   ├── App.jsx           ← página completa (Hero, Nosotros, Catálogo, Tragos, Ubicación, Contacto)
│   ├── index.css          ← estilos globales + mármol SVG inline
│   └── components/
│       ├── DrinkCard.jsx  ← tarjeta para tragos delivery
│       └── ProductCard.jsx← (eliminado — el catálogo usa formato tipográfico)
```

## Desarrollo

```bash
cd la-santisima
npm run dev      # servidor de desarrollo
npm run build    # build producción
npm run lint     # Oxlint
```

## Secciones

1. **Hero** — Nombre en itálica dorada + subtítulo "VINOS Y LICORES"
2. **Sobre nosotros** — Texto institucional cálido
3. **Catálogo** — 5 categorías (CERVEZAS, VINOS, LICORES, DESTILADOS, CÓCTELES LISTOS) con lista tipográfica de productos
4. **Tragos delivery** — Servicio de tragos preparados con tarjetas
5. **Ubicación** — Dirección placeholder
6. **Contacto** — CTA a WhatsApp

## Diseño

- Fondo mármol oscuro con vetas doradas (SVG inline)
- Paleta: `#0D0D0D`, `#C9A84C`, `#F5F0E8`, `#2A2A2A`
- Barra de navegación sticky
- Scroll suave, responsive (375px en adelante)
