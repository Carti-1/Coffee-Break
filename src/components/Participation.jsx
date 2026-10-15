const cards = [
  { icon: '✳', title: 'Fazer parte', description: 'Inscreva-se no processo seletivo e venha construir encontros com a gente.', action: 'Quero entrar no clube ↗', type: 'seletivo' },
  { icon: '☕', title: 'Formalizar evento', description: 'Já tem uma atividade em mente? Conte os detalhes e vamos conversar.', action: 'Propor um evento ↗', type: 'evento' },
  { icon: '♡', title: 'Deixar feedback', description: 'Conta como foi. Seu retorno ajuda a deixar cada pausa mais gostosa.', action: 'Enviar feedback ↗', type: 'feedback' },
  { icon: '?', title: 'Tirar uma dúvida', description: 'Estamos por aqui. Manda sua pergunta que a gente responde.', action: 'Falar com o clube ↗', type: 'duvida' },
  { icon: '⚠', title: 'Alimento impróprio?', description: 'Encontrou comida estragada ou algo fora do esperado? Avise nossa equipe para agirmos rápido.', action: 'Fazer uma denúncia ↗', type: 'denuncia', alert: true },
]

export default function Participation({ onOpenForm }) {
  return <section className="forms-section" id="participar"><div className="wrap"><div className="section-head"><div><p className="eyebrow mono"><span className="dot" /> sua vez</p><h2>Tem lugar pra<br />você nessa mesa.</h2></div><p>Quer construir o clube com a gente? Tem uma ideia, uma dúvida ou algo importante pra contar? Escolha por onde começar.</p></div><div className="form-grid">{cards.map((card) => <article className={`form-card${card.alert ? ' alert' : ''}`} key={card.type}><span className="form-icon">{card.icon}</span><h3>{card.title}</h3><p>{card.description}</p><button onClick={() => onOpenForm(card.type)}>{card.action}</button></article>)}</div></div></section>
}
