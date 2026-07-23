import { useEffect, useRef } from 'react'
import glassSvgUrl from '../assets/Copa_La_Santisima (Finish).svg'

/**
 * Inyecta el SVG de la copa inline para poder animar sus paths con CSS
 * (stroke-draw). El asset es el mismo que usa el navbar/hero, así que
 * el fetch resuelve desde cache. pathLength="1" normaliza el largo de
 * cada path para animar stroke-dashoffset sin conocer medidas reales.
 */
export default function AboutGlass({ className = '' }) {
  const hostRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    fetch(glassSvgUrl)
      .then((res) => res.text())
      .then((markup) => {
        if (cancelled || !hostRef.current) return
        hostRef.current.innerHTML = markup

        // El primer path trae copa + aureola como subpaths. Se splitea en dos
        // paths para animarlos por separado: el primer subpath (la elipse
        // superior) es la aureola, el resto es la copa.
        const mainPath = hostRef.current.querySelector('path')
        const subpaths = mainPath.getAttribute('d').split(/(?=[Mm])/).filter((s) => s.trim())

        const haloPath = mainPath.cloneNode(false)
        haloPath.setAttribute('d', subpaths[0])
        haloPath.classList.add('about__logo-halo')

        const cupPath = mainPath.cloneNode(false)
        cupPath.setAttribute('d', subpaths.slice(1).join(''))
        cupPath.classList.add('about__logo-cup')
        // pathLength="1" normaliza el largo para animar stroke-dashoffset
        cupPath.setAttribute('pathLength', '1')

        mainPath.replaceWith(haloPath, cupPath)

        // Los paths restantes (detalles chicos de la zona superior) también
        // forman parte de la aureola
        hostRef.current
          .querySelectorAll('path:not(.about__logo-cup):not(.about__logo-halo)')
          .forEach((path) => path.classList.add('about__logo-halo'))
      })
      .catch(() => {
        /* elemento decorativo: si falla la carga, la sección queda sin el gráfico */
      })

    return () => { cancelled = true }
  }, [])

  return <div ref={hostRef} className={className} aria-hidden="true" />
}
