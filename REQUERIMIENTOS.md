# La Santísima — Vinería
## Documento de Requerimientos

---

## 1. Descripción del proyecto

Landing page de presentación para **La Santísima**, una vinería física ubicada en Salta, Argentina. El negocio es un emprendimiento que recién arranca, con dos líneas de servicio:

- **Principal:** venta de bebidas alcohólicas embotelladas (vinos, licores, espumantes, etc.) en el local físico.
- **Complementario:** servicio de delivery de tragos preparados.

La landing es puramente informativa/presentación. No tiene e-commerce, carrito de compras ni sistema de pagos.

---

## 2. Stack técnico

| Elemento | Decisión |
|---|---|
| Framework | React + Vite |
| Lenguaje | JavaScript (sin TypeScript) |
| Linter | Oxlint |
| Router | Sin router (landing de una sola página con scroll) |
| Hosting | Vercel o Netlify (gratuito) |
| Estilos | Por definir (Tailwind CSS recomendado) |

---

## 3. Estilo visual

- **Fondo:** mármol oscuro con vetas doradas, constante en toda la página.
- **Paleta:** negro profundo (`#0a0705`) + dorado (`#e8c873`) + dorado secundario (`#a4925f`).
- **Tipografía:** serif itálica para el nombre/branding; sans-serif fina para el resto del contenido.
- **Tono:** minimalista y aireado — el espacio en blanco y la textura son los protagonistas. Sin recortes poligonales ni íconos decorativos recargados.
- **Imágenes:** placeholders/stock por ahora, se reemplazan con fotos reales del local y productos cuando estén disponibles.

---

## 4. Secciones

### 4.1 Hero
- Nombre del negocio: **La Santísima**
- Tagline (a definir, foco en la vinería como negocio principal)
- Fondo de mármol oscuro con vetas doradas
- CTA secundario: link/botón a WhatsApp

### 4.2 Sobre nosotros
- Texto a escribir desde cero
- Angle: **cercanía de barrio** — emprendimiento nuevo, lugar donde ya conocés al dueño, calidez y confianza por sobre la solemnidad o el marketing aspiracional
- Sin historia larga de legado familiar ni tono de bodega premium

### 4.3 Catálogo
- Categorías de bebidas embotelladas que despliegan productos individuales al clickear
- Cada producto muestra: nombre, descripción corta, imagen (placeholder por ahora)
- Sin precios
- Sin función de compra
- Categorías iniciales (a completar con productos reales):
  - Vinos
  - Licores
  - Espumantes
  - Cervezas *(a confirmar)*
  - Otras bebidas *(a confirmar)*

### 4.4 Tragos delivery
- Sección separada del catálogo de botellas
- Presenta el servicio de delivery de tragos preparados
- Lista de tragos disponibles (nombres + descripción corta), sin precios
- CTA directo a WhatsApp para hacer el pedido
- Placeholders de imagen por ahora

### 4.5 Ubicación
- Dirección del local en texto (dirección real a confirmar, placeholder por ahora)
- Horarios de atención (a completar)
- Sin mapa embebido (Google Maps u otro)

### 4.6 Contacto
- Link/botón directo a WhatsApp (número a confirmar)
- Sin formulario de contacto
- Opcionalmente: redes sociales (Instagram, etc.) si las tienen

---

## 5. Pendientes para completar antes de lanzar

- [ ] Dirección real del local
- [ ] Número de WhatsApp
- [ ] Horarios de atención
- [ ] Tagline definitivo para el hero
- [ ] Texto final de "Sobre nosotros"
- [ ] Nombres y descripciones de productos del catálogo
- [ ] Nombres y descripciones de los tragos delivery
- [ ] Fotos propias del local y productos (para reemplazar placeholders)
- [ ] Redes sociales (Instagram, etc.)
- [ ] Dominio (si van a usar uno propio en vez del .vercel.app)

---

## 6. Fuera de scope (no entra en esta versión)

- E-commerce / carrito de compras
- Sistema de pagos online
- Panel de administración / CMS
- Blog o sección de noticias
- Sistema de reservas
- Mapa embebido

---

*Documento generado como base para el desarrollo. Sujeto a cambios según evolución del proyecto.*
