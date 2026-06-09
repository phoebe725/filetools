import { type Messages } from "./en";

const pt: Messages = {
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
          heading: "Análises e cookies",
          body: "Podemos usar análises agregadas e amigáveis à privacidade para entender quais ferramentas são populares. Não vendemos dados pessoais. Se publicidade for adicionada no futuro, esta política será atualizada para descrevê-la com clareza.",
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
  },
};

export default pt;
