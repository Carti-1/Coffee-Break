const events = [
  { number: '01 · em breve', title: 'Café de boas-vindas', description: 'Um primeiro gole, um monte de gente nova. Chega mais!', tag: 'Aberto a todo mundo', featured: true },
  { number: '02 · ideia do clube', title: 'Troca de livros & cafés', description: 'Traga aquele livro parado na estante e saia com uma nova história.', tag: 'Em planejamento' },
  { number: '03 · ideia do clube', title: 'Intervalo sem pressa', description: 'Um encontro leve pra conversar, jogar e recarregar as ideias.', tag: 'Em planejamento' },
]

function EventCard({ event }) {
  return <article className={`event-card${event.featured ? ' featured' : ''}`}><div><span className="mono">{event.number}</span><h3>{event.title}</h3><p>{event.description}</p></div><div className="event-foot"><span className="tag">{event.tag}</span>{event.featured ? <a className="arrow" href="#participar" aria-label="Participar">↗</a> : <span className="arrow">✳</span>}</div></article>
}

export default function Agenda({ ideas, onSuggest }) {
  return (
    <>
      <section className="wrap section" id="agenda"><div className="section-head"><div><p className="eyebrow mono"><span className="dot" /> vem aí</p><h2>O próximo bom<br />encontro começa aqui.</h2></div><p>A agenda é feita junto com você. Tem uma ideia? Manda pra gente — ela pode virar nosso próximo coffee break.</p></div><div className="event-grid">{events.map((event) => <EventCard key={event.title} event={event} />)}{ideas.map((idea, index) => <EventCard key={`${idea.title}-${index}`} event={{ number: 'ideia da comunidade', title: idea.title, description: idea.details || 'Uma ideia enviada pela comunidade.', tag: 'Ideia recebida' }} />)}</div></section>
      <section className="idea-band"><div className="wrap idea-inner"><div><span className="mono">a próxima ideia pode ser sua</span><h2>Qual coffee break você queria ver?</h2><p>Do café com pão de queijo à oficina que você imaginou no banho.</p></div><button className="btn" onClick={onSuggest}>Sugerir um coffee break ↗</button><span className="idea-stamp">manda ver!</span></div></section>
    </>
  )
}
