import type { GuideContent } from "../../guide-types";

const guides: Record<string, GuideContent> = {
  "compress-pdf-for-email": {
    title: "Comment compresser un PDF pour l'email (gratuit, sans téléversement)",
    description:
      "Vos emails sont rejetés parce que votre PDF est trop volumineux ? Voici comment réduire un PDF sous la limite de 10 à 25 Mo gratuitement, dans votre navigateur, sans téléverser le fichier où que ce soit.",
    h1: "Comment compresser un PDF pour l'email",
    excerpt:
      "Faites passer un gros PDF sous la limite email de 10 à 25 Mo — gratuitement, et sans le téléverser nulle part.",
    intro:
      "La plupart des fournisseurs de messagerie rejettent les pièces jointes au-delà d'une certaine taille — Gmail vous limite à 25 Mo, Outlook à 20 Mo, et de nombreux serveurs d'entreprise à seulement 10 Mo. Un contrat scanné ou un rapport riche en images peut facilement dépasser ce seuil. La bonne nouvelle : vous pouvez réduire presque n'importe quel PDF sous la limite en quelques secondes, gratuitement, sans envoyer votre document sur le serveur d'un inconnu.",
    sections: [
      {
        heading: "Pourquoi les PDF deviennent si volumineux",
        body: [
          "Les PDF gonflent pour une raison principale : les images. Un document essentiellement composé de texte est généralement minuscule — quelques centaines de kilo-octets. Mais dès que vous scannez des pages, collez des captures d'écran ou exportez depuis un outil de design, chaque page devient une image en haute résolution, et la taille du fichier se multiplie rapidement.",
          "C'est aussi pourquoi la compression la plus efficace consiste à ré-encoder ces images à une résolution plus raisonnable. Les PDF composés uniquement de texte sont déjà compacts, ne vous attendez donc pas à des miracles de ce côté — les gains importants viennent des scans et des documents riches en photos.",
        ],
      },
      {
        heading: "Compressez votre PDF dans le navigateur (étape par étape)",
        list: [
          "Ouvrez l'outil gratuit Compresser PDF — rien n'est téléversé, tout s'exécute sur votre appareil.",
          "Glissez-déposez le PDF que vous devez envoyer par email.",
          "Choisissez un niveau de compression : « fort » pour le plus petit fichier, « équilibré » pour un bon compromis.",
          "Téléchargez le résultat et comparez la nouvelle taille à votre limite email (l'outil affiche l'avant/après).",
        ],
      },
      {
        heading: "Si c'est encore trop volumineux",
        body: [
          "Deux solutions de repli fiables : divisez le PDF en plusieurs parties et envoyez-les dans des emails séparés, ou supprimez les pages dont vous n'avez pas réellement besoin avant de compresser. Les deux préservent la qualité au lieu de comprimer l'ensemble plus fort.",
          "Pour les documents que vous partagerez souvent, la solution la plus propre à long terme consiste à placer le fichier dans un stockage cloud et à envoyer un lien plutôt que la pièce jointe — aucune limite de taille, et le destinataire obtient toujours la dernière version.",
        ],
      },
      {
        heading: "Un mot sur la confidentialité",
        body: [
          "De nombreux sites de « compression de PDF » fonctionnent en téléversant votre fichier sur leurs serveurs, en le traitant là-bas, puis en vous le renvoyant. Pour une facture, un contrat ou un formulaire médical, c'est un véritable problème de confidentialité. L'outil ci-dessus fait tout localement dans votre navigateur en utilisant la puissance de traitement de votre propre appareil — le fichier ne quitte jamais votre ordinateur.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la taille maximale d'une pièce jointe email ?",
        a: "Gmail autorise 25 Mo, Outlook.com 20 Mo, et de nombreux serveurs de messagerie professionnels plafonnent à 10 Mo. Visez à rester sous la limite la plus basse que votre destinataire pourrait avoir.",
      },
      {
        q: "La compression va-t-elle ruiner la qualité ?",
        a: "Pour les scans et les PDF riches en images, le changement est généralement à peine perceptible en qualité « équilibrée ». Le texte reste lisible ; seules les images sont ré-encodées.",
      },
      {
        q: "Est-il sûr de compresser des PDF confidentiels en ligne ?",
        a: "Uniquement si l'outil traite le fichier dans votre navigateur. L'outil Compresser PDF proposé ici ne téléverse jamais votre document, vos fichiers confidentiels restent donc sur votre appareil.",
      },
    ],
  },
  "merge-pdf-without-uploading": {
    title: "Comment fusionner des fichiers PDF sans les téléverser",
    description:
      "Combinez plusieurs PDF en un seul document sans rien téléverser sur un serveur. Une méthode gratuite, privée et dans le navigateur pour fusionner des PDF sur n'importe quel ordinateur.",
    h1: "Comment fusionner des fichiers PDF sans les téléverser",
    excerpt:
      "Combinez plusieurs PDF en un seul fichier en toute confidentialité — la fusion se déroule dans votre navigateur, pas sur un serveur.",
    intro:
      "Combiner des PDF est l'une des tâches documentaires les plus courantes : agrafer une facture à un reçu, joindre des pages scannées ou assembler un rapport à partir de plusieurs exports. La plupart des fusionneurs en ligne téléversent vos fichiers pour le faire. Si vos documents sont sensibles — et les PDF le sont généralement — voici comment les fusionner sans que rien ne quitte votre ordinateur.",
    sections: [
      {
        heading: "Pourquoi « sans téléverser » compte",
        body: [
          "Lorsqu'un site web fusionne vos PDF, l'approche traditionnelle envoie chaque fichier sur ses serveurs, les combine là-bas et renvoie le résultat. Vos documents se trouvent sur la machine de quelqu'un d'autre, même brièvement, et vous faites confiance à ses politiques de rétention et de sécurité.",
          "Les navigateurs modernes sont assez puissants pour effectuer toute la tâche localement. Un outil conçu ainsi lit vos fichiers dans la mémoire du navigateur, les fusionne sur votre propre appareil et vous renvoie directement le PDF terminé — aucun aller-retour vers un serveur, aucun téléversement.",
        ],
      },
      {
        heading: "Fusionnez vos PDF (étape par étape)",
        list: [
          "Ouvrez l'outil gratuit Fusionner PDF — il s'exécute entièrement dans votre navigateur.",
          "Ajoutez deux fichiers PDF ou plus en les glissant-déposant.",
          "Faites glisser les fichiers dans l'ordre exact dans lequel vous voulez les combiner.",
          "Cliquez sur Fusionner, puis téléchargez votre document unique combiné.",
        ],
      },
      {
        heading: "Conseils pour un résultat propre",
        body: [
          "L'ordre compte : disposez les fichiers avant de fusionner pour ne pas avoir à recommencer. Si vous n'avez besoin que de certaines pages d'un fichier, découpez-le d'abord avec un outil de division ou d'organisation, puis fusionnez la partie plus petite.",
          "La fusion copie chaque page telle quelle, le texte reste donc sélectionnable et la qualité des images est préservée à l'identique — vous n'aplatissez ni ne recalculez quoi que ce soit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Y a-t-il une limite au nombre de PDF que je peux fusionner ?",
        a: "Il n'y a aucune limite de serveur car rien n'est téléversé. La limite pratique est la mémoire de votre appareil et la taille totale des fichiers.",
      },
      {
        q: "La fusion va-t-elle changer la qualité ou rendre le texte non sélectionnable ?",
        a: "Non. Les pages sont copiées dans le nouveau document sans modification, le texte reste donc sélectionnable et les images conservent leur résolution d'origine.",
      },
      {
        q: "Cela fonctionne-t-il sur un Mac, Windows ou un Chromebook ?",
        a: "Oui. Comme il s'exécute dans le navigateur, il fonctionne sur n'importe quel système d'exploitation doté d'un navigateur moderne — aucune installation nécessaire.",
      },
    ],
  },
  "convert-heic-to-jpg-on-windows": {
    title: "Comment convertir HEIC en JPG sous Windows (gratuit)",
    description:
      "Windows n'ouvre pas les photos HEIC de votre iPhone ? Convertissez HEIC en JPG gratuitement dans votre navigateur — aucun logiciel à installer, et vos photos ne sont jamais téléversées.",
    h1: "Comment convertir HEIC en JPG sous Windows",
    excerpt:
      "Ouvrez les photos HEIC de votre iPhone sous Windows en les convertissant en JPG — gratuit, sans installation, sans téléversement.",
    intro:
      "Les iPhone enregistrent les photos en HEIC, un format qui maintient une haute qualité tout en utilisant moins d'espace. Le hic : Windows, les logiciels plus anciens et de nombreux sites web ne savent toujours pas ouvrir les fichiers HEIC. Les convertir en JPG résout cela instantanément — et vous pouvez le faire gratuitement dans votre navigateur sans rien installer ni confier vos photos à un site web.",
    sections: [
      {
        heading: "Pourquoi vos photos iPhone sont en HEIC",
        body: [
          "Depuis iOS 11, Apple utilise par défaut le HEIC (High Efficiency Image Container) parce qu'il stocke la même qualité d'image dans environ la moitié de la taille d'un JPG. C'est excellent sur votre téléphone, mais la compatibilité ailleurs reste inégale — c'est pourquoi une photo qui s'affiche parfaitement sur votre iPhone refuse de s'ouvrir sur un PC Windows ou d'être téléversée dans un ancien formulaire web.",
          "Le JPG, en revanche, s'ouvre littéralement partout. La conversion est le moyen le plus rapide de rendre vos photos utilisables universellement.",
        ],
      },
      {
        heading: "Convertissez HEIC en JPG (étape par étape)",
        list: [
          "Ouvrez l'outil gratuit HEIC en JPG dans votre navigateur sur le PC Windows.",
          "Glissez-déposez une ou plusieurs photos .heic.",
          "Laissez l'outil les décoder et les convertir en JPG sur votre appareil.",
          "Téléchargez les JPG — désormais ouvrables dans Photos, Office et n'importe quel site web.",
        ],
      },
      {
        heading: "Empêcher l'enregistrement des nouvelles photos en HEIC (facultatif)",
        body: [
          "Si vous préférez éviter de convertir à chaque fois, vous pouvez faire en sorte que votre iPhone prenne directement des photos en JPG : ouvrez Réglages → Appareil photo → Formats, et choisissez « Le plus compatible ». Les nouvelles photos seront en JPG à partir de là. Votre bibliothèque HEIC existante doit toujours être convertie, mais pas les nouvelles prises de vue.",
        ],
      },
      {
        heading: "Garder vos photos privées",
        body: [
          "Les photos sont personnelles, il est donc bon de savoir que de nombreux convertisseurs HEIC téléversent vos images sur leurs serveurs. L'outil proposé ici décode et convertit tout dans votre navigateur — vos photos ne quittent jamais l'ordinateur, ce qui compte lorsque vous convertissez toute une pellicule photo.",
        ],
      },
    ],
    faqs: [
      {
        q: "Vais-je perdre en qualité en convertissant HEIC en JPG ?",
        a: "Il y a un léger changement car le JPG est un format avec perte, mais c'est visuellement négligeable pour les photos du quotidien — et vous gagnez en compatibilité partout.",
      },
      {
        q: "Dois-je installer un logiciel sous Windows ?",
        a: "Non. La conversion s'exécute dans votre navigateur, il n'y a donc rien à télécharger ni à installer.",
      },
      {
        q: "Pourquoi la conversion HEIC échoue-t-elle parfois ?",
        a: "Le HEIC n'est pas décodable nativement dans tous les navigateurs. L'outil utilise un décodeur au mieux ; si un fichier ne se convertit pas, essayer un autre navigateur aide souvent.",
      },
    ],
  },
  "convert-pdf-to-editable-word": {
    title: "Comment convertir un PDF en document Word modifiable (gratuit)",
    description:
      "Besoin de modifier le texte d'un PDF ? Voici comment convertir un PDF en fichier Word (.docx) modifiable gratuitement dans votre navigateur, et à quoi s'attendre du résultat.",
    h1: "Comment convertir un PDF en document Word modifiable",
    excerpt:
      "Extrayez le texte d'un PDF dans un .docx modifiable — gratuitement, dans votre navigateur, avec des attentes réalistes.",
    intro:
      "Les PDF sont conçus pour avoir le même aspect partout, c'est précisément pourquoi ils sont compliqués à modifier. Si vous devez changer la formulation d'un PDF — corriger une faute de frappe, mettre à jour un chiffre, réutiliser un paragraphe — la voie habituelle consiste à le convertir d'abord en document Word modifiable. Voici comment le faire gratuitement dans votre navigateur, ainsi qu'un regard honnête sur ce qui se convertit bien et ce qui ne se convertit pas.",
    sections: [
      {
        heading: "Ce que « PDF en Word » peut et ne peut pas faire",
        body: [
          "Il est utile de poser les attentes d'emblée. Un PDF stocke le texte sous forme de glyphes positionnés, et non de paragraphes fluides, aucun outil gratuit ne peut donc reconstruire parfaitement une mise en page complexe. Ce qu'un bon convertisseur fait bien, c'est extraire les mots dans un .docx modifiable que vous pouvez retravailler — le texte passe proprement pour que vous puissiez le modifier.",
          "Ce qui ne survit pas toujours : les mises en page multi-colonnes, les polices exactes, les images intégrées et les tableaux complexes. Si votre PDF est surtout du texte, vous obtiendrez un excellent résultat. S'il s'agit d'une brochure très travaillée, attendez-vous à faire quelques retouches de mise en forme.",
        ],
      },
      {
        heading: "Convertissez un PDF en Word (étape par étape)",
        list: [
          "Ouvrez l'outil gratuit PDF en Word — il extrait le texte localement dans votre navigateur.",
          "Glissez-déposez votre PDF.",
          "Cliquez sur Convertir ; le texte est extrait et un .docx est créé sur votre appareil.",
          "Téléchargez le .docx et ouvrez-le dans Word, Google Docs ou Pages pour le modifier.",
        ],
      },
      {
        heading: "Et si le PDF est un scan ?",
        body: [
          "Si votre PDF est une image scannée d'une page, il n'y a aucun véritable texte à l'intérieur à extraire — c'est une image. Dans ce cas, passez-le d'abord par l'OCR (reconnaissance optique de caractères) pour transformer l'image en texte reconnaissable, puis convertissez. Notre outil OCR fait également cela dans le navigateur.",
        ],
      },
      {
        heading: "Modifier sans convertir",
        body: [
          "Parfois, vous n'avez besoin que de corriger quelques mots et ne voulez pas d'un document Word complet. Dans ce cas, un outil « modifier le texte d'un PDF » dans le navigateur vous permet d'extraire le texte, de le changer et de reconstruire un PDF texte propre — pratique pour des corrections rapides.",
        ],
      },
    ],
    faqs: [
      {
        q: "Le fichier Word ressemblera-t-il exactement à mon PDF ?",
        a: "Pas exactement. Le texte se convertit bien pour que vous puissiez le modifier, mais les mises en page complexes, les colonnes et les images ne sont pas reproduites parfaitement. C'est idéal lorsque vous avez surtout besoin de récupérer les mots.",
      },
      {
        q: "Mes fichiers sont-ils téléversés pendant la conversion ?",
        a: "Non. L'extraction et le .docx sont produits entièrement dans votre navigateur, le document ne quitte donc jamais votre appareil.",
      },
      {
        q: "Puis-je convertir un PDF scanné en Word ?",
        a: "Passez-le d'abord par l'OCR pour reconnaître le texte, puis convertissez. Un scan seul n'a aucun texte extractible — c'est une image.",
      },
    ],
  },
  "reduce-image-size-without-losing-quality": {
    title: "Comment réduire la taille d'une image sans perdre en qualité (gratuit)",
    description:
      "Réduisez les images JPG, PNG et WebP pour des sites plus rapides et des téléversements plus légers — sans baisse évidente de qualité. Gratuit et privé, directement dans votre navigateur.",
    h1: "Comment réduire la taille d'une image sans perdre en qualité",
    excerpt:
      "Allégez les images pour le web et les téléversements tout en les gardant nettes — gratuitement et dans le navigateur.",
    intro:
      "Les fichiers image volumineux ralentissent les sites web, alourdissent les emails et se heurtent aux limites de téléversement. L'astuce consiste à réduire la taille du fichier sans baisse visible de qualité — et la plupart du temps c'est tout à fait possible, car les images contiennent bien plus de données que l'œil n'en a réellement besoin. Voici comment le faire gratuitement dans votre navigateur.",
    sections: [
      {
        heading: "Compresser ou redimensionner : connaître la différence",
        body: [
          "On confond constamment ces deux notions. Compresser réduit la taille du fichier en stockant l'image plus efficacement tout en conservant la même largeur et la même hauteur. Redimensionner change les dimensions réelles en pixels. Pour la plupart des problèmes du type « mon image est trop grande », le bon premier réflexe est de compresser ; redimensionnez seulement lorsque l'image est aussi plus grande à l'écran que nécessaire.",
          "Souvent les meilleurs résultats viennent de la combinaison des deux : redimensionnez une photo de 6000 pixels de large jusqu'aux 1600 pixels que votre site affiche réellement, puis compressez-la. Les économies peuvent être énormes.",
        ],
      },
      {
        heading: "Réduisez la taille du fichier (étape par étape)",
        list: [
          "Ouvrez l'outil gratuit Compresser une image dans votre navigateur.",
          "Glissez-déposez une image JPG, PNG ou WebP.",
          "Abaissez le curseur de qualité tout en surveillant la taille de sortie estimée — 70 à 80 % est généralement invisible à l'œil.",
          "Téléchargez l'image plus petite et comparez la taille avant/après.",
        ],
      },
      {
        heading: "Choisissez le bon format",
        body: [
          "Le choix du format compte. Le JPG est idéal pour les photographies. Le PNG est idéal pour les graphiques aux bords nets ou avec transparence, mais il est sans perte et souvent volumineux — convertir une photo de PNG en JPG ou WebP peut réduire la taille de façon spectaculaire. Le WebP bat fréquemment les deux à qualité égale, si tous les appareils qui ont besoin de l'image le prennent en charge.",
        ],
      },
      {
        heading: "Pourquoi faire cela dans le navigateur",
        body: [
          "Téléverser des images sur un site de compression est lent pour les gros fichiers et signifie que vos photos transitent par le serveur de quelqu'un d'autre. Un outil dans le navigateur compresse instantanément sur votre propre appareil — plus rapide, et vos images restent privées.",
        ],
      },
    ],
    faqs: [
      {
        q: "Jusqu'où puis-je compresser avant que la qualité ne souffre ?",
        a: "Pour les photos, une qualité de 70 à 80 % est généralement indiscernable de l'original tout en réduisant nettement la taille. Descendez plus bas pour les vignettes où le détail compte moins.",
      },
      {
        q: "La compression change-t-elle les dimensions de l'image ?",
        a: "Non. La compression conserve la même largeur et la même hauteur ; elle stocke simplement l'image plus efficacement. Utilisez un outil de redimensionnement si vous voulez aussi des dimensions plus petites.",
      },
      {
        q: "Quel format donne le plus petit fichier ?",
        a: "Pour les photos, le WebP est généralement le plus petit, puis le JPG. Le PNG est à réserver aux graphiques et à la transparence, où il brille malgré des tailles plus grandes.",
      },
    ],
  },
  "split-pdf-extract-pages": {
    title: "Comment diviser un PDF ou extraire des pages précises (gratuit)",
    description:
      "Extrayez des pages précises ou des plages de pages d'un PDF dans un nouveau fichier — gratuitement, en privé, et dans votre navigateur. Un guide simple pour diviser et extraire des pages PDF.",
    h1: "Comment diviser un PDF ou extraire des pages précises",
    excerpt:
      "Extrayez uniquement les pages dont vous avez besoin d'un PDF dans un nouveau fichier — gratuitement et entièrement dans votre navigateur.",
    intro:
      "Tous les PDF n'ont pas besoin d'être partagés en entier. Peut-être ne voulez-vous que les pages 3 à 5 d'un long rapport, ou devez-vous extraire une seule page signée d'un contrat. Diviser un PDF vous permet d'extraire exactement les pages dont vous avez besoin dans un nouveau fichier — et vous pouvez le faire gratuitement dans votre navigateur, sans téléverser l'original où que ce soit.",
    sections: [
      {
        heading: "Diviser ou organiser",
        body: [
          "Il y a deux tâches connexes. Diviser (ou extraire) sort un ensemble de pages dans un tout nouveau PDF, en laissant votre original intact. Organiser réordonne et supprime des pages au sein d'un document. Si votre objectif est « je veux juste ces pages précises comme fichier à part », la division est ce qu'il vous faut.",
        ],
      },
      {
        heading: "Extrayez des pages (étape par étape)",
        list: [
          "Ouvrez l'outil gratuit Diviser PDF dans votre navigateur.",
          "Glissez-déposez le PDF dont vous voulez extraire des pages.",
          "Saisissez les pages ou les plages à conserver — par exemple 1-3, 5, 8-10.",
          "Cliquez sur Diviser et téléchargez le nouveau PDF contenant uniquement ces pages.",
        ],
      },
      {
        heading: "La syntaxe des plages, expliquée",
        body: [
          "Les plages utilisent des virgules et des tirets. « 1-3 » signifie les pages un à trois ; un nombre seul comme « 5 » prend juste cette page ; et vous pouvez les combiner : « 1-3, 5, 8-10 ». Les pages sont exportées dans l'ordre où vous les listez, vous pouvez donc réordonner pendant l'extraction.",
          "Vous voulez une seule page ? Saisissez simplement son numéro seul — par exemple « 4 » — pour exporter un PDF d'une page.",
        ],
      },
      {
        heading: "Privé par conception",
        body: [
          "La division se déroule entièrement dans votre navigateur en utilisant la puissance de traitement de votre appareil, un contrat ou un rapport confidentiel n'est donc jamais téléversé. Une fois terminé, le fichier original est inchangé — vous avez simplement créé un nouveau PDF plus petit à côté.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quel format de plage dois-je utiliser ?",
        a: "Utilisez des virgules et des tirets, comme 1-3, 5, 8-10. Les pages sont exportées dans l'ordre où vous les listez.",
      },
      {
        q: "Puis-je extraire une seule page ?",
        a: "Oui — saisissez ce numéro de page seul (par exemple, 4) pour exporter un PDF d'une page.",
      },
      {
        q: "La division change-t-elle mon fichier original ?",
        a: "Non. Un nouveau PDF est créé avec les pages que vous avez choisies ; votre document original reste intact.",
      },
    ],
  },
};

export default guides;
