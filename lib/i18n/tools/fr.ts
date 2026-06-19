import type { ToolTranslations } from "../tool-translations";
const fr: ToolTranslations = {
  "image-converter": {
    name: "Convertisseur d'images",
    tagline: "Convertissez entre PNG, JPG et WebP.",
    title: "Convertisseur d'images — PNG en JPG, JPG en PNG, WebP (gratuit, dans le navigateur)",
    description:
      "Convertissez vos images entre PNG, JPG et WebP directement dans votre navigateur. Gratuit, rapide et privé — vos fichiers ne quittent jamais votre appareil.",
    h1: "Convertisseur d'images",
    intro:
      "Convertissez des images PNG, JPG et WebP dans tous les sens, instantanément et gratuitement. Tout s'exécute localement dans votre navigateur, vos images ne sont donc jamais téléversées.",
    howItWorks: [
      "Glissez-déposez votre image, ou cliquez pour choisir un fichier.",
      "Choisissez le format de sortie (PNG, JPG ou WebP).",
      "Cliquez sur Convertir — le traitement a lieu entièrement sur votre appareil.",
      "Téléchargez votre image convertie.",
    ],
    faqs: [
      {
        q: "Mes images sont-elles téléversées sur un serveur ?",
        a: "Non. La conversion a lieu localement dans votre navigateur grâce à l'API Canvas. Vos images ne quittent jamais votre appareil.",
      },
      {
        q: "Pourquoi l'option AVIF est-elle parfois désactivée ?",
        a: "L'encodage AVIF dépend de votre navigateur. Nous détectons automatiquement la prise en charge et désactivons les formats que votre navigateur ne peut pas produire.",
      },
      {
        q: "La conversion en JPG fait-elle perdre la transparence ?",
        a: "Oui. Le JPG ne gère pas la transparence ; les zones transparentes sont donc remplies de blanc. Utilisez PNG ou WebP pour conserver la transparence.",
      },
    ],
  },
  "resize-image": {
    name: "Redimensionner une image",
    tagline: "Modifiez les dimensions d'une image par largeur ou hauteur.",
    title: "Redimensionner une image — modifier la largeur et la hauteur en ligne (gratuit, privé)",
    description:
      "Redimensionnez vos images par largeur et hauteur dans votre navigateur, avec une option pour conserver les proportions. Gratuit et privé — les fichiers ne quittent jamais votre appareil.",
    h1: "Redimensionner une image",
    intro:
      "Redimensionnez n'importe quelle image PNG, JPG ou WebP en définissant une nouvelle largeur et hauteur. Verrouillez les proportions ou fixez des dimensions exactes. Tout s'exécute entièrement dans votre navigateur.",
    howItWorks: [
      "Téléversez une image en la glissant ou en cliquant pour parcourir vos fichiers.",
      "Saisissez une largeur et/ou une hauteur cible.",
      "Activez « Conserver les proportions » pour éviter toute déformation.",
      "Cliquez sur Redimensionner et téléchargez le résultat.",
    ],
    faqs: [
      {
        q: "Le redimensionnement réduit-il la qualité ?",
        a: "Réduire une image donne en général un résultat net. L'agrandir au-delà des dimensions d'origine peut paraître flou, car les pixels sont interpolés.",
      },
      {
        q: "Puis-je conserver les proportions ?",
        a: "Oui. Activez « Conserver les proportions » et l'autre dimension est calculée automatiquement au fur et à mesure de votre saisie.",
      },
      {
        q: "Which image formats can I resize?",
        a: "PNG, JPG et WebP. Le résultat conserve votre format d'origine, sauf si vous le convertissez séparément.",
      },
    ],
  },
  "compress-image": {
    name: "Compresser une image",
    tagline: "Réduisez la taille des fichiers JPG/WebP avec un curseur de qualité.",
    title: "Compresser une image — réduire la taille des fichiers JPG et WebP (gratuit, dans le navigateur)",
    description:
      "Compressez vos images JPG et WebP avec un curseur de qualité et comparez la taille avant/après. Gratuit, privé et entièrement dans le navigateur.",
    h1: "Compresser une image",
    intro:
      "Réduisez la taille des fichiers image grâce à un simple curseur de qualité et comparez instantanément la taille avant et après. Idéal pour des sites plus rapides et des pièces jointes plus légères.",
    howItWorks: [
      "Téléversez une image JPG, PNG ou WebP.",
      "Déplacez le curseur de qualité pour équilibrer taille et qualité.",
      "Observez la mise à jour de la taille de sortie estimée.",
      "Téléchargez l'image compressée.",
    ],
    faqs: [
      {
        q: "Quels formats se compressent le mieux ?",
        a: "Le JPG et le WebP prennent en charge un réglage de qualité avec perte. Le PNG est sans perte ; il est donc réencodé en JPG ou WebP pour des gains notables.",
      },
      {
        q: "Y a-t-il une limite de taille de fichier ?",
        a: "Il n'y a aucune limite serveur stricte puisque rien n'est téléversé, mais les images très volumineuses peuvent être lentes sur les appareils à faible mémoire.",
      },
      {
        q: "Does compressing change the image dimensions?",
        a: "Non. La compression réduit la taille du fichier en ajustant la qualité et l'encodage ; la largeur et la hauteur restent identiques. Utilisez Redimensionner une image si vous souhaitez aussi des dimensions plus petites.",
      },
    ],
  },
  "images-to-pdf": {
    name: "Images en PDF",
    tagline: "Combinez des images JPG/PNG/WebP en un seul PDF.",
    title: "Images en PDF — convertir JPG et PNG en PDF en ligne (gratuit)",
    description:
      "Combinez plusieurs images JPG, PNG ou WebP en un seul PDF dans votre navigateur. Réorganisez les pages avant l'export. Gratuit et privé.",
    h1: "Images en PDF",
    intro:
      "Transformez un ensemble d'images en un seul PDF facile à partager. Ajoutez autant de fichiers JPG, PNG ou WebP que vous le souhaitez, glissez-les pour les réorganiser et exportez un document propre.",
    howItWorks: [
      "Téléversez une ou plusieurs images.",
      "Glissez-les pour les placer dans l'ordre des pages souhaité.",
      "Cliquez sur Créer le PDF — chaque image devient une page.",
      "Téléchargez le PDF combiné.",
    ],
    faqs: [
      {
        q: "Puis-je contrôler l'ordre des pages ?",
        a: "Oui. Utilisez les commandes haut/bas sur chaque image pour définir l'ordre exact avant l'export.",
      },
      {
        q: "Quelle taille de page est utilisée ?",
        a: "Chaque page est dimensionnée à celle de son image, il n'y a donc ni marges disgracieuses ni recadrage.",
      },
      {
        q: "Are my images uploaded to create the PDF?",
        a: "Non. Le PDF est assemblé localement dans votre navigateur avec pdf-lib, vos images ne quittent donc jamais votre appareil.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC en JPG",
    tagline: "Convertissez les photos HEIC de l'iPhone en JPG.",
    title: "Convertisseur HEIC en JPG — photos d'iPhone en JPG (basé sur le navigateur)",
    description:
      "Convertissez les photos HEIC de votre iPhone en JPG dans le navigateur. Conversion au mieux et entièrement privée — les fichiers ne quittent jamais votre appareil.",
    h1: "Convertisseur HEIC en JPG",
    intro:
      "Convertissez les photos HEIC d'Apple en images JPG universellement prises en charge. Le décodage HEIC dans le navigateur se fait au mieux et dépend de votre navigateur et de votre appareil.",
    howItWorks: [
      "Téléversez une ou plusieurs photos .heic.",
      "Nous tentons de les décoder dans votre navigateur.",
      "Convertissez en JPG.",
      "Téléchargez les résultats.",
    ],
    faqs: [
      {
        q: "Pourquoi la conversion HEIC peut-elle échouer ?",
        a: "Le HEIC n'est pas décodable nativement dans tous les navigateurs. Nous utilisons une bibliothèque au mieux, mais certains fichiers peuvent ne pas se convertir.",
      },
      {
        q: "Will I lose quality converting HEIC to JPG?",
        a: "Il y a un léger changement car le JPG est avec perte, mais c'est visuellement négligeable pour les photos du quotidien et vous obtenez un fichier universellement compatible.",
      },
      {
        q: "Are my photos uploaded?",
        a: "Non. La conversion est tentée entièrement dans votre navigateur, vos photos ne quittent donc jamais votre appareil.",
      },
    ],
  },
  "merge-pdf": {
    name: "Fusionner des PDF",
    tagline: "Combinez plusieurs PDF en un seul.",
    title: "Fusionner des PDF — combiner des fichiers PDF en ligne (gratuit, privé)",
    description:
      "Fusionnez plusieurs fichiers PDF en un seul document dans votre navigateur. Réorganisez les fichiers avant de les combiner. Gratuit, rapide et privé.",
    h1: "Fusionner des PDF",
    intro:
      "Combinez plusieurs PDF en un seul document. Ajoutez vos fichiers, glissez-les dans l'ordre voulu et exportez un seul PDF fusionné — le tout localement dans votre navigateur.",
    howItWorks: [
      "Téléversez deux fichiers PDF ou plus.",
      "Réorganisez-les dans l'ordre souhaité.",
      "Cliquez sur Fusionner les PDF.",
      "Téléchargez votre document combiné.",
    ],
    faqs: [
      {
        q: "Y a-t-il une limite au nombre de PDF que je peux fusionner ?",
        a: "Il n'y a aucune limite serveur. Les limites pratiques dépendent de la mémoire de votre appareil et de la taille totale des fichiers.",
      },
      {
        q: "Mes PDF sont-ils téléversés ?",
        a: "Non. La fusion est réalisée localement avec pdf-lib. Vos documents ne quittent jamais votre appareil.",
      },
      {
        q: "Will merging change the quality of my PDFs?",
        a: "Non. Les pages sont copiées telles quelles dans le nouveau document, le texte, les images et la résolution sont donc préservés à l'identique.",
      },
    ],
  },
  "split-pdf": {
    name: "Diviser un PDF",
    tagline: "Extrayez des plages de pages dans un nouveau PDF.",
    title: "Diviser un PDF — extraire des pages et des plages de pages en ligne (gratuit)",
    description:
      "Divisez un PDF en sélectionnant des plages de pages et exportez-les dans un nouveau document. Tout s'exécute entièrement dans votre navigateur — privé et gratuit.",
    h1: "Diviser un PDF",
    intro:
      "Extrayez des pages ou des plages précises d'un PDF vers un nouveau fichier. Saisissez des plages comme 1-3, 5, 8-10 et exportez exactement les pages dont vous avez besoin.",
    howItWorks: [
      "Téléversez un seul PDF.",
      "Saisissez les plages de pages à conserver (par ex. 1-3, 5, 8-10).",
      "Cliquez sur Diviser le PDF.",
      "Téléchargez le nouveau document ne contenant que ces pages.",
    ],
    faqs: [
      {
        q: "Quel format de plage dois-je utiliser ?",
        a: "Utilisez des virgules et des tirets, comme 1-3, 5, 8-10. Les pages sont exportées dans l'ordre où vous les indiquez.",
      },
      {
        q: "Can I extract a single page?",
        a: "Oui. Saisissez simplement ce numéro de page (par exemple, 4) pour exporter un PDF d'une seule page.",
      },
      {
        q: "Are my PDFs uploaded to split them?",
        a: "Non. La division a lieu localement dans votre navigateur avec pdf-lib ; votre fichier ne quitte jamais votre appareil.",
      },
    ],
  },
  "rotate-pdf": {
    name: "Pivoter un PDF",
    tagline: "Pivotez des pages sélectionnées ou l'ensemble du PDF.",
    title: "Pivoter un PDF — faire tourner les pages de 90/180/270° en ligne (gratuit)",
    description:
      "Faites pivoter toutes les pages ou des pages précises d'un PDF de 90, 180 ou 270 degrés. Rotation de PDF gratuite, privée et dans le navigateur.",
    h1: "Pivoter un PDF",
    intro:
      "Corrigez les pages de travers ou à l'envers. Faites pivoter l'ensemble du PDF ou seulement les pages de votre choix, puis exportez le fichier corrigé.",
    howItWorks: [
      "Téléversez un seul PDF.",
      "Choisissez l'angle de rotation et les pages à faire pivoter.",
      "Cliquez sur Pivoter le PDF.",
      "Téléchargez le document pivoté.",
    ],
    faqs: [
      {
        q: "Puis-je faire pivoter seulement certaines pages ?",
        a: "Oui. Saisissez des numéros de page ou des plages précis, ou laissez le champ vide pour faire pivoter toutes les pages.",
      },
      {
        q: "Does rotating reduce quality?",
        a: "Non. La rotation ne change que l'orientation de chaque page, le contenu reste donc identique pixel pour pixel.",
      },
      {
        q: "Are my files uploaded?",
        a: "Non. La rotation est réalisée localement dans votre navigateur ; votre PDF ne quitte jamais votre appareil.",
      },
    ],
  },
  "pdf-to-images": {
    name: "PDF en images",
    tagline: "Exportez chaque page d'un PDF en PNG.",
    title: "PDF en images — convertir les pages d'un PDF en PNG (basé sur le navigateur)",
    description:
      "Convertissez chaque page d'un PDF en image PNG, directement dans votre navigateur. Privé et gratuit.",
    h1: "PDF en images",
    intro:
      "Affichez chaque page d'un PDF comme une image que vous pouvez télécharger. Utile pour des miniatures, des aperçus ou pour coller des pages dans d'autres applications.",
    howItWorks: [
      "Téléversez un seul PDF.",
      "Nous affichons chaque page dans votre navigateur.",
      "Exportez les pages en images PNG.",
      "Téléchargez les résultats.",
    ],
    faqs: [
      {
        q: "Mes fichiers sont-ils téléversés ?",
        a: "Non. Le rendu utilise pdf.js localement dans votre navigateur.",
      },
      {
        q: "What resolution are the exported images?",
        a: "Les pages sont affichées en haute résolution, adaptée au partage et aux aperçus. Les pages plus grandes produisent des fichiers PNG plus volumineux.",
      },
      {
        q: "Can I get JPGs instead of PNGs?",
        a: "Cet outil exporte en PNG pour une qualité optimale. Pour obtenir des JPG, passez ensuite les PNG dans notre Convertisseur d'images.",
      },
    ],
  },
  "organize-pdf": {
    name: "Organiser un PDF",
    tagline: "Supprimez et réorganisez les pages d'un PDF.",
    title: "Organiser un PDF — supprimer et réorganiser des pages en ligne (basé sur le navigateur)",
    description:
      "Supprimez les pages indésirables et réorganisez le reste d'un PDF dans votre navigateur. Privé et gratuit.",
    h1: "Organiser les pages d'un PDF",
    intro:
      "Mettez de l'ordre dans un PDF en supprimant les pages dont vous n'avez pas besoin et en glissant les autres dans le bon ordre.",
    howItWorks: [
      "Téléversez un seul PDF.",
      "Supprimez les pages dont vous ne voulez pas.",
      "Réorganisez les pages restantes.",
      "Exportez le PDF organisé.",
    ],
    faqs: [
      {
        q: "Le fichier d'origine est-il modifié ?",
        a: "Non. Un nouveau PDF est généré ; votre fichier d'origine reste intact.",
      },
      {
        q: "Are my files uploaded?",
        a: "Non. La réorganisation et la suppression des pages ont lieu localement dans votre navigateur ; votre PDF ne quitte jamais votre appareil.",
      },
      {
        q: "What if I delete the wrong page?",
        a: "Votre fichier d'origine n'est jamais modifié, il vous suffit donc de recommencer avec lui si vous supprimez une page par erreur.",
      },
    ],
  },
  "add-page-numbers": {
    name: "Ajouter des numéros de page",
    tagline: "Apposez des numéros de page sur un PDF.",
    title: "Ajouter des numéros de page à un PDF — en ligne et privé (basé sur le navigateur)",
    description:
      "Ajoutez des numéros de page à un document PDF dans votre navigateur. Choisissez la position et le format. Privé et gratuit.",
    h1: "Ajouter des numéros de page à un PDF",
    intro:
      "Apposez des numéros de page nets et cohérents sur chaque page de votre PDF, sans aucun téléversement.",
    howItWorks: [
      "Téléversez un seul PDF.",
      "Choisissez la position et le numéro de départ.",
      "Appliquez les numéros de page.",
      "Téléchargez le PDF numéroté.",
    ],
    faqs: [
      {
        q: "Puis-je choisir où apparaissent les numéros ?",
        a: "Oui — vous pourrez choisir un coin ou le centre du pied de page.",
      },
      {
        q: "Can I start numbering from a specific number?",
        a: "Oui. Définissez le numéro de départ — pratique lorsque votre document fait suite à un autre fichier.",
      },
      {
        q: "Are my files uploaded?",
        a: "Non. Les numéros de page sont apposés localement dans votre navigateur ; votre PDF ne quitte jamais votre appareil.",
      },
    ],
  },
  "compress-pdf": {
    name: "Compresser un PDF",
    tagline: "Réduisez la taille d'un fichier PDF.",
    title: "Compresser un PDF — réduire la taille d'un fichier PDF en ligne (gratuit, dans le navigateur)",
    description:
      "Compressez des fichiers PDF pour réduire leur taille, directement dans votre navigateur. Idéal pour les PDF numérisés ou riches en images. Gratuit et privé.",
    h1: "Compresser un PDF",
    intro:
      "Réduisez la taille des PDF volumineux pour faciliter leur partage et leur envoi par e-mail. Cela fonctionne en rastérisant les pages ; c'est donc le plus efficace sur les documents numérisés ou riches en images — et tout s'exécute entièrement dans votre navigateur.",
    howItWorks: [
      "Téléversez un PDF.",
      "Choisissez un niveau de compression (fort, équilibré ou léger).",
      "Cliquez sur Compresser — les pages sont réaffichées et réenregistrées localement.",
      "Téléchargez le PDF allégé et comparez la taille avant/après.",
    ],
    faqs: [
      {
        q: "Le texte restera-t-il sélectionnable ?",
        a: "Non. La compression rastérise chaque page (le texte fait alors partie de l'image), ce qui explique pourquoi elle réduit si bien les PDF numérisés mais n'est pas idéale pour les documents uniquement textuels.",
      },
      {
        q: "Pourquoi mon PDF n'a-t-il pas rétréci ?",
        a: "Les PDF uniquement textuels sont déjà compacts. Cet outil offre les gains les plus importants sur les numérisations et les PDF riches en photos.",
      },
      {
        q: "Are my files uploaded to compress them?",
        a: "Non. La compression s'exécute entièrement dans votre navigateur en réaffichant les pages localement ; votre PDF ne quitte jamais votre appareil.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF en Word",
    tagline: "Extrayez le texte d'un PDF dans un document Word modifiable.",
    title: "PDF en Word — convertir un PDF en DOCX modifiable (gratuit, dans le navigateur)",
    description:
      "Extrayez le texte d'un PDF dans un document Word (.docx) modifiable, dans votre navigateur. Au mieux, gratuit et privé.",
    h1: "PDF en Word",
    intro:
      "Extrayez le texte d'un PDF dans un document Word modifiable. Il s'agit d'une conversion au mieux — le texte est récupéré pour que vous puissiez le modifier, mais les colonnes, les images et la mise en page exacte ne sont pas conservées. Tout s'exécute entièrement dans votre navigateur.",
    howItWorks: [
      "Téléversez un PDF.",
      "Cliquez sur Convertir — le texte est extrait localement.",
      "Un fichier .docx est créé dans votre navigateur.",
      "Téléchargez-le et modifiez-le dans Word, Google Docs ou Pages.",
    ],
    faqs: [
      {
        q: "Ressemblera-t-il exactement à mon PDF ?",
        a: "Non. Cela extrait le texte dans un document modifiable ; les mises en page complexes, les colonnes et les images ne sont pas reproduites. C'est idéal lorsque vous avez surtout besoin de récupérer les mots.",
      },
      {
        q: "Mes fichiers sont-ils téléversés ?",
        a: "Non — l'extraction et le fichier .docx sont produits entièrement dans votre navigateur.",
      },
      {
        q: "Can I edit the result?",
        a: "Oui. Vous obtenez un fichier .docx standard que vous pouvez ouvrir et modifier dans Word, Google Docs ou Pages.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word en PDF",
    tagline: "Convertissez un fichier .docx en PDF facile à partager.",
    title: "Word en PDF — convertir un DOCX en PDF en ligne (gratuit, dans le navigateur)",
    description:
      "Convertissez un document Word (.docx) en PDF facile à partager dans votre navigateur. Au mieux, gratuit et privé.",
    h1: "Word en PDF",
    intro:
      "Transformez un fichier Word .docx en PDF que vous pouvez partager. Le texte et l'enchaînement des paragraphes sont conservés ; la mise en forme poussée, les images et les tableaux peuvent être simplifiés. Tout s'exécute dans votre navigateur.",
    howItWorks: [
      "Téléversez un document .docx.",
      "Cliquez sur Convertir — le document est lu localement.",
      "Un PDF est généré dans votre navigateur.",
      "Téléchargez votre PDF.",
    ],
    faqs: [
      {
        q: "Quels fichiers sont pris en charge ?",
        a: "Les fichiers Word .docx modernes. Le format .doc plus ancien n'est pas pris en charge — réenregistrez-le d'abord au format .docx.",
      },
      {
        q: "Correspondra-t-il exactement à la mise en page de Word ?",
        a: "Il s'agit d'une conversion au mieux axée sur le texte et les paragraphes ; la mise en forme complexe peut être simplifiée.",
      },
      {
        q: "Are my documents uploaded?",
        a: "Non. Le fichier .docx est lu et le PDF est généré entièrement dans votre navigateur ; votre fichier ne quitte jamais votre appareil.",
      },
    ],
  },
  "pdf-to-excel": {
    name: "PDF en Excel",
    tagline: "Extrayez le texte d'un PDF dans une feuille de calcul.",
    title: "PDF en Excel — convertir le texte d'un PDF en XLSX (gratuit, dans le navigateur)",
    description:
      "Extrayez le texte d'un PDF dans une feuille de calcul Excel (.xlsx) modifiable dans votre navigateur. Détection de tableaux au mieux, gratuit et privé.",
    h1: "PDF en Excel",
    intro:
      "Extrayez le texte d'un PDF dans une feuille de calcul. Chaque ligne devient une rangée, et les grands espaces sont traités comme des séparations de colonnes. Les tableaux réels varient, alors vérifiez le résultat — mais cela évite beaucoup de ressaisie. Tout s'exécute dans votre navigateur.",
    howItWorks: [
      "Téléversez un PDF.",
      "Cliquez sur Convertir — le texte est extrait localement.",
      "Un fichier .xlsx est créé, divisant les colonnes sur les grands espaces.",
      "Téléchargez-le et ajustez les colonnes dans Excel ou Google Sheets.",
    ],
    faqs: [
      {
        q: "Détectera-t-il parfaitement mes tableaux ?",
        a: "Pas toujours. Les PDF ne stockent pas de véritable structure de tableau ; les colonnes sont donc déduites de l'espacement. Attendez-vous à corriger certaines cellules, surtout dans les mises en page complexes.",
      },
      {
        q: "Est-ce privé ?",
        a: "Oui — l'extraction et la feuille de calcul sont produites entièrement dans votre navigateur.",
      },
      {
        q: "Which spreadsheet format do I get?",
        a: "Un fichier .xlsx standard que vous pouvez ouvrir dans Excel, Google Sheets ou Numbers.",
      },
    ],
  },
  "pdf-to-powerpoint": {
    name: "PDF en PowerPoint",
    tagline: "Transformez chaque page d'un PDF en diapositive.",
    title: "PDF en PowerPoint — convertir un PDF en PPTX (gratuit, dans le navigateur)",
    description:
      "Convertissez les pages d'un PDF en diapositives PowerPoint (.pptx) dans votre navigateur. Chaque page devient une image plein écran. Gratuit et privé.",
    h1: "PDF en PowerPoint",
    intro:
      "Transformez un PDF en présentation PowerPoint où chaque page devient une diapositive. Les diapositives ressemblent exactement au PDF (chaque page est placée comme une image plein écran), ce qui est parfait pour présenter — même si le texte qu'elles contiennent n'est pas modifiable individuellement. Tout s'exécute dans votre navigateur.",
    howItWorks: [
      "Téléversez un PDF.",
      "Cliquez sur Convertir — chaque page est affichée localement.",
      "Un fichier .pptx est créé avec une diapositive par page.",
      "Téléchargez-le et ouvrez-le dans PowerPoint, Keynote ou Google Slides.",
    ],
    faqs: [
      {
        q: "Puis-je modifier le texte des diapositives ?",
        a: "Pas directement — chaque diapositive est une image haute résolution de la page. Cela conserve un rendu identique au PDF.",
      },
      {
        q: "Est-ce privé ?",
        a: "Oui — les pages sont affichées et le fichier .pptx est créé entièrement dans votre navigateur.",
      },
      {
        q: "Which file format do I get?",
        a: "Un fichier .pptx standard que vous pouvez ouvrir dans PowerPoint, Keynote ou Google Slides.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR PDF",
    tagline: "Extrayez le texte de PDF et d'images numérisés.",
    title: "OCR PDF — PDF numérisé et image en texte (gratuit, dans le navigateur)",
    description:
      "Reconnaissez le texte des PDF et des images numérisés et copiez-le ou téléchargez-le en texte brut. Tout s'exécute entièrement dans votre navigateur — gratuit et privé.",
    h1: "OCR — PDF numérisé et image en texte",
    intro:
      "Extrayez le texte de documents numérisés, de photos et de PDF basés sur des images grâce à l'OCR sur l'appareil. Tout s'exécute localement dans votre navigateur, vos documents restent donc privés. Langue anglaise.",
    howItWorks: [
      "Téléversez un PDF numérisé ou des images (PNG/JPG).",
      "Cliquez sur Extraire le texte — la première exécution télécharge le moteur de reconnaissance (~10 Mo).",
      "Chaque page est lue localement sur votre appareil.",
      "Copiez le texte ou téléchargez-le sous forme de fichier .txt.",
    ],
    faqs: [
      {
        q: "L'OCR s'exécute-t-il dans mon navigateur ?",
        a: "Oui — il utilise Tesseract (WebAssembly) entièrement sur votre appareil. Vos fichiers ne sont jamais téléversés.",
      },
      {
        q: "Quelles langues sont prises en charge ?",
        a: "Actuellement l'anglais. Le moteur télécharge son modèle de langue à la première utilisation, puis le met en cache.",
      },
      {
        q: "Pourquoi la première exécution est-elle lente ?",
        a: "Le moteur de reconnaissance et le modèle anglais (~10 Mo) se téléchargent une seule fois à la première utilisation. Ensuite, c'est bien plus rapide.",
      },
    ],
  },
  "edit-pdf-text": {
    name: "Modifier le texte d'un PDF",
    tagline: "Extrayez, modifiez et reconstruisez le texte d'un PDF.",
    title: "Modifier le texte d'un PDF — extraire, modifier et reconstruire (gratuit, dans le navigateur)",
    description:
      "Extrayez le texte d'un PDF, modifiez-le page par page et reconstruisez un PDF texte propre — le tout dans votre navigateur. Gratuit et privé.",
    h1: "Modifier le texte d'un PDF",
    intro:
      "Corrigez les fautes de frappe et changez la formulation d'un PDF. Cela extrait le texte pour que vous puissiez le modifier page par page, puis reconstruit un PDF propre, uniquement textuel. Les polices, images et mises en page exactes d'origine ne sont pas conservées — c'est l'idéal lorsque vous avez surtout besoin de changer les mots. Tout s'exécute dans votre navigateur.",
    howItWorks: [
      "Téléversez un PDF.",
      "Modifiez le texte extrait dans la zone de chaque page.",
      "Cliquez sur Reconstruire — un nouveau PDF texte est généré localement.",
      "Téléchargez votre PDF modifié.",
    ],
    faqs: [
      {
        q: "Conserve-t-il la conception d'origine ?",
        a: "Non. Les PDF stockent le texte sous forme de glyphes positionnés, et non de paragraphes modifiables ; une véritable modification sur place n'est donc pas possible gratuitement dans le navigateur. Cela reconstruit plutôt un PDF texte propre à partir de vos modifications.",
      },
      {
        q: "Mes fichiers sont-ils téléversés ?",
        a: "Non — l'extraction et la reconstruction du PDF ont lieu entièrement sur votre appareil.",
      },
      {
        q: "Which PDFs work best?",
        a: "Les PDF basés sur du texte, lorsque vous avez surtout besoin de corriger la formulation. Les PDF numérisés ou uniquement composés d'images n'ont aucun texte extractible — lancez d'abord l'OCR.",
      },
    ],
  },
};
export default fr;
