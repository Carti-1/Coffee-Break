export const formConfigs = {
  evento: {
    title: 'Vamos tirar essa ideia do papel.',
    intro: 'Conta um pouco sobre o evento que você gostaria de realizar. A equipe entra em contato para alinhar os próximos passos.',
    button: 'Enviar proposta ↗',
    fields: [
      { label: 'Nome completo', name: 'nome', placeholder: 'Seu nome', required: true },
      { label: 'E-mail acadêmico', name: 'email', type: 'email', placeholder: 'voce@universidade.edu.br', required: true },
      { label: 'Nome do evento', name: 'evento', placeholder: 'Ex.: Clube do livro', required: true },
      { label: 'Data desejada', name: 'data', type: 'date', required: true },
      { label: 'Onde gostaria de realizar?', name: 'local', placeholder: 'Bloco, sala ou espaço', required: true },
      { label: 'Conte sua ideia', name: 'detalhes', type: 'textarea', placeholder: 'Público, formato, estrutura necessária…', required: true },
    ],
  },
  ideia: {
    title: 'Sua ideia tem lugar na mesa.',
    intro: 'Que tipo de coffee break faria seu dia melhor? Pode ser simples, diferente ou completamente inesperado.',
    button: 'Mandar essa ideia ↗',
    fields: [
      { label: 'Seu nome (opcional)', name: 'nome', placeholder: 'Como podemos te chamar?' },
      { label: 'E-mail (opcional)', name: 'email', type: 'email', placeholder: 'Para avisarmos se a ideia sair do papel' },
      { label: 'Nome da ideia', name: 'ideia', placeholder: 'Ex.: Café com jogos de tabuleiro', required: true },
      { label: 'Conta mais', name: 'detalhes', type: 'textarea', placeholder: 'O que teria nesse encontro?' },
    ],
  },
  seletivo: {
    title: 'Vem construir com a gente.',
    intro: 'Quer fazer parte do clube? Deixe seu contato e conte o que te anima. Avisaremos por e-mail quando abrir o próximo processo seletivo.',
    button: 'Quero me inscrever ↗',
    fields: [
      { label: 'Nome completo', name: 'nome', placeholder: 'Seu nome', required: true },
      { label: 'E-mail acadêmico', name: 'email', type: 'email', placeholder: 'voce@universidade.edu.br', required: true },
      { label: 'Curso e semestre', name: 'curso', placeholder: 'Ex.: Design, 3º semestre', required: true },
      { label: 'O que você gostaria de fazer no clube?', name: 'interesse', type: 'textarea', placeholder: 'Produção, comunicação, acolhimento…', required: true },
    ],
  },
  feedback: {
    title: 'A gente quer ouvir você.',
    intro: 'Seu feedback é parte do cuidado. Pode deixar seu nome em branco se preferir.',
    button: 'Enviar feedback ↗',
    fields: [
      { label: 'Seu nome (opcional)', name: 'nome', placeholder: 'Como podemos te chamar?' },
      { label: 'Sobre qual encontro?', name: 'evento', placeholder: 'Nome ou data do coffee break', required: true },
      { label: 'Como foi sua experiência?', name: 'nota', type: 'select', required: true, options: [['', 'Selecione uma opção'], ['otimo', 'Adorei!'], ['bom', 'Foi bom'], ['regular', 'Pode melhorar'], ['ruim', 'Não foi legal']] },
      { label: 'O que podemos melhorar?', name: 'detalhes', type: 'textarea', placeholder: 'Conta pra gente…', required: true },
    ],
  },
  duvida: {
    title: 'Pode perguntar.',
    intro: 'Escreve sua dúvida e a equipe do clube responde no e-mail que você informar.',
    button: 'Enviar pergunta ↗',
    fields: [
      { label: 'Seu nome', name: 'nome', placeholder: 'Seu nome', required: true },
      { label: 'Seu e-mail', name: 'email', type: 'email', placeholder: 'voce@universidade.edu.br', required: true },
      { label: 'Qual é a sua dúvida?', name: 'detalhes', type: 'textarea', placeholder: 'Escreva aqui…', required: true },
    ],
  },
  denuncia: {
    title: 'Vamos cuidar disso agora.',
    intro: 'Avise a equipe sobre alimento estragado ou impróprio. Descreva o ocorrido com o máximo de detalhe possível. Seu relato será tratado com cuidado.',
    button: 'Enviar denúncia ↗',
    fields: [
      { label: 'Seu nome (opcional)', name: 'nome', placeholder: 'Você pode manter o anonimato' },
      { label: 'Seu e-mail (opcional)', name: 'email', type: 'email', placeholder: 'Se quiser receber retorno' },
      { label: 'Qual evento e quando?', name: 'evento', placeholder: 'Nome do coffee break e data', required: true },
      { label: 'Qual alimento está impróprio?', name: 'alimento', placeholder: 'Ex.: leite, bolo, sanduíche', required: true },
      { label: 'Conte o que aconteceu', name: 'detalhes', type: 'textarea', placeholder: 'Aspecto, cheiro, horário em que percebeu…', required: true },
    ],
  },
  curso: {
    title: 'Conte pra gente o que te interessa.',
    intro: 'Deixe seu contato e escolha o pacote do Curso de Coffee Break que chamou sua atenção.',
    button: 'Enviar interesse ↗',
    fields: [
      { label: 'Nome completo', name: 'nome', placeholder: 'Seu nome', required: true },
      { label: 'E-mail', name: 'email', type: 'email', placeholder: 'voce@email.com', required: true },
      { label: 'Pacote de interesse', name: 'pacote', type: 'select', required: true, options: [['', 'Escolha um pacote'], ['iniciante', 'Iniciante'], ['avancado', 'Avançado'], ['profissional', 'Profissional'], ['todos', 'Quero conhecer todos']] },
      { label: 'O que você gostaria de aprender? (opcional)', name: 'detalhes', type: 'textarea', placeholder: 'Conte um pouco…' },
    ],
  },
}

export const formKickers = {
  denuncia: 'canal de segurança · relato confidencial',
}
