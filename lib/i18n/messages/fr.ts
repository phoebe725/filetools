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
    disclosure: "Certains liens sur cette page sont des liens affiliés. Si vous achetez par leur intermédiaire, nous pouvons percevoir une commission, sans coût supplémentaire pour vous.",
    ctaHeading: "Besoin d'une conversion parfaite à chaque fois ?",
    ctaBody: "Cet outil en ligne est gratuit et fonctionne au mieux. Pour des résultats parfaits au pixel près sur des fichiers complexes ou volumineux, une application de bureau dédiée peut en faire davantage.",
    ctaButton: "Voir l'outil recommandé",
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
          heading: "Analyse d'audience et cookies",
          body: "Nous pouvons utiliser des statistiques d'audience agrégées et respectueuses de la vie privée pour savoir quels outils sont populaires. Nous ne vendons aucune donnée personnelle. Si de la publicité est ajoutée à l'avenir, cette politique sera mise à jour pour la décrire clairement.",
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
  },
};

export default fr;
