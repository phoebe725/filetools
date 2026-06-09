import type { ToolTranslations } from "../tool-translations";

const pt: ToolTranslations = {
  "image-converter": {
    name: "Conversor de Imagens",
    tagline: "Converta entre PNG, JPG e WebP.",
    title: "Conversor de Imagens — PNG para JPG, JPG para PNG, WebP (Grátis, no Navegador)",
    description:
      "Converta imagens entre PNG, JPG e WebP direto no seu navegador. Grátis, rápido e privado — seus arquivos nunca saem do seu dispositivo.",
    h1: "Conversor de Imagens",
    intro:
      "Converta imagens PNG, JPG e WebP em qualquer direção, na hora e de graça. Tudo roda localmente no seu navegador, então suas imagens nunca são enviadas para servidores.",
    howItWorks: [
      "Arraste e solte sua imagem, ou clique para escolher um arquivo.",
      "Escolha o formato de saída (PNG, JPG ou WebP).",
      "Clique em Converter — o processamento acontece inteiramente no seu dispositivo.",
      "Baixe sua imagem convertida.",
    ],
    faqs: [
      {
        q: "Minhas imagens são enviadas para um servidor?",
        a: "Não. A conversão acontece localmente no seu navegador usando a Canvas API. Suas imagens nunca saem do seu dispositivo.",
      },
      {
        q: "Por que a opção AVIF às vezes fica desativada?",
        a: "A codificação AVIF depende do seu navegador. Detectamos o suporte automaticamente e desativamos os formatos que seu navegador não consegue gerar.",
      },
      {
        q: "Converter para JPG vai perder a transparência?",
        a: "Sim. O JPG não tem transparência, então as áreas transparentes são preenchidas com branco. Use PNG ou WebP para manter a transparência.",
      },
    ],
  },
  "resize-image": {
    name: "Redimensionar Imagem",
    tagline: "Altere as dimensões da imagem por largura ou altura.",
    title: "Redimensionar Imagem — Alterar Largura e Altura Online (Grátis, Privado)",
    description:
      "Redimensione imagens por largura e altura no seu navegador, com a opção de manter a proporção. Grátis e privado — os arquivos nunca saem do seu dispositivo.",
    h1: "Redimensionar Imagem",
    intro:
      "Redimensione qualquer imagem PNG, JPG ou WebP definindo uma nova largura e altura. Mantenha a proporção travada ou defina dimensões exatas. Roda inteiramente no seu navegador.",
    howItWorks: [
      "Envie uma imagem arrastando-a ou clicando para procurar.",
      "Informe a largura e/ou altura desejada.",
      "Ative \"Manter proporção\" para evitar distorção.",
      "Clique em Redimensionar e baixe o resultado.",
    ],
    faqs: [
      {
        q: "Redimensionar reduz a qualidade?",
        a: "Diminuir uma imagem geralmente fica limpo. Ampliar além das dimensões originais pode ficar borrado, já que os pixels são interpolados.",
      },
      {
        q: "Posso manter a proporção?",
        a: "Sim. Ative \"Manter proporção\" e a outra dimensão é calculada automaticamente enquanto você digita.",
      },
    ],
  },
  "compress-image": {
    name: "Comprimir Imagem",
    tagline: "Reduza o tamanho de JPG/WebP com um controle de qualidade.",
    title: "Comprimir Imagem — Reduzir Tamanho de JPG e WebP (Grátis, no Navegador)",
    description:
      "Comprima imagens JPG e WebP com um controle de qualidade e veja o tamanho do arquivo antes/depois. Grátis, privado e inteiramente no navegador.",
    h1: "Comprimir Imagem",
    intro:
      "Reduza o tamanho do arquivo de imagem com um simples controle de qualidade e compare na hora os tamanhos antes e depois. Ótimo para sites mais rápidos e anexos de e-mail menores.",
    howItWorks: [
      "Envie uma imagem JPG, PNG ou WebP.",
      "Arraste o controle de qualidade para equilibrar tamanho e qualidade.",
      "Acompanhe a atualização do tamanho de saída estimado.",
      "Baixe a imagem comprimida.",
    ],
    faqs: [
      {
        q: "Quais formatos comprimem melhor?",
        a: "JPG e WebP têm controle de qualidade com perdas. O PNG é sem perdas, então é recodificado como JPG ou WebP para uma economia significativa.",
      },
      {
        q: "Existe um limite de tamanho de arquivo?",
        a: "Não há limite fixo de servidor porque nada é enviado, mas imagens muito grandes podem ficar lentas em dispositivos com pouca memória.",
      },
    ],
  },
  "images-to-pdf": {
    name: "Imagens para PDF",
    tagline: "Combine imagens JPG/PNG/WebP em um único PDF.",
    title: "Imagens para PDF — Converter JPG e PNG em PDF Online (Grátis)",
    description:
      "Combine várias imagens JPG, PNG ou WebP em um único PDF no seu navegador. Reordene as páginas antes de exportar. Grátis e privado.",
    h1: "Imagens para PDF",
    intro:
      "Transforme um conjunto de imagens em um único PDF fácil de compartilhar. Adicione quantos arquivos JPG, PNG ou WebP quiser, arraste para reordená-los e exporte um documento limpo.",
    howItWorks: [
      "Envie uma ou mais imagens.",
      "Arraste para reordená-las na ordem de página que quiser.",
      "Clique em Criar PDF — cada imagem vira uma página.",
      "Baixe o PDF combinado.",
    ],
    faqs: [
      {
        q: "Posso controlar a ordem das páginas?",
        a: "Sim. Use os controles de subir/descer em cada imagem para definir a ordem exata antes de exportar.",
      },
      {
        q: "Qual tamanho de página é usado?",
        a: "Cada página é dimensionada conforme a sua imagem, então não há margens estranhas nem cortes.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC para JPG",
    tagline: "Converta fotos HEIC do iPhone para JPG.",
    title: "Conversor HEIC para JPG — Fotos do iPhone para JPG (no Navegador)",
    description:
      "Converta fotos HEIC do seu iPhone para JPG no navegador. Conversão na medida do possível e totalmente privada — os arquivos nunca saem do seu dispositivo.",
    h1: "Conversor HEIC para JPG",
    intro:
      "Converta fotos HEIC da Apple em imagens JPG com suporte universal. A decodificação de HEIC no navegador é feita na medida do possível e depende do seu navegador e dispositivo.",
    howItWorks: [
      "Envie uma ou mais fotos .heic.",
      "Tentamos decodificá-las no seu navegador.",
      "Converta para JPG.",
      "Baixe os resultados.",
    ],
    faqs: [
      {
        q: "Por que a conversão de HEIC pode falhar?",
        a: "O HEIC não é decodificável nativamente em todos os navegadores. Usamos uma biblioteca que faz o melhor possível, mas alguns arquivos podem não converter.",
      },
    ],
  },
  "merge-pdf": {
    name: "Juntar PDF",
    tagline: "Combine vários PDFs em um só.",
    title: "Juntar PDF — Combinar Arquivos PDF Online (Grátis, Privado)",
    description:
      "Junte vários arquivos PDF em um único documento no seu navegador. Reordene os arquivos antes de combinar. Grátis, rápido e privado.",
    h1: "Juntar PDF",
    intro:
      "Combine vários PDFs em um único documento. Adicione seus arquivos, arraste-os para a ordem que quiser e exporte um PDF unificado — tudo localmente no seu navegador.",
    howItWorks: [
      "Envie dois ou mais arquivos PDF.",
      "Reordene-os na sequência que quiser.",
      "Clique em Juntar PDF.",
      "Baixe seu documento combinado.",
    ],
    faqs: [
      {
        q: "Existe um limite de quantos PDFs posso juntar?",
        a: "Não há limite de servidor. Os limites práticos dependem da memória do seu dispositivo e do tamanho total dos arquivos.",
      },
      {
        q: "Meus PDFs são enviados para servidores?",
        a: "Não. A junção é feita localmente com a pdf-lib. Seus documentos nunca saem do seu dispositivo.",
      },
    ],
  },
  "split-pdf": {
    name: "Dividir PDF",
    tagline: "Extraia intervalos de páginas para um novo PDF.",
    title: "Dividir PDF — Extrair Páginas e Intervalos de Páginas Online (Grátis)",
    description:
      "Divida um PDF selecionando intervalos de páginas e exporte-os como um novo documento. Roda inteiramente no seu navegador — privado e grátis.",
    h1: "Dividir PDF",
    intro:
      "Extraia páginas ou intervalos específicos de um PDF para um novo arquivo. Informe intervalos como 1-3, 5, 8-10 e exporte exatamente as páginas que você precisa.",
    howItWorks: [
      "Envie um único PDF.",
      "Informe os intervalos de páginas a manter (ex.: 1-3, 5, 8-10).",
      "Clique em Dividir PDF.",
      "Baixe o novo documento só com essas páginas.",
    ],
    faqs: [
      {
        q: "Qual formato de intervalo devo usar?",
        a: "Use vírgulas e traços, como 1-3, 5, 8-10. As páginas são exportadas na ordem em que você as listar.",
      },
    ],
  },
  "rotate-pdf": {
    name: "Girar PDF",
    tagline: "Gire páginas selecionadas ou o PDF inteiro.",
    title: "Girar PDF — Girar Páginas 90/180/270° Online (Grátis)",
    description:
      "Gire todas as páginas ou páginas específicas de um PDF em 90, 180 ou 270 graus. Rotação de PDF grátis, privada e no navegador.",
    h1: "Girar PDF",
    intro:
      "Corrija páginas de lado ou de cabeça para baixo. Gire o PDF inteiro ou apenas as páginas que você escolher e exporte o arquivo corrigido.",
    howItWorks: [
      "Envie um único PDF.",
      "Escolha o ângulo de rotação e quais páginas girar.",
      "Clique em Girar PDF.",
      "Baixe o documento girado.",
    ],
    faqs: [
      {
        q: "Posso girar apenas algumas páginas?",
        a: "Sim. Informe números de página ou intervalos específicos, ou deixe em branco para girar todas as páginas.",
      },
    ],
  },
  "pdf-to-images": {
    name: "PDF para Imagens",
    tagline: "Exporte cada página do PDF como PNG.",
    title: "PDF para Imagens — Converter Páginas de PDF em PNG (no Navegador)",
    description:
      "Converta cada página de um PDF em uma imagem PNG, direto no seu navegador. Privado e grátis.",
    h1: "PDF para Imagens",
    intro:
      "Renderize cada página de um PDF como uma imagem que você pode baixar. Útil para miniaturas, prévias ou para colar páginas em outros aplicativos.",
    howItWorks: [
      "Envie um único PDF.",
      "Renderizamos cada página no seu navegador.",
      "Exporte as páginas como imagens PNG.",
      "Baixe os resultados.",
    ],
    faqs: [
      {
        q: "Meus arquivos são enviados para servidores?",
        a: "Não. A renderização usa a pdf.js localmente no seu navegador.",
      },
    ],
  },
  "organize-pdf": {
    name: "Organizar PDF",
    tagline: "Apague e reordene páginas do PDF.",
    title: "Organizar PDF — Apagar e Reordenar Páginas Online (no Navegador)",
    description:
      "Apague páginas indesejadas e reordene o restante de um PDF no seu navegador. Privado e grátis.",
    h1: "Organizar Páginas do PDF",
    intro:
      "Limpe um PDF removendo as páginas que você não precisa e arrastando o restante para a ordem certa.",
    howItWorks: [
      "Envie um único PDF.",
      "Remova as páginas que você não quer.",
      "Reordene as páginas restantes.",
      "Exporte o PDF organizado.",
    ],
    faqs: [
      {
        q: "O arquivo original é alterado?",
        a: "Não. Um novo PDF é gerado; seu arquivo original permanece intocado.",
      },
    ],
  },
  "add-page-numbers": {
    name: "Adicionar Números de Página",
    tagline: "Carimbe números de página em um PDF.",
    title: "Adicionar Números de Página ao PDF — Online e Privado (no Navegador)",
    description:
      "Adicione números de página a um documento PDF no seu navegador. Escolha a posição e o formato. Privado e grátis.",
    h1: "Adicionar Números de Página ao PDF",
    intro:
      "Carimbe números de página limpos e consistentes em todas as páginas do seu PDF sem nenhum upload.",
    howItWorks: [
      "Envie um único PDF.",
      "Escolha a posição e o número inicial.",
      "Aplique os números de página.",
      "Baixe o PDF numerado.",
    ],
    faqs: [
      {
        q: "Posso escolher onde os números aparecem?",
        a: "Sim — você vai poder escolher um canto ou o centro do rodapé.",
      },
    ],
  },
  "compress-pdf": {
    name: "Comprimir PDF",
    tagline: "Reduza o tamanho do arquivo PDF.",
    title: "Comprimir PDF — Reduzir Tamanho de Arquivo PDF Online (Grátis, no Navegador)",
    description:
      "Comprima arquivos PDF para reduzir o tamanho, direto no seu navegador. Ideal para PDFs digitalizados ou com muitas imagens. Grátis e privado.",
    h1: "Comprimir PDF",
    intro:
      "Reduza o tamanho de arquivos PDF grandes para compartilhar e enviar por e-mail com mais facilidade. Isso funciona rasterizando as páginas, então é mais eficaz em documentos digitalizados ou com muitas imagens — e roda inteiramente no seu navegador.",
    howItWorks: [
      "Envie um PDF.",
      "Escolha um nível de compressão (forte, equilibrado ou leve).",
      "Clique em Comprimir — as páginas são re-renderizadas e salvas novamente localmente.",
      "Baixe o PDF menor e compare o tamanho antes/depois.",
    ],
    faqs: [
      {
        q: "O texto ainda vai ser selecionável?",
        a: "Não. A compressão rasteriza cada página (o texto vira parte da imagem), por isso ela reduz tão bem os PDFs digitalizados, mas não é ideal para documentos só de texto.",
      },
      {
        q: "Por que meu PDF não ficou menor?",
        a: "PDFs só de texto já são compactos. Esta ferramenta traz a maior economia em digitalizações e PDFs com muitas fotos.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF para Word",
    tagline: "Extraia o texto do PDF para um documento Word editável.",
    title: "PDF para Word — Converter PDF em DOCX Editável (Grátis, no Navegador)",
    description:
      "Extraia o texto de um PDF para um documento Word (.docx) editável, no seu navegador. Na medida do possível, grátis e privado.",
    h1: "PDF para Word",
    intro:
      "Extraia o texto de um PDF para um documento Word editável. Essa é uma conversão na medida do possível — o texto vem para que você possa editá-lo, mas colunas, imagens e o layout exato não são preservados. Roda inteiramente no seu navegador.",
    howItWorks: [
      "Envie um PDF.",
      "Clique em Converter — o texto é extraído localmente.",
      "Um .docx é criado no seu navegador.",
      "Baixe e edite no Word, Google Docs ou Pages.",
    ],
    faqs: [
      {
        q: "Vai ficar exatamente igual ao meu PDF?",
        a: "Não. Isso extrai o texto para um documento editável; layout complexo, colunas e imagens não são reproduzidos. É ideal quando você precisa principalmente das palavras de volta.",
      },
      {
        q: "Meus arquivos são enviados para servidores?",
        a: "Não — a extração e o .docx são produzidos inteiramente no seu navegador.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word para PDF",
    tagline: "Converta um .docx em um PDF fácil de compartilhar.",
    title: "Word para PDF — Converter DOCX em PDF Online (Grátis, no Navegador)",
    description:
      "Converta um documento Word (.docx) em um PDF fácil de compartilhar no seu navegador. Na medida do possível, grátis e privado.",
    h1: "Word para PDF",
    intro:
      "Transforme um .docx do Word em um PDF que você pode compartilhar. O texto e o fluxo de parágrafos são preservados; estilos pesados, imagens e tabelas podem ser simplificados. Tudo roda no seu navegador.",
    howItWorks: [
      "Envie um documento .docx.",
      "Clique em Converter — o documento é lido localmente.",
      "Um PDF é gerado no seu navegador.",
      "Baixe seu PDF.",
    ],
    faqs: [
      {
        q: "Quais arquivos são compatíveis?",
        a: "Arquivos .docx modernos do Word. O formato antigo .doc não é compatível — salve-o como .docx primeiro.",
      },
      {
        q: "Vai corresponder exatamente ao layout do Word?",
        a: "É uma conversão na medida do possível, focada em texto e parágrafos; formatações complexas podem ser simplificadas.",
      },
    ],
  },
  "pdf-to-excel": {
    name: "PDF para Excel",
    tagline: "Extraia o texto do PDF para uma planilha.",
    title: "PDF para Excel — Converter Texto de PDF em XLSX (Grátis, no Navegador)",
    description:
      "Extraia o texto de um PDF para uma planilha Excel (.xlsx) editável no seu navegador. Detecção de tabelas na medida do possível, grátis e privado.",
    h1: "PDF para Excel",
    intro:
      "Extraia o texto de um PDF para uma planilha. Cada linha vira uma linha da planilha, e espaços largos são tratados como quebras de coluna. Tabelas do mundo real variam, então revise o resultado — mas economiza muita digitação. Roda no seu navegador.",
    howItWorks: [
      "Envie um PDF.",
      "Clique em Converter — o texto é extraído localmente.",
      "Um .xlsx é criado, dividindo colunas nos espaços largos.",
      "Baixe e ajuste as colunas no Excel ou no Google Sheets.",
    ],
    faqs: [
      {
        q: "Vai detectar minhas tabelas perfeitamente?",
        a: "Nem sempre. PDFs não armazenam a estrutura real da tabela, então as colunas são deduzidas a partir do espaçamento. Espere corrigir algumas células, especialmente em layouts complexos.",
      },
      {
        q: "É privado?",
        a: "Sim — a extração e a planilha são produzidas inteiramente no seu navegador.",
      },
    ],
  },
  "pdf-to-powerpoint": {
    name: "PDF para PowerPoint",
    tagline: "Transforme cada página do PDF em um slide.",
    title: "PDF para PowerPoint — Converter PDF em PPTX (Grátis, no Navegador)",
    description:
      "Converta páginas de PDF em slides do PowerPoint (.pptx) no seu navegador. Cada página vira uma imagem de slide inteiro. Grátis e privado.",
    h1: "PDF para PowerPoint",
    intro:
      "Transforme um PDF em uma apresentação do PowerPoint em que cada página vira um slide. Os slides ficam exatamente como o PDF (cada página é colocada como uma imagem de slide inteiro), então são ótimos para apresentar — embora o texto neles não seja editável individualmente. Roda no seu navegador.",
    howItWorks: [
      "Envie um PDF.",
      "Clique em Converter — cada página é renderizada localmente.",
      "Um .pptx é criado com um slide por página.",
      "Baixe e abra no PowerPoint, Keynote ou Google Slides.",
    ],
    faqs: [
      {
        q: "Posso editar o texto nos slides?",
        a: "Não diretamente — cada slide é uma imagem em alta resolução da página. Isso mantém a aparência idêntica à do PDF.",
      },
      {
        q: "É privado?",
        a: "Sim — as páginas são renderizadas e o .pptx é criado inteiramente no seu navegador.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR de PDF",
    tagline: "Extraia texto de PDFs digitalizados e imagens.",
    title: "OCR de PDF — PDF Digitalizado e Imagem para Texto (Grátis, no Navegador)",
    description:
      "Reconheça texto em PDFs digitalizados e imagens e copie ou baixe como texto simples. Roda inteiramente no seu navegador — grátis e privado.",
    h1: "OCR — PDF Digitalizado e Imagem para Texto",
    intro:
      "Extraia o texto de documentos digitalizados, fotos e PDFs baseados em imagem usando OCR no dispositivo. Tudo roda localmente no seu navegador, então seus documentos permanecem privados. Idioma inglês.",
    howItWorks: [
      "Envie um PDF digitalizado ou imagens (PNG/JPG).",
      "Clique em Extrair texto — na primeira execução, o mecanismo de reconhecimento é baixado (~10 MB).",
      "Cada página é lida localmente no seu dispositivo.",
      "Copie o texto ou baixe-o como um arquivo .txt.",
    ],
    faqs: [
      {
        q: "O OCR roda no meu navegador?",
        a: "Sim — ele usa o Tesseract (WebAssembly) inteiramente no seu dispositivo. Seus arquivos nunca são enviados para servidores.",
      },
      {
        q: "Quais idiomas são compatíveis?",
        a: "Atualmente, o inglês. O mecanismo baixa o modelo de idioma no primeiro uso e depois o mantém em cache.",
      },
      {
        q: "Por que a primeira execução é lenta?",
        a: "O mecanismo de reconhecimento e o modelo de inglês (~10 MB) são baixados uma vez no primeiro uso. Depois disso, fica bem mais rápido.",
      },
    ],
  },
  "edit-pdf-text": {
    name: "Editar Texto de PDF",
    tagline: "Extraia, edite e reconstrua o texto do PDF.",
    title: "Editar Texto de PDF — Extrair, Editar e Reconstruir (Grátis, no Navegador)",
    description:
      "Extraia o texto de um PDF, edite-o página por página e reconstrua um PDF de texto limpo — tudo no seu navegador. Grátis e privado.",
    h1: "Editar Texto de PDF",
    intro:
      "Corrija erros de digitação e altere a redação em um PDF. Isso extrai o texto para que você possa editá-lo página por página e depois reconstrói um PDF limpo, só com texto. As fontes originais, imagens e o layout exato não são preservados — é melhor quando você precisa principalmente mudar as palavras. Roda no seu navegador.",
    howItWorks: [
      "Envie um PDF.",
      "Edite o texto extraído na caixa de cada página.",
      "Clique em Reconstruir — um novo PDF de texto é gerado localmente.",
      "Baixe seu PDF editado.",
    ],
    faqs: [
      {
        q: "Ele mantém o design original?",
        a: "Não. PDFs armazenam o texto como glifos posicionados, não como parágrafos editáveis, então a edição real no local não é possível de graça no navegador. Em vez disso, ele reconstrói um PDF de texto limpo a partir das suas edições.",
      },
      {
        q: "Meus arquivos são enviados para servidores?",
        a: "Não — a extração e o PDF reconstruído acontecem inteiramente no seu dispositivo.",
      },
    ],
  },
};

export default pt;
