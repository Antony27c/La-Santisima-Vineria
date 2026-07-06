# La Santísima — Vinería

Landing page institucional para una vinería de barrio en Salta, Argentina. React 19 + Vite, JavaScript puro, CSS plano.

## Stack

- **React 19** + **Vite 8**
- **JavaScript (JSX)** — sin TypeScript, sin estado global
- **CSS plano con variables** — sin Tailwind, shadcn, MUI ni librerías UI
- **Oxlint** — linting (`npm run lint`)
- **Google Fonts**: Playfair Display (títulos, itálica) + Lato (cuerpo, weight 300)

## Estructura

```
la-santisima/                    ← raíz de la app
├── index.html
├── vite.config.js
├── .oxlintrc.json
├── src/
│   ├── main.jsx                 ← entry point (createRoot + StrictMode)
│   ├── App.jsx                  ← página completa (aprox. 400 líneas)
│   ├── index.css                ← estilos globales + mármol SVG inline
│   └── components/
│       └── DrinkCard.jsx        ← tarjeta para tragos delivery
```

## Secciones (en orden)

1. **Hero** — solo nombre + "VINOS Y LICORES", full viewport
2. **Sobre nosotros** — texto institucional, max-width 640px
3. **Catálogo** — 5 tabs texto (CERVEZAS, VINOS, LICORES, DESTILADOS, CÓCTELES LISTOS), lista tipográfica sin cards
4. **Tragos delivery** — fondo #1A1A1A, grid de DrinkCards
5. **Ubicación** — dirección placeholder, ícono pin SVG
6. **Contacto** — CTA WhatsApp con icono SVG

## Diseño

| Token | Valor |
|---|---|
| Fondo | Mármol oscuro con vetas doradas (SVG inline, 15+ paths) |
| Paleta | `#0D0D0D`, `#C9A84C`, `#F5F0E8`, `#2A2A2A`, `#1A1A1A` |
| Separadores | Dorados finos (60px × 1px) |
| Navbar | Sticky, backdrop blur, marca dorada itálica izq., links uppercase der. |
| Responsive | Mobile 375px+; drink grid 4 → 2 → 1 col |

## Convenciones

- **Sin imágenes externas** ni íconos de librerías — todo SVG inline
- **Catálogo sin cards** — solo texto: nombre dorado itálico + abv badge opcional + descripción
- **Sin routing** — single page con anchors y `scroll-behavior: smooth`
- **Datos hardcodeados** en `App.jsx` — sin API ni backend
- **CSS plano** con `:root` variables, sin módulos CSS ni CSS-in-JS
- **WhatsApp número placeholder** — reemplazar `5493XXXXXXXXXX` antes de producción
- **`hero.png` y `icons.svg` existen en assets pero no se usan** en la app
- **`glass-icon.png`**: raster con transparencia, excepción a la regla de SVG inline por ser el isotipo real de marca

## Scripts

```bash
cd la-santisima
npm run dev      # servidor desarrollo
npm run build    # build producción
npm run lint     # Oxlint
```

## UI/UX Skill

El archivo `.opencode/skills/ui-ux/SKILL.md` contiene las guías de diseño detalladas para mantener coherencia visual. Consultarlo antes de hacer cambios de UI.
