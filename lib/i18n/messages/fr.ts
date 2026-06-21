import type { Messages } from "./en";
import type { DeepPartial } from "./types";

const fr: DeepPartial<Messages> = {
  nav: {
    pdf: "PDF",
    image: "Image",
    convert: "Convertir",
    language: "Langue",
  },
  footer: {
    tagline: "Outils de fichiers privés, dans le navigateur",
    home: "Accueil",
    privacy: "Confidentialité",
    terms: "Conditions",
    contact: "Contact",
    about: "À propos",
    support: "Offrez-moi un café",
    recommended: "Outils recommandés",
    pcloud: "pCloud — stockage cloud",
  },
  home: {
    title: "Outils de fichiers gratuits et privés",
    subtitle:
      "Convertissez, compressez et combinez vos PDF et images — directement dans votre navigateur. Rien n'est téléversé. Vos fichiers ne quittent jamais votre appareil.",
    badge: "🔒 100 % dans le navigateur · Sans inscription · Aucun stockage de fichiers",
    toolsCount: "{count} outils, et d'autres à venir.",
  },
  categories: {
    pdf: "Outils PDF",
    image: "Outils image",
    convert: "Convertir",
  },
  tool: {
    trust: "100 % dans votre navigateur · fichiers jamais téléversés · sans inscription",
    home: "Accueil",
    howItWorks: "Comment ça marche",
    faq: "Questions fréquentes",
    related: "Outils associés",
    privateHeading: "100 % privé",
    privateBody:
      "Tout s'exécute dans votre navigateur, grâce à la puissance de calcul de votre propre appareil. Aucun téléversement, aucun stockage, aucune inscription.",
  },
  privacyNote:
    "Vos fichiers sont traités dans votre navigateur et ne quittent jamais votre appareil.",
  widgets: {
    dropTitleMulti: "Glissez-déposez vos fichiers ici",
    dropTitleSingle: "Glissez-déposez un fichier ici",
    browse: "ou cliquez pour parcourir",
    remove: "Supprimer",
    moveUp: "Monter",
    moveDown: "Descendre",
    working: "Traitement en cours…",
    loadingTool: "Chargement de l'outil…",
    ready: "Votre fichier est prêt",
    download: "Télécharger",
    startOver: "Recommencer",
    was: "était de",
    smaller: "plus petit",
    larger: "plus grand",
    dismiss: "Fermer",
    bestEffort: "Conversion au mieux :",
    comingSoonBanner: "Cet outil est en cours de développement et n'est pas encore disponible.",
    betaConversion: "🚧 Bêta — cette conversion arrive bientôt.",
    emailDemo: "Nous sommes encore en train de créer cet outil. Laissez-nous votre e-mail et nous vous préviendrons dès qu'il sera prêt.",
    emailPlaceholder: "you@example.com",
    notifyMe: "Me prévenir",
    notifyThanks: "Merci ! Nous vous tiendrons au courant. (Ceci est une démo d'interface et n'est pas enregistré.)",
  },
  affiliate: {
    disclosure: "Certains liens sont des liens partenaires — si vous achetez par leur intermédiaire, nous pouvons percevoir une petite commission, sans coût supplémentaire pour vous.",
    ctaHeading: "Besoin d'une conversion parfaite à chaque fois ?",
    ctaBody: "Cet outil en ligne est gratuit et fonctionne au mieux. Pour des résultats parfaits au pixel près sur des fichiers complexes ou volumineux, une application de bureau dédiée peut en faire davantage.",
    ctaButton: "Voir l'outil recommandé",
    pcloud: {
      heading: "Gardez vos fichiers en sécurité",
      body: "Vous voulez conserver vos fichiers convertis ? Obtenez un stockage cloud à vie avec pCloud — payez une fois, gardez pour toujours.",
      button: "Obtenir pCloud Lifetime",
    },
  },
  consent: {
    message: "Nous utilisons des cookies pour les statistiques et, à l'avenir, pour la publicité. Vous pouvez accepter ou refuser les cookies non essentiels.",
    accept: "Accepter",
    reject: "Refuser",
    learnMore: "Politique de confidentialité",
  },
  suggest: {
    prompt: "Afficher ce site en {lang} ?",
    accept: "Passer au {lang}",
    dismiss: "Non merci",
  },
  notFound: {
    title: "Page introuvable",
    body: "Cet outil ou cette page n'existe pas (encore).",
    cta: "Retour à tous les outils",
  },
  legal: {
    privacy: {
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : juin 2026",
      sections: [
        {
          heading: "En bref",
          body: "Vos fichiers sont traités dans votre navigateur et ne quittent jamais votre appareil. Nous ne les téléversons pas, nous ne les stockons pas et nous ne pouvons pas les voir.",
        },
        {
          heading: "Comment fonctionne le traitement des fichiers",
          body: "Chaque outil de FileTools s'exécute entièrement en JavaScript côté client. Lorsque vous sélectionnez un fichier, il est chargé dans la mémoire de votre navigateur, traité sur votre propre appareil, puis vous est proposé en téléchargement. Aucune donnée de fichier n'est jamais transmise à un serveur.",
        },
        {
          heading: "Cookies",
          body: "Nous utilisons des cookies pour deux raisons : mémoriser vos préférences (comme la langue que vous avez choisie) et — uniquement après que vous avez accepté notre bandeau de cookies — la mesure d'audience et la publicité. Vous pouvez refuser les cookies non essentiels et chaque outil continue de fonctionner pleinement.",
        },
        {
          heading: "Publicité",
          body: "Nous affichons des annonces de Google AdSense pour que FileTools reste gratuit. Google et ses partenaires peuvent utiliser des cookies pour diffuser des annonces en fonction de vos visites antérieures sur ce site et sur d'autres sites web. Les annonces ne se chargent qu'après que vous avez accepté les cookies. Vous pouvez gérer la publicité personnalisée dans les paramètres des annonces de Google (adssettings.google.com).",
        },
        {
          heading: "Liens affiliés",
          body: "Certaines pages contiennent des liens affiliés vers des produits tiers, tels que des logiciels de bureau. Si vous cliquez sur l'un d'eux et effectuez un achat, nous pouvons percevoir une commission, sans coût supplémentaire pour vous. Ces liens sont signalés sur la page et n'affectent jamais nos outils gratuits dans le navigateur.",
        },
        {
          heading: "Mesure d'audience",
          body: "Nous pouvons utiliser des statistiques d'audience agrégées et respectueuses de la vie privée pour savoir quels outils sont populaires. Cela n'inclut jamais le contenu de vos fichiers, qui ne nous sont jamais envoyés. Nous ne vendons pas vos données personnelles.",
        },
        {
          heading: "Vos choix",
          body: "Vous pouvez accepter ou refuser les cookies non essentiels à tout moment via le bandeau de cookies, et utiliser les paramètres de votre navigateur ou les paramètres des annonces de Google pour limiter la personnalisation de la publicité.",
        },
        {
          heading: "Contact",
          body: "Des questions sur la confidentialité ? Consultez notre page de contact.",
        },
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      updated: "Dernière mise à jour : juin 2026",
      sections: [
        {
          heading: "Acceptation",
          body: "En utilisant FileTools, vous acceptez ces conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le site.",
        },
        {
          heading: "Le service",
          body: "FileTools propose des utilitaires gratuits et basés sur le navigateur pour travailler avec des fichiers PDF et image. Tout le traitement a lieu sur votre appareil. Le service est fourni « tel quel », sans aucune garantie d'aucune sorte.",
        },
        {
          heading: "Votre responsabilité",
          body: "Vous êtes responsable des fichiers que vous traitez et de la conservation de vos propres sauvegardes. Comme le traitement a lieu localement, nous ne sommes pas responsables d'une éventuelle perte de données, et vous devez toujours conserver une copie de vos fichiers d'origine.",
        },
        {
          heading: "Utilisation acceptable",
          body: "N'utilisez pas FileTools pour traiter des contenus dont vous n'avez pas les droits, ni d'une manière contraire à la loi.",
        },
        {
          heading: "Limitation de responsabilité",
          body: "Dans toute la mesure permise par la loi, FileTools et ses auteurs ne sauraient être tenus responsables des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le service.",
        },
        {
          heading: "Modifications",
          body: "Nous pouvons mettre à jour ces conditions de temps à autre. La poursuite de l'utilisation du site vaut acceptation des conditions en vigueur.",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "Vous avez trouvé un bug, une idée de fonctionnalité ou souhaitez un nouvel outil ? Nous serions ravis d'avoir de vos nouvelles.",
      emailHeading: "E-mail",
      emailBody: "Contactez-nous à hello@filetools.example.com.",
      filesHeading: "Une remarque sur les fichiers",
      filesBody:
        "Merci de ne pas nous envoyer vos fichiers par e-mail. Chaque outil s'exécute entièrement dans votre navigateur ; nous ne pouvons donc pas y accéder et n'en aurons pas besoin pour vous aider.",
    },
    about: {
      title: "À propos de FileTools",
      intro:
        "FileTools est une collection gratuite d'outils axés sur la confidentialité pour travailler avec des PDF et des images — le tout fonctionnant entièrement dans votre navigateur.",
      sections: [
        {
          heading: "Notre mission",
          body: "Nous voulons que les tâches quotidiennes sur vos fichiers — fusionner des PDF, convertir des images, compresser des fichiers — soient rapides, gratuites et privées, sans vous obliger à téléverser des documents sensibles sur le serveur de quelqu'un d'autre.",
        },
        {
          heading: "Ce qui nous distingue",
          body: "Chaque outil s'exécute sous forme de code côté client sur votre propre appareil. Vos fichiers ne quittent jamais votre navigateur, il n'y a pas d'inscription et rien n'est stocké. Ce que vous faites ici reste sur votre ordinateur.",
        },
        {
          heading: "Comment nous restons gratuits",
          body: "FileTools est financé par des publicités discrètes et des liens affiliés occasionnels vers des outils que nous trouvons réellement utiles. Cela nous permet de garder chaque outil gratuit pour tout le monde. Consultez notre politique de confidentialité pour plus de détails.",
        },
        {
          heading: "Nous contacter",
          body: "Vous avez repéré un bug, une idée ou un outil que vous aimeriez voir exister ? Visitez notre page de contact — nous serions ravis d'avoir de vos nouvelles.",
        },
      ],
    },
  },
};

export default fr;
