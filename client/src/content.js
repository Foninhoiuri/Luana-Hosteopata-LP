export const WHATSAPP_NUMBER = '5519990148135';
export const WHATSAPP_DISPLAY = '(19) 99014-8135';

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const MESSAGES = {
  geral: 'Olá, Luana! Vim pelo site e gostaria de agendar uma consulta.',
  mulher: 'Olá, Luana! Vim pelo site e gostaria de agendar meu momento de cuidado.',
  bebe: 'Olá, Luana! Vim pelo site e gostaria de agendar uma sessão para o meu bebê.',
};

/**
 * Vídeo vertical do hero (formato 9:16).
 * Coloque o arquivo em client/public/video/hero.mp4 — enquanto ele não existir,
 * o slot mostra a foto da Luana no lugar.
 */
export const HERO_VIDEO = {
  src: '/video/hero.mp4',
  poster: '/images/hero.jpg',
};

/** Seção do vídeo horizontal sobre dores na gestação. */
export const PREGNANCY = {
  video: '/video/gestacao.mp4',
  poster: '/images/gestacao-capa.jpg',
  points: [
    {
      title: 'Sintomas comuns, mas não normais',
      text: 'Dores nas costas, no quadril e no “pé da barriga” acontecem com frequência na gravidez — mas não são algo que você precisa simplesmente suportar.',
    },
    {
      title: 'De onde vem o desconforto',
      text: 'O crescimento do bebê comprime outras estruturas e órgãos. Sem elasticidade para acompanhar essa pressão, o corpo gera tensões musculares e articulares que se manifestam como dor.',
    },
    {
      title: 'Como a osteopatia ajuda',
      text: 'Com técnicas manuais, é possível liberar essas tensões e permitir que o corpo se adapte melhor às mudanças — para uma gestação com mais conforto e sem dor.',
    },
  ],
};

export const NAV = [
  { href: '#para-quem', label: 'Para quem' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#gestacao', label: 'Gestação' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

export const STATS = [
  { value: '18', label: 'anos como fisioterapeuta' },
  { value: '10', label: 'anos como osteopata' },
  { value: '+1000', label: 'famílias atendidas' },
];

export const AUDIENCES = [
  {
    id: 'mulheres',
    title: 'Para mulheres',
    text: 'Gestantes e mulheres no pós-parto muitas vezes enfrentam dores que parecem fazer parte da fase — mas não precisam ser vividas em silêncio.',
    tags: ['Dores nas costas', 'Dor no quadril', 'Dores de cabeça', 'Cólicas menstruais', 'Dificuldades na amamentação'],
    cta: { label: 'Agendar para mim', message: MESSAGES.mulher },
  },
  {
    id: 'bebes',
    title: 'Para bebês',
    text: 'Desconfortos do bebê afetam não só o pequeno, mas toda a família. Com toques suaves, é possível trazer mais tranquilidade para os primeiros meses.',
    tags: ['Refluxo', 'Cólicas', 'Torcicolo', 'Assimetria craniana', 'Dificuldades na amamentação'],
    cta: { label: 'Agendar para meu bebê', message: MESSAGES.bebe },
  },
];

export const BENEFITS = [
  {
    title: 'Sem medicamentos',
    text: 'Alívio natural, sem agulhas ou aparelhos — apenas técnicas manuais.',
  },
  {
    title: 'Técnicas seguras',
    text: 'Métodos manuais suaves, pensados especialmente para gestantes e bebês.',
  },
  {
    title: 'Resultados perceptíveis',
    text: 'Muitas pacientes sentem melhora já nas primeiras sessões.',
  },
  {
    title: 'Cuidado em cada detalhe',
    text: 'Cada sessão é pensada para você se sentir ouvida, cuidada e respeitada.',
  },
];

export const STEPS = [
  {
    title: 'Primeiro contato',
    text: 'Você me chama pelo WhatsApp, conta um pouco do que está sentindo e escolhemos o melhor horário.',
  },
  {
    title: 'Escuta e avaliação',
    text: 'Começamos com uma conversa tranquila sobre a sua história e uma avaliação cuidadosa do corpo.',
  },
  {
    title: 'Sessão de cuidado',
    text: 'Técnicas manuais suaves e orientações para que o bem-estar continue também em casa.',
  },
];

export const FAQ = [
  {
    q: 'A osteopatia é segura para bebês?',
    a: 'Sim. A osteopatia pediátrica utiliza técnicas extremamente suaves e seguras, desenvolvidas especificamente para bebês e crianças.',
  },
  {
    q: 'Quantas sessões são necessárias?',
    a: 'O número de sessões varia conforme cada caso, mas muitas pacientes sentem melhora já na primeira sessão.',
  },
  {
    q: 'Posso fazer durante a gestação?',
    a: 'Com certeza! A osteopatia é muito benéfica durante a gravidez, ajudando a aliviar desconfortos e a preparar o corpo para o parto.',
  },
  {
    q: 'Preciso de encaminhamento médico?',
    a: 'Não é necessário encaminhamento médico, mas sempre recomendamos comunicar ao seu médico sobre o tratamento osteopático.',
  },
];
