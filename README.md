# La Santísima — Vinería

Landing page institucional para **La Santísima**, una vinería de barrio en Salta, Argentina.  
El negocio tiene dos líneas de servicio: venta de bebidas embotelladas en local físico y delivery de tragos preparados.

Desarrollada con **React 19 + Vite 8**, JavaScript puro, CSS plano con variables, y Oxlint.  
Sin e-commerce, sin routing, sin backend — single page informativa con scroll suave y anchors.

---

## Stack

| Elemento | Versión / Detalle |
|---|---|
| Framework | React 19 + Vite 8 |
| Lenguaje | JavaScript (JSX) — sin TypeScript |
| Linter | Oxlint 1.71 |
| Router | Sin router (single page con `scroll-behavior: smooth`) |
| Hosting | Vercel o Netlify |
| Tipografía | Playfair Display (títulos, itálica) + Lato (cuerpo, weight 300) |
| Fuentes | Google Fonts |

## Estructura del proyecto

```
La Santisima - Vineria/            ← raíz del repo
├── AGENTS.md                      ← contexto para asistentes IA (opencode)
├── README.md                      ← este archivo
├── REQUERIMIENTOS.md              ← documento de requerimientos original
├── .opencode/                     ← configuración de opencode
│   ├── .gitignore
│   ├── package.json
│   └── skills/
│       └── ui-ux/
│           └── SKILL.md           ← guías de diseño detalladas
│
└── la-santisima/                  ← raíz de la app (React + Vite)
    ├── index.html
    ├── vite.config.js
    ├── .oxlintrc.json
    ├── package.json
    ├── .gitignore
    ├── public/
    │   ├── favicon.svg            ← favicon del proyecto (no se usa en página)
    │   └── icons.svg              ← sprite de íconos (no se usa en app)
    └── src/
        ├── main.jsx               ← entry point (StrictMode + createRoot)
        ├── App.jsx                ← página completa (~214 líneas)
        ├── index.css              ← estilos globales + mármol SVG inline (~546 líneas)
        ├── assets/
        │   ├── glass-icon.png     ← isotipo de la marca (usado en navbar)
        │   ├── hero.png           ← no se usa en la app
        │   ├── react.svg          ← default Vite (no se usa)
        │   └── vite.svg           ← default Vite (no se usa)
        └── components/
            └── DrinkCard.jsx      ← tarjeta para tragos delivery (actualmente no renderizado — estado "Próximamente")
```

## Secciones (en orden de la página)

1. **Hero** — nombre "La Santísima" en itálica dorada + subtítulo "VINOS Y LICORES", full viewport, glow sutil
2. **Sobre nosotros** — texto institucional cálido, max-width 640px, centrado
3. **Catálogo** — 5 categorías navegables por tabs (CERVEZAS, VINOS, LICORES, DESTILADOS, CÓCTELES LISTOS). Productos como lista tipográfica sin cards: nombre dorado itálico + descripción. Animación fadeIn al cambiar de categoría.
4. **Tragos delivery** — fondo `#1A1A1A`, actualmente muestra cartel "Próximamente"
5. **Ubicación** — dirección real (Orán 1767, Salta Capital) con ícono pin SVG
6. **Contacto** — CTA a WhatsApp con botón dorado. Footer con badges redondos para Email, WhatsApp e Instagram.

## Diseño

| Token | Valor |
|---|---|
| Fondo | Mármol oscuro con vetas doradas (SVG inline, 15 paths) + radial gradient `#1A1A1A` → `#0D0D0D` |
| Paleta | `#0D0D0D` (negro), `#C9A84C` (dorado), `#F5F0E8` (blanco roto), `#2A2A2A` (gris piedra), `#1A1A1A` (fondo alternativo) |
| Separadores | Dorados finos: 60px × 1px |
| Navbar | Sticky, backdrop-filter blur(4px), marca dorada itálica + glass-icon a la izq., links uppercase a la der. |
| Responsive | 375px+; drink grid 4 → 2 → 1 col; padding de secciones se reduce en mobile |
| Animaciones | Catalog fadeIn (0.35s), hover en botones y badges |

## Desarrollo

Todos los comandos se ejecutan dentro de `la-santisima/`:

```bash
cd la-santisima
npm run dev       # servidor de desarrollo
npm run build     # build producción en dist/
npm run preview   # previsualizar build localmente
npm run lint      # Oxlint
```

## Pendientes antes de producción

- [ ] Reemplazar `5493XXXXXXXXXX` por el número real de WhatsApp en `App.jsx` (líneas 170, 193)
- [ ] Confirmar dirección real, horarios y redes sociales
- [ ] Completar productos del catálogo (especialmente CERVEZAS y LICORES)
- [ ] Armar lista de tragos delivery y renderizar DrinkCards
- [ ] Reemplazar placeholder de email `hola@lasantisima.com.ar`
- [ ] Fotos propias del local y productos
- [ ] Dominio propio si corresponde

## Documentación relacionada

- [`AGENTS.md`](./AGENTS.md) — contexto para asistentes IA (opencode)
- [`REQUERIMIENTOS.md`](./REQUERIMIENTOS.md) — documento de requerimientos original del proyecto
- [`.opencode/skills/ui-ux/SKILL.md`](./.opencode/skills/ui-ux/SKILL.md) — guías de diseño detalladas

## Licencia

Proyecto privado — todos los derechos reservados.
