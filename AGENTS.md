# La Santísima — Vinería

Landing page institucional para una vinería de barrio en Salta, Argentina. React 19 + Vite, JavaScript puro, CSS plano.

## Stack

- **React 19** + **Vite 8**
- **JavaScript (JSX)** — sin TypeScript, sin estado global
- **CSS plano con variables** — sin Tailwind, shadcn, MUI ni librerías UI
- **Oxlint** — linting (`npm run lint`)
- **Google Fonts**: Playfair Display (títulos, itálica) + Lato (cuerpo, weight 300)

## Estructura del repo

```
La Santisima - Vineria/            ← raíz del repo
├── AGENTS.md                      ← este archivo
├── README.md                      ← documentación principal del proyecto
├── REQUERIMIENTOS.md              ← documento de requerimientos original
├── .opencode/                     ← configuración de opencode
│   ├── .gitignore
│   ├── package.json
│   └── skills/
│       └── ui-ux/
│           └── SKILL.md           ← guías de diseño (consultar antes de cambios de UI)
│
└── la-santisima/                  ← raíz de la app (React + Vite)
    ├── index.html
    ├── vite.config.js
    ├── .oxlintrc.json
    ├── package.json
    ├── .gitignore
    ├── public/
    │   ├── favicon.svg            ← favicon, no se referencia en HTML (usa emoji inline)
    │   └── icons.svg              ← sprite de íconos opencode — NO se usa en la app
    └── src/
        ├── main.jsx               ← entry point (createRoot + StrictMode)
        ├── App.jsx                ← página completa (~244 líneas)
        ├── index.css              ← estilos globales + mármol SVG inline (~607 líneas)
        ├── assets/
        │   ├── glass-icon.png     ← raster con transparencia, usado en navbar como isotipo
        │   ├── hero.png           ← no se usa
        │   ├── react.svg          ← default Vite, no se usa
        │   └── vite.svg           ← default Vite, no se usa
        └── components/
            └── DrinkCard.jsx      ← tarjeta SVG copa para tragos (no renderizada actualmente)
```

## Secciones (en orden)

1. **Hero** — solo nombre + "VINOS Y LICORES", full viewport, título con text-shadow glow
2. **Sobre nosotros** — texto institucional, max-width 640px, 3 párrafos
3. **Catálogo** — 5 tabs texto (CERVEZAS, VINOS, LICORES, DESTILADOS, CÓCTELES LISTOS), lista tipográfica sin cards. Animación fadeIn al cambiar de categoría. Mensaje "Estamos sumando variedad en esta categoría." cuando no hay productos.
4. **Tragos delivery** — fondo #1A1A1A, **no renderiza DrinkCards actualmente** — muestra cartel "Próximamente" con `drinks-empty`
5. **Ubicación** — dirección real (Orán 1767, Salta Capital), ícono pin SVG
6. **Contacto** — rediseño minimal: eyebrow dorado uppercase + título + separador + CTA WhatsApp con borde dorado. Sin badges (quedan solo en el footer).

## Diseño

| Token | Valor |
|---|---|
| Fondo | Mármol oscuro con vetas doradas (SVG inline, 15+ paths) + `radial-gradient(ellipse at center, #1A1A1A 0%, #0D0D0D 70%)` en body |
| Paleta | `#0D0D0D`, `#C9A84C`, `#F5F0E8`, `#2A2A2A`, `#1A1A1A` |
| Separadores | Dorados finos (60px × 1px) |
| Navbar | Sticky, backdrop blur(4px), marca dorada itálica + glass-icon izq., botón hamburguesa SVG inline siempre visible → menú dropdown con 3 links. Sin links en fila en ningún breakpoint. |
| Responsive | Mobile 375px+; drink grid 4 → 2 → 1 col; section padding 6rem → 4rem en mobile; navbar hamburguesa universal (sin breakpoint) |

## Datos del catálogo (hardcodeados en App.jsx)

```js
const products = {
  CERVEZAS: [],
  VINOS: [
    { name: 'Estancia Mendoza Malbec', description: '...' },
    { name: 'Toro Clásico Tinto', description: '...' },
  ],
  LICORES: [],
  DESTILADOS: [
    { name: 'Vodka New Style Frutos Rojos', description: '...' },
    { name: 'Vodka Smirnoff Raspberry', description: '...' },
    { name: 'Vodka Smirnoff Watermelon', description: '...' },
  ],
  'CÓCTELES LISTOS': [
    { name: 'Aperitivo Dr. Lemon Mojito', description: '...' },
    { name: 'Aperitivo Dr. Lemon Vodka', description: '...' },
  ],
}
```

## Convenciones

- **Sin imágenes externas** ni íconos de librerías — todo SVG inline
- **Excepción**: `glass-icon.png` (raster con transparencia, isotipo real de marca en navbar)
- **Catálogo sin cards** — solo texto: nombre dorado itálico + abv badge opcional + descripción
- **Sin routing** — single page con anchors y `scroll-behavior: smooth`
- **Datos hardcodeados** en `App.jsx` — sin API ni backend
- **CSS plano** con `:root` variables, sin módulos CSS ni CSS-in-JS
- **WhatsApp número placeholder** — reemplazar `5493XXXXXXXXXX` antes de producción
- **Email placeholder** — reemplazar `hola@lasantisima.com.ar` en footer
- **Instagram placeholder** — https://instagram.com/lasantisima
- **`hero.png` y `public/icons.svg` existen pero no se usan** en la app
- **DrinkCard.jsx** existe como componente pero la sección de tragos está en estado "Próximamente" (no lo importa ni renderiza)

## Scripts

```bash
cd la-santisima
npm run dev      # servidor desarrollo (Vite)
npm run build    # build producción en dist/
npm run preview  # previsualizar build localmente
npm run lint     # Oxlint
```

## UI/UX Skill

El archivo `.opencode/skills/ui-ux/SKILL.md` contiene las guías de diseño detalladas para mantener coherencia visual. Consultarlo antes de hacer cambios de UI.

## Documentación relacionada

- [`README.md`](./README.md) — documentación principal del proyecto
- [`REQUERIMIENTOS.md`](./REQUERIMIENTOS.md) — documento de requerimientos original
- [`la-santisima/README.md`](./la-santisima/README.md) — stub que redirige al README raíz
