---
name: ui-ux
description: UI/UX design guidance for La Santísima landing page — marble dark theme, gold accents, Playfair Display, minimalista
license: MIT
compatibility: opencode
---

## Estilo visual del proyecto

- **Fondo**: mármol oscuro con vetas doradas (SVG inline con paths curvos, opacity 0.06–0.15, stroke #C9A84C, sin fill)
- **Paleta**: `#0D0D0D` (negro profundo), `#C9A84C` (dorado), `#F5F0E8` (blanco roto), `#2A2A2A` (gris piedra), `#1A1A1A` (fondo alternativo)
- **Display**: Playfair Display itálica para títulos y nombres de producto
- **Cuerpo**: Lato weight 300
- **Navbar**: sticky, marca dorada itálica izquierda, links uppercase texto plano derecha
- **Hero**: solo título dorado + subtítulo "VINOS Y LICORES" con letter-spacing amplio
- **Catálogo**: 5 categorías (CERVEZAS, VINOS, LICORES, DESTILADOS, CÓCTELES LISTOS) como tabs texto + gold underline. Productos como lista tipográfica: nombre dorado itálico + abv opcional pequeño + descripción. Separador 1px sutil entre items. Sin cards, sin imágenes, sin íconos.
- **Tragos delivery**: fondo #1A1A1A, DrinkCard con SVG copa
- **Secciones**: mucho espacio vertical, separadores dorados finos (60px, 1px), scroll suave
- **Responsive**: mobile 375px+
- **Sin imágenes externas**, sin Tailwind/shadcn/MUI, solo CSS plano con variables
