import type { GuideContent } from "../../guide-types";

const guides: Record<string, GuideContent> = {
  "compress-pdf-for-email": {
    title: "Como Comprimir um PDF para E-mail (Grátis, sem Upload)",
    description:
      "Seu e-mail está sendo recusado porque o PDF é grande demais? Veja como reduzir um PDF abaixo do limite de 10 a 25 MB de graça, no seu navegador, sem enviar o arquivo para lugar nenhum.",
    h1: "Como Comprimir um PDF para E-mail",
    excerpt:
      "Deixe um PDF grande abaixo do limite de 10 a 25 MB do e-mail — de graça e sem enviá-lo para lugar nenhum.",
    intro:
      "A maioria dos provedores de e-mail recusa anexos acima de um certo tamanho — o Gmail limita você a 25 MB, o Outlook a 20 MB e muitos servidores corporativos a apenas 10 MB. Um contrato digitalizado ou um relatório cheio de imagens pode estourar esse limite com facilidade. A boa notícia: você pode reduzir quase qualquer PDF de volta para baixo do limite em poucos segundos, de graça, sem mandar seu documento para o servidor de um estranho.",
    sections: [
      {
        heading: "Por que os PDFs ficam tão grandes",
        body: [
          "Os PDFs incham por um motivo principal: imagens. Um documento que é quase todo texto costuma ser minúsculo — algumas centenas de kilobytes. Mas no momento em que você digitaliza páginas, cola capturas de tela ou exporta de uma ferramenta de design, cada página vira uma imagem em alta resolução, e o tamanho do arquivo se multiplica rápido.",
          "É também por isso que a compressão mais eficaz funciona recodificando essas imagens em uma resolução mais sensata. PDFs só de texto já são compactos, então não espere milagres por aí — os grandes ganhos vêm de digitalizações e documentos cheios de fotos.",
        ],
      },
      {
        heading: "Comprima seu PDF no navegador (passo a passo)",
        list: [
          "Abra a ferramenta gratuita Comprimir PDF — nada é enviado; ela roda no seu dispositivo.",
          "Arraste o PDF que você precisa enviar por e-mail.",
          "Escolha um nível de compressão: 'forte' para o menor arquivo, 'equilibrado' para um bom meio-termo.",
          "Baixe o resultado e compare o novo tamanho com o limite do seu e-mail (ela mostra o antes e o depois).",
        ],
      },
      {
        heading: "Se ainda estiver grande demais",
        body: [
          "Duas alternativas confiáveis: dividir o PDF em partes e enviá-las em e-mails separados, ou remover as páginas de que você não precisa antes de comprimir. As duas mantêm a qualidade intacta em vez de espremer tudo com mais força.",
          "Para documentos que você vai compartilhar com frequência, a solução mais limpa a longo prazo é colocar o arquivo no armazenamento em nuvem e enviar um link no lugar do anexo — sem limite de tamanho, e o destinatário sempre recebe a versão mais recente.",
        ],
      },
      {
        heading: "Uma observação sobre privacidade",
        body: [
          "Vários sites de 'comprimir PDF' funcionam enviando seu arquivo para os servidores deles, processando-o lá e devolvendo-o. Para uma nota fiscal, um contrato ou um formulário médico, isso é uma preocupação de privacidade de verdade. A ferramenta acima faz tudo localmente no seu navegador usando o processamento do seu próprio dispositivo — o arquivo nunca sai do seu computador.",
        ],
      },
    ],
    faqs: [
      {
        q: "Qual é o tamanho máximo de anexo de e-mail?",
        a: "O Gmail permite 25 MB, o Outlook.com 20 MB, e muitos servidores de e-mail corporativos limitam a 10 MB. Procure ficar abaixo do menor limite que seu destinatário possa ter.",
      },
      {
        q: "Comprimir vai estragar a qualidade?",
        a: "Para digitalizações e PDFs cheios de imagens, a mudança costuma ser quase imperceptível na qualidade 'equilibrada'. O texto continua legível; só as imagens são recodificadas.",
      },
      {
        q: "É seguro comprimir PDFs confidenciais online?",
        a: "Só se a ferramenta processar o arquivo no seu navegador. A ferramenta Comprimir PDF daqui nunca envia seu documento, então arquivos confidenciais ficam no seu dispositivo.",
      },
    ],
  },
  "merge-pdf-without-uploading": {
    title: "Como Juntar Arquivos PDF sem Fazer Upload",
    description:
      "Combine vários PDFs em um único documento sem enviar nada para um servidor. Uma forma gratuita, privada e no navegador de juntar PDFs em qualquer computador.",
    h1: "Como Juntar Arquivos PDF sem Fazer Upload",
    excerpt:
      "Combine vários PDFs em um único arquivo com privacidade — a junção acontece no seu navegador, não em um servidor.",
    intro:
      "Combinar PDFs é uma das tarefas mais comuns com documentos: juntar uma nota fiscal a um recibo, unir páginas digitalizadas ou montar um relatório a partir de várias exportações. A maioria dos juntadores online faz upload dos seus arquivos para isso. Se seus documentos são sensíveis — e PDFs costumam ser —, veja como juntá-los sem que nada saia do seu computador.",
    sections: [
      {
        heading: "Por que 'sem upload' importa",
        body: [
          "Quando um site junta seus PDFs, a abordagem tradicional envia cada arquivo para os servidores dele, combina tudo lá e devolve o resultado. Seus documentos ficam na máquina de outra pessoa, por mais breve que seja, e você confia nas políticas de retenção e segurança dela.",
          "Os navegadores modernos são poderosos o suficiente para fazer o trabalho todo localmente. Uma ferramenta construída assim lê seus arquivos para a memória do navegador, junta-os no seu próprio dispositivo e devolve o PDF pronto direto para você — sem ida e volta a servidor, sem upload.",
        ],
      },
      {
        heading: "Junte seus PDFs (passo a passo)",
        list: [
          "Abra a ferramenta gratuita Juntar PDF — ela roda inteiramente no seu navegador.",
          "Adicione dois ou mais arquivos PDF arrastando-os para a tela.",
          "Arraste os arquivos para a ordem exata em que você quer combiná-los.",
          "Clique em Juntar e baixe seu documento único combinado.",
        ],
      },
      {
        heading: "Dicas para um resultado limpo",
        body: [
          "A ordem importa: organize os arquivos antes de juntar para não ter que refazer. Se você só precisa de algumas páginas de um arquivo, recorte-o primeiro com uma ferramenta de dividir ou organizar, e depois junte o trecho menor.",
          "A junção copia cada página como está, então o texto continua selecionável e a qualidade da imagem é preservada exatamente — você não está achatando nem renderizando nada de novo.",
        ],
      },
    ],
    faqs: [
      {
        q: "Existe um limite de quantos PDFs eu posso juntar?",
        a: "Não há limite de servidor porque nada é enviado. O limite prático é a memória do seu dispositivo e o tamanho total dos arquivos.",
      },
      {
        q: "Juntar vai alterar a qualidade ou deixar o texto não selecionável?",
        a: "Não. As páginas são copiadas para o novo documento sem alteração, então o texto continua selecionável e as imagens mantêm a resolução original.",
      },
      {
        q: "Isso funciona em Mac, Windows ou Chromebook?",
        a: "Sim. Como roda no navegador, funciona em qualquer sistema operacional com um navegador moderno — sem precisar instalar nada.",
      },
    ],
  },
  "convert-heic-to-jpg-on-windows": {
    title: "Como Converter HEIC para JPG no Windows (Grátis)",
    description:
      "O Windows não abre as fotos HEIC do seu iPhone? Converta HEIC para JPG de graça no seu navegador — sem software para instalar, e suas fotos nunca são enviadas.",
    h1: "Como Converter HEIC para JPG no Windows",
    excerpt:
      "Abra as fotos HEIC do iPhone no Windows convertendo-as para JPG — grátis, sem instalar e sem upload.",
    intro:
      "Os iPhones salvam fotos em HEIC, um formato que mantém a qualidade alta usando menos espaço. O problema: o Windows, softwares mais antigos e muitos sites ainda não conseguem abrir arquivos HEIC. Convertê-los para JPG resolve isso na hora — e você pode fazer de graça no seu navegador, sem instalar nada nem entregar suas fotos a um site.",
    sections: [
      {
        heading: "Por que suas fotos de iPhone são HEIC",
        body: [
          "Desde o iOS 11, a Apple usa o HEIC (High Efficiency Image Container) por padrão, porque ele armazena a mesma qualidade de imagem em cerca de metade do tamanho de arquivo do JPG. É ótimo no seu telefone, mas a compatibilidade em outros lugares ainda é irregular — por isso uma foto que parece perfeita no iPhone se recusa a abrir num PC com Windows ou a subir em um formulário web mais antigo.",
          "O JPG, por outro lado, abre literalmente em qualquer lugar. Converter é a forma mais rápida de deixar suas fotos universalmente utilizáveis.",
        ],
      },
      {
        heading: "Converta HEIC para JPG (passo a passo)",
        list: [
          "Abra a ferramenta gratuita HEIC para JPG no navegador do PC com Windows.",
          "Arraste uma ou mais fotos .heic.",
          "Deixe a ferramenta decodificá-las e convertê-las para JPG no seu dispositivo.",
          "Baixe os JPGs — agora abríveis no Fotos, no Office e em qualquer site.",
        ],
      },
      {
        heading: "Pare de salvar novas fotos como HEIC (opcional)",
        body: [
          "Se você prefere evitar a conversão toda vez, pode fazer seu iPhone fotografar direto em JPG: abra Ajustes → Câmera → Formatos e escolha 'Mais Compatível'. A partir daí, as novas fotos serão em JPG. Sua biblioteca HEIC existente ainda precisa ser convertida, mas as fotos novas não.",
        ],
      },
      {
        heading: "Mantendo suas fotos privadas",
        body: [
          "Fotos são pessoais, então vale saber que muitos conversores de HEIC enviam suas imagens para os servidores deles. A ferramenta daqui decodifica e converte tudo no seu navegador — suas fotos nunca saem do computador, o que faz diferença quando você está convertendo um rolo de câmera inteiro.",
        ],
      },
    ],
    faqs: [
      {
        q: "Vou perder qualidade convertendo HEIC para JPG?",
        a: "Há uma pequena mudança porque o JPG é um formato com perdas, mas é visualmente insignificante para fotos do dia a dia — e você ganha compatibilidade em todo lugar.",
      },
      {
        q: "Preciso instalar algum software no Windows?",
        a: "Não. A conversão roda no seu navegador, então não há nada para baixar ou instalar.",
      },
      {
        q: "Por que a conversão de HEIC às vezes falha?",
        a: "O HEIC não é decodificável nativamente em todos os navegadores. A ferramenta usa um decodificador que faz o melhor possível; se um arquivo não converter, tentar um navegador diferente costuma ajudar.",
      },
    ],
  },
  "convert-pdf-to-editable-word": {
    title: "Como Converter um PDF em um Documento Word Editável (Grátis)",
    description:
      "Precisa editar o texto de um PDF? Veja como converter um PDF em um arquivo Word (.docx) editável de graça no seu navegador, e o que esperar do resultado.",
    h1: "Como Converter um PDF em um Documento Word Editável",
    excerpt:
      "Extraia o texto de um PDF para um .docx editável — grátis, no seu navegador, com expectativas realistas.",
    intro:
      "Os PDFs são feitos para ter a mesma aparência em todo lugar, e é exatamente por isso que são chatos de editar. Se você precisa mudar o texto de um PDF — corrigir um erro de digitação, atualizar um número, reaproveitar um parágrafo —, o caminho usual é convertê-lo primeiro em um documento Word editável. Veja como fazer isso de graça no seu navegador, além de uma visão honesta sobre o que converte bem e o que não converte.",
    sections: [
      {
        heading: "O que o 'PDF para Word' consegue e não consegue fazer",
        body: [
          "Ajuda alinhar as expectativas desde o início. Um PDF armazena o texto como glifos posicionados, não como parágrafos fluidos, então nenhuma ferramenta gratuita consegue reconstruir perfeitamente um layout complexo. O que um bom conversor faz bem é extrair as palavras para um .docx editável que você pode retrabalhar — o texto vem de forma limpa para você editá-lo.",
          "O que nem sempre sobrevive: layouts de várias colunas, fontes exatas, imagens incorporadas e tabelas elaboradas. Se o seu PDF é quase só texto corrido, você vai ter um resultado excelente. Se for um folheto cheio de design, espere ter que reformatar um pouco.",
        ],
      },
      {
        heading: "Converta PDF para Word (passo a passo)",
        list: [
          "Abra a ferramenta gratuita PDF para Word — ela extrai o texto localmente no seu navegador.",
          "Arraste seu PDF.",
          "Clique em Converter; o texto é extraído e um .docx é montado no seu dispositivo.",
          "Baixe o .docx e abra-o no Word, no Google Docs ou no Pages para editar.",
        ],
      },
      {
        heading: "E se o PDF for uma digitalização?",
        body: [
          "Se o seu PDF é a imagem digitalizada de uma página, não há texto de verdade dentro dele para extrair — é uma figura. Nesse caso, passe-o primeiro por OCR (reconhecimento óptico de caracteres) para transformar a imagem em texto reconhecível, e depois converta. Nossa ferramenta de OCR também faz isso no navegador.",
        ],
      },
      {
        heading: "Editar sem converter",
        body: [
          "Às vezes você só precisa corrigir algumas palavras e não quer um documento Word completo. Nesse caso, uma ferramenta de 'editar texto de PDF' no navegador permite extrair o texto, alterá-lo e remontar um PDF de texto limpo — útil para correções rápidas.",
        ],
      },
    ],
    faqs: [
      {
        q: "O arquivo Word vai ficar exatamente igual ao meu PDF?",
        a: "Não exatamente. O texto converte bem para você editá-lo, mas layouts complexos, colunas e imagens não são reproduzidos perfeitamente. É ideal quando você precisa principalmente recuperar as palavras.",
      },
      {
        q: "Meus arquivos são enviados durante a conversão?",
        a: "Não. A extração e o .docx são produzidos inteiramente no seu navegador, então o documento nunca sai do seu dispositivo.",
      },
      {
        q: "Posso converter um PDF digitalizado para Word?",
        a: "Passe-o primeiro por OCR para reconhecer o texto, e depois converta. Uma digitalização sozinha não tem texto extraível — é uma imagem.",
      },
    ],
  },
  "reduce-image-size-without-losing-quality": {
    title: "Como Reduzir o Tamanho de Imagens sem Perder Qualidade (Grátis)",
    description:
      "Reduza imagens JPG, PNG e WebP para sites mais rápidos e uploads menores — sem uma queda perceptível na qualidade. Grátis e privado, direto no seu navegador.",
    h1: "Como Reduzir o Tamanho de Imagens sem Perder Qualidade",
    excerpt:
      "Deixe as imagens menores para a web e para uploads mantendo a nitidez — grátis e no navegador.",
    intro:
      "Arquivos de imagem grandes deixam os sites lentos, incham os e-mails e esbarram nos limites de upload. O truque é reduzir o tamanho do arquivo sem uma queda visível de qualidade — e na maioria das vezes isso é totalmente possível, porque as imagens carregam muito mais dados do que o olho realmente precisa. Veja como fazer isso de graça no seu navegador.",
    sections: [
      {
        heading: "Comprimir x redimensionar: saiba a diferença",
        body: [
          "Esses dois são confundidos o tempo todo. Comprimir reduz o tamanho do arquivo armazenando a imagem de forma mais eficiente, mantendo a mesma largura e altura. Redimensionar altera as dimensões reais em pixels. Para a maioria dos problemas de 'minha imagem está grande demais', o movimento certo primeiro é comprimir; redimensione só quando a imagem também for maior na tela do que precisa ser.",
          "Muitas vezes os melhores resultados vêm de fazer as duas coisas: redimensionar uma foto de 6000 pixels de largura para os 1600 pixels que seu site realmente exibe, e depois comprimir isso. A economia pode ser enorme.",
        ],
      },
      {
        heading: "Reduza o tamanho do arquivo (passo a passo)",
        list: [
          "Abra a ferramenta gratuita Comprimir Imagem no seu navegador.",
          "Arraste uma imagem JPG, PNG ou WebP.",
          "Arraste o controle de qualidade para baixo enquanto observa o tamanho estimado de saída — 70 a 80% costuma ser invisível ao olho.",
          "Baixe a imagem menor e compare o tamanho do antes e do depois.",
        ],
      },
      {
        heading: "Escolha o formato certo",
        body: [
          "A escolha do formato importa. O JPG é melhor para fotografias. O PNG é melhor para gráficos com bordas nítidas ou transparência, mas é sem perdas e muitas vezes grande — converter uma foto de PNG para JPG ou WebP pode reduzir drasticamente o tamanho. O WebP costuma superar os dois na mesma qualidade, desde que todo dispositivo que precisa da imagem dê suporte a ele.",
        ],
      },
      {
        heading: "Por que fazer isso no navegador",
        body: [
          "Enviar imagens para um site de compressão é lento para arquivos grandes e significa que suas fotos passam pelo servidor de outra pessoa. Uma ferramenta no navegador comprime na hora no seu próprio dispositivo — mais rápido, e suas imagens permanecem privadas.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quanto posso comprimir antes da qualidade cair?",
        a: "Para fotos, 70 a 80% de qualidade costuma ser indistinguível do original, reduzindo o tamanho de forma substancial. Vá mais baixo em miniaturas, onde o detalhe importa menos.",
      },
      {
        q: "Comprimir altera as dimensões da imagem?",
        a: "Não. A compressão mantém a mesma largura e altura; só armazena a imagem de forma mais eficiente. Use uma ferramenta de redimensionar se você também quiser dimensões menores.",
      },
      {
        q: "Qual formato dá o menor arquivo?",
        a: "Para fotos, o WebP costuma ser o menor, depois o JPG. O PNG é melhor reservado para gráficos e transparência, onde ele brilha apesar dos tamanhos maiores.",
      },
    ],
  },
  "split-pdf-extract-pages": {
    title: "Como Dividir um PDF ou Extrair Páginas Específicas (Grátis)",
    description:
      "Extraia páginas específicas ou intervalos de páginas de um PDF para um novo arquivo — grátis, privado e no seu navegador. Um guia simples para dividir e extrair páginas de PDF.",
    h1: "Como Dividir um PDF ou Extrair Páginas Específicas",
    excerpt:
      "Extraia só as páginas de que você precisa de um PDF para um novo arquivo — grátis e inteiramente no seu navegador.",
    intro:
      "Nem todo PDF precisa ser compartilhado inteiro. Talvez você só queira as páginas 3 a 5 de um relatório longo, ou precise tirar uma única página assinada de um contrato. Dividir um PDF permite extrair exatamente as páginas de que você precisa para um novo arquivo — e você pode fazer isso de graça no seu navegador, sem enviar o original para lugar nenhum.",
    sections: [
      {
        heading: "Dividir x organizar",
        body: [
          "São duas tarefas relacionadas. Dividir (ou extrair) tira um conjunto de páginas para um PDF totalmente novo, deixando o seu original intocado. Organizar reordena e exclui páginas dentro de um documento. Se o seu objetivo é 'eu só quero essas páginas específicas como um arquivo próprio', dividir é o que você quer.",
        ],
      },
      {
        heading: "Extraia páginas (passo a passo)",
        list: [
          "Abra a ferramenta gratuita Dividir PDF no seu navegador.",
          "Arraste o PDF do qual você quer tirar páginas.",
          "Informe as páginas ou intervalos a manter — por exemplo 1-3, 5, 8-10.",
          "Clique em Dividir e baixe o novo PDF contendo apenas essas páginas.",
        ],
      },
      {
        heading: "A sintaxe de intervalos, explicada",
        body: [
          "Os intervalos usam vírgulas e traços. '1-3' significa as páginas um a três; um número único como '5' pega só aquela página; e você pode combiná-los: '1-3, 5, 8-10'. As páginas são exportadas na ordem em que você as lista, então dá para reordenar enquanto extrai.",
          "Quer uma única página? Basta informar o número dela sozinho — por exemplo '4' — para exportar um PDF de uma página.",
        ],
      },
      {
        heading: "Privado por princípio",
        body: [
          "A divisão acontece inteiramente no seu navegador usando o processamento do próprio dispositivo, então um contrato ou relatório confidencial nunca é enviado. Ao terminar, o arquivo original permanece inalterado — você simplesmente criou um novo PDF, menor, ao lado dele.",
        ],
      },
    ],
    faqs: [
      {
        q: "Que formato de intervalo devo usar?",
        a: "Use vírgulas e traços, como 1-3, 5, 8-10. As páginas são exportadas na ordem em que você as lista.",
      },
      {
        q: "Posso extrair só uma página?",
        a: "Sim — informe o número daquela página sozinho (por exemplo, 4) para exportar um PDF de uma página.",
      },
      {
        q: "Dividir altera meu arquivo original?",
        a: "Não. Um novo PDF é criado com as páginas que você escolheu; seu documento original permanece intocado.",
      },
    ],
  },
};

export default guides;
