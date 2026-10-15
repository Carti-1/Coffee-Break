import coursePoster from '../../assets/curso-coffee-break.jpeg'

export default function CoursePromo({ onRegisterInterest }) {
  return (
    <section className="course-section" aria-labelledby="course-title">
      <div className="wrap course-layout">
        <div className="course-copy">
          <p className="eyebrow mono"><span className="dot" /> formação & café</p>
          <span className="mono course-kicker">para quem quer fazer acontecer</span>
          <h2 id="course-title">Um bom coffee break também se aprende.</h2>
          <p>Conheça os pacotes do curso e escolha por onde começar: do preparo do café à produção profissional de eventos.</p>
          <button className="btn course-button" onClick={onRegisterInterest}>Tenho interesse no curso ↗</button>
          <span className="course-note">Deixe seu contato e diga qual pacote chamou sua atenção.</span>
        </div>
        <figure className="course-poster"><img src={coursePoster} alt="Cartaz do Curso de Coffee Break com pacotes iniciante, avançado e profissional" loading="lazy" /><figcaption className="mono">curso de coffee break · clube de resenha</figcaption></figure>
      </div>
    </section>
  )
}
