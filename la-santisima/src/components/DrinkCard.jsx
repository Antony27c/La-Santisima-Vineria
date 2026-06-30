function DrinkCard({ name, description }) {
  return (
    <article className="drink-card">
      <svg className="drink-card__svg" viewBox="0 0 100 180" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10 L80 10 L72 150 Q70 160 60 160 L40 160 Q30 160 28 150 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="10" x2="50" y2="160" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
        <line x1="35" y1="40" x2="65" y2="40" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
        <line x1="35" y1="65" x2="65" y2="65" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
        <line x1="35" y1="90" x2="65" y2="90" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
        <path d="M25 160 Q25 170 35 172 L65 172 Q75 170 75 160" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="50" cy="30" r="2" fill="currentColor" opacity="0.3" />
      </svg>
      <div className="drink-card__body">
        <h3 className="drink-card__name">{name}</h3>
        <p className="drink-card__desc">{description}</p>
      </div>
    </article>
  )
}

export default DrinkCard
