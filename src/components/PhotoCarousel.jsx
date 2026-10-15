import { useEffect, useState } from 'react'
import membersPhoto from '../../assets/clube-membros.jpeg'
import gatheringPhoto from '../../assets/coffee-break-encontro.jpeg'

const slides = [
  {
    src: membersPhoto,
    alt: 'Integrantes do Clube de Coffee Break convidando novos estudantes a fazer parte',
    caption: 'Faça parte dessa história.',
  },
  {
    src: gatheringPhoto,
    alt: 'Estudantes reunidos em um encontro do Clube de Coffee Break, com café e comidas',
    caption: 'Pessoas incríveis, encontros especiais.',
  },
]

export default function PhotoCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [paused])

  function showSlide(index) {
    setActiveSlide((index + slides.length) % slides.length)
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') showSlide(activeSlide - 1)
    if (event.key === 'ArrowRight') showSlide(activeSlide + 1)
  }

  return (
    <section className="photo-section" aria-labelledby="photos-title">
      <div className="wrap">
        <div className="photo-heading">
          <p className="eyebrow mono"><span className="dot" /> a gente se encontra por aqui</p>
          <h2 id="photos-title">Café bom é café<br /><em>compartilhado.</em></h2>
        </div>
        <div
          className="photo-carousel"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fotos do Clube de Coffee Break"
          tabIndex="0"
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}
        >
          {slides.map((slide, index) => (
            <article className={`photo-slide${index === activeSlide ? ' is-active' : ''}`} key={slide.src} aria-hidden={index !== activeSlide}>
              <div className="photo-backdrop" style={{ backgroundImage: `url("${slide.src}")` }} />
              <img src={slide.src} alt={slide.alt} className="photo-image" draggable="false" />
              <div className="photo-caption"><span className="mono">clube de coffee break</span><p>{slide.caption}</p></div>
            </article>
          ))}
          <button className="carousel-arrow carousel-prev" type="button" aria-label="Foto anterior" onClick={() => showSlide(activeSlide - 1)}>←</button>
          <button className="carousel-arrow carousel-next" type="button" aria-label="Próxima foto" onClick={() => showSlide(activeSlide + 1)}>→</button>
          <div className="carousel-controls" aria-label="Escolher foto">
            {slides.map((slide, index) => <button key={slide.src} className={`carousel-dot${index === activeSlide ? ' is-active' : ''}`} type="button" aria-label={`Mostrar foto ${index + 1}`} aria-current={index === activeSlide ? 'true' : undefined} onClick={() => showSlide(index)} />)}
          </div>
          <span className="carousel-count mono">0{activeSlide + 1} / 0{slides.length}</span>
        </div>
      </div>
    </section>
  )
}
