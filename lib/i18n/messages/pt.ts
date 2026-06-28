import type { Messages } from "./en";
import type { DeepPartial } from "./types";

const pt: DeepPartial<Messages> = {
  nav: {
    pdf: "PDF",
    image: "Imagem",
    convert: "Converter",
    language: "Idioma",
  },
  footer: {
    tagline: "Ferramentas de arquivo privadas, direto no navegador",
    home: "Início",
    privacy: "Privacidade",
    terms: "Termos",
    contact: "Contato",
    about: "Sobre",
    support: "Pague-me um café",
    recommended: "Ferramentas recomendadas",
    pcloud: "pCloud — armazenamento na nuvem",
    amazon: "Armazenamento e acessórios na Amazon",
  },
  home: {
    title: "Ferramentas de arquivo gratuitas e privadas",
    subtitle:
      "Converta, comprima e combine PDFs e imagens — direto no seu navegador. Nada é enviado para servidores. Seus arquivos nunca saem do seu dispositivo.",
    badge: "🔒 100% no navegador · Sem cadastro · Sem armazenamento de arquivos",
    toolsCount: "{count} ferramentas e contando.",
  },
  categories: {
    pdf: "Ferramentas de PDF",
    image: "Ferramentas de Imagem",
    convert: "Converter",
  },
  tool: {
    trust: "100% no seu navegador · arquivos nunca enviados · sem cadastro",
    home: "Início",
    howItWorks: "Como funciona",
    faq: "Perguntas frequentes",
    related: "Ferramentas relacionadas",
    privateHeading: "100% privado",
    privateBody:
      "Tudo roda no seu navegador usando o processamento do próprio dispositivo. Sem uploads, sem armazenamento, sem cadastro.",
  },
  privacyNote:
    "Seus arquivos são processados no seu navegador e nunca saem do seu dispositivo.",
  widgets: {
    dropTitleMulti: "Arraste e solte os arquivos aqui",
    dropTitleSingle: "Arraste e solte um arquivo aqui",
    browse: "ou clique para procurar",
    remove: "Remover",
    moveUp: "Mover para cima",
    moveDown: "Mover para baixo",
    working: "Processando…",
    loadingTool: "Carregando ferramenta…",
    ready: "Seu arquivo está pronto",
    download: "Baixar",
    startOver: "Recomeçar",
    was: "estava",
    smaller: "menor",
    larger: "maior",
    dismiss: "Dispensar",
    bestEffort: "Conversão com o melhor esforço:",
    comingSoonBanner: "Esta ferramenta está em desenvolvimento e ainda não está disponível.",
    betaConversion: "🚧 Beta — esta conversão chega em breve.",
    emailDemo: "Ainda estamos desenvolvendo esta. Deixe seu e-mail e avisamos no momento em que ela estiver pronta.",
    emailPlaceholder: "you@example.com",
    notifyMe: "Avise-me",
    notifyThanks: "Obrigado! Entraremos em contato. (Isto é uma demonstração de interface e não é armazenado.)",
  },
  affiliate: {
    disclosure: "Alguns links são links de parceiros — se você comprar por meio deles, podemos ganhar uma pequena comissão, sem custo adicional para você.",
    ctaHeading: "Precisa de uma conversão perfeita sempre?",
    ctaBody: "Esta ferramenta no navegador é gratuita e faz o melhor esforço. Para resultados perfeitos em arquivos complexos ou grandes, um aplicativo de desktop dedicado pode fazer mais.",
    ctaButton: "Ver ferramenta recomendada",
    pcloud: {
      heading: "Mantenha seus arquivos seguros",
      body: "Quer guardar seus arquivos convertidos? Tenha armazenamento na nuvem vitalício com o pCloud — pague uma vez e use para sempre.",
      button: "Obter pCloud Lifetime",
    },
  },
  consent: {
    message: "Usamos cookies para análises e, no futuro, para publicidade. Você pode aceitar ou recusar os cookies não essenciais.",
    accept: "Aceitar",
    reject: "Recusar",
    learnMore: "Política de privacidade",
  },
  suggest: {
    prompt: "Ver este site em {lang}?",
    accept: "Mudar para {lang}",
    dismiss: "Não, obrigado",
  },
  guides: {
    nav: "Guias",
    indexTitle: "Guias",
    indexSubtitle:
      "Guias práticos e diretos para trabalhar com PDFs e imagens, cada um usando uma ferramenta gratuita que roda inteiramente no seu navegador.",
    readGuide: "Ler guia",
    relatedHeading: "Ferramentas usadas neste guia",
    backToGuides: "Todos os guias",
    faqHeading: "Perguntas frequentes",
  },
  notFound: {
    title: "Página não encontrada",
    body: "Essa ferramenta ou página não existe (ainda).",
    cta: "Voltar para todas as ferramentas",
  },
  legal: {
    privacy: {
      title: "Política de Privacidade",
      updated: "Última atualização: junho de 2026",
      sections: [
        {
          heading: "Resumindo",
          body: "Seus arquivos são processados no seu navegador e nunca saem do seu dispositivo. A gente não faz upload deles, não armazena e não consegue vê-los.",
        },
        {
          heading: "Como funciona o processamento de arquivos",
          body: "Todas as ferramentas do FileTools rodam inteiramente como JavaScript no lado do cliente. Quando você seleciona um arquivo, ele é lido na memória do seu navegador, processado no seu próprio dispositivo e devolvido para você como download. Nenhum dado de arquivo é transmitido para um servidor.",
        },
        {
          heading: "Cookies",
          body: "Usamos cookies para duas coisas: lembrar suas preferências (como o idioma escolhido) e — somente depois que você aceitar nosso aviso de cookies — análises e publicidade. Você pode recusar os cookies não essenciais e todas as ferramentas continuam funcionando plenamente.",
        },
        {
          heading: "Publicidade",
          body: "Exibimos anúncios do Google AdSense para manter o FileTools gratuito. O Google e seus parceiros podem usar cookies para exibir anúncios com base nas suas visitas anteriores a este e a outros sites. Os anúncios só carregam depois que você aceita os cookies. Você pode controlar a publicidade personalizada nas Configurações de anúncios do Google (adssettings.google.com).",
        },
        {
          heading: "Links de afiliados",
          body: "Algumas páginas contêm links de afiliados para produtos de terceiros, como softwares de desktop. Se você clicar em um deles e fizer uma compra, podemos receber uma comissão, sem custo adicional para você. Esses links são informados na página e nunca afetam nossas ferramentas gratuitas no navegador.",
        },
        {
          heading: "Análises",
          body: "Podemos usar análises agregadas e amigáveis à privacidade para entender quais ferramentas são populares. Isso nunca inclui o conteúdo dos seus arquivos, que nunca são enviados para nós. Não vendemos seus dados pessoais.",
        },
        {
          heading: "Suas escolhas",
          body: "Você pode aceitar ou recusar os cookies não essenciais a qualquer momento por meio do aviso de cookies, e usar as configurações do seu navegador ou as Configurações de anúncios do Google para limitar a personalização dos anúncios.",
        },
        {
          heading: "Contato",
          body: "Dúvidas sobre privacidade? Veja nossa página de contato.",
        },
      ],
    },
    terms: {
      title: "Termos de Serviço",
      updated: "Última atualização: junho de 2026",
      sections: [
        {
          heading: "Aceitação",
          body: "Ao usar o FileTools, você concorda com estes termos. Se você não concorda, por favor não use o site.",
        },
        {
          heading: "O serviço",
          body: "O FileTools oferece utilitários gratuitos e baseados no navegador para trabalhar com arquivos PDF e de imagem. Todo o processamento acontece no seu dispositivo. O serviço é fornecido \"como está\", sem garantias de qualquer tipo.",
        },
        {
          heading: "Sua responsabilidade",
          body: "Você é responsável pelos arquivos que processa e por manter seus próprios backups. Como o processamento acontece localmente, não somos responsáveis por qualquer perda de dados, e você deve sempre guardar uma cópia dos seus arquivos originais.",
        },
        {
          heading: "Uso aceitável",
          body: "Não use o FileTools para processar conteúdo sobre o qual você não tem direitos, ou de qualquer forma que infrinja a lei.",
        },
        {
          heading: "Limitação de responsabilidade",
          body: "Na máxima extensão permitida por lei, o FileTools e seus autores não se responsabilizam por quaisquer danos decorrentes do uso, ou da impossibilidade de uso, do serviço.",
        },
        {
          heading: "Alterações",
          body: "Podemos atualizar estes termos de tempos em tempos. O uso contínuo do site significa que você aceita os termos atuais.",
        },
      ],
    },
    contact: {
      title: "Contato",
      intro:
        "Encontrou um bug, tem uma sugestão de recurso ou quer uma nova ferramenta? Vamos adorar ouvir você.",
      emailHeading: "E-mail",
      emailBody: "Fale com a gente em hello@filetools.example.com.",
      filesHeading: "Uma observação sobre arquivos",
      filesBody:
        "Por favor, não nos envie seus arquivos por e-mail. Todas as ferramentas rodam inteiramente no seu navegador, então não conseguimos acessá-los e não vamos precisar deles para ajudar.",
    },
    about: {
      title: "Sobre o FileTools",
      intro:
        "O FileTools é uma coleção gratuita de ferramentas que priorizam a privacidade para trabalhar com PDFs e imagens — tudo rodando inteiramente no seu navegador.",
      sections: [
        {
          heading: "Nossa missão",
          body: "Queremos que as tarefas cotidianas com arquivos — combinar PDFs, converter imagens, comprimir arquivos — sejam rápidas, gratuitas e privadas, sem obrigar você a enviar documentos sensíveis para o servidor de outra pessoa.",
        },
        {
          heading: "Por que é diferente",
          body: "Cada ferramenta roda como código no lado do cliente, no seu próprio dispositivo. Seus arquivos nunca saem do seu navegador, não há cadastro e nada é armazenado. O que você faz aqui fica no seu computador.",
        },
        {
          heading: "Como mantemos tudo gratuito",
          body: "O FileTools é financiado por anúncios discretos e por links de afiliados ocasionais para ferramentas que realmente consideramos úteis. Isso nos permite manter todas as ferramentas gratuitas para todos. Veja nossa Política de Privacidade para mais detalhes.",
        },
        {
          heading: "Fale com a gente",
          body: "Encontrou um bug, tem uma ideia ou uma ferramenta que gostaria que existisse? Visite nossa página de Contato — vamos adorar ouvir você.",
        },
      ],
    },
  },
};

export default pt;
