import type { Messages } from "./en";
import type { DeepPartial } from "./types";

const de: DeepPartial<Messages> = {
  nav: {
    pdf: "PDF",
    image: "Bild",
    convert: "Konvertieren",
    language: "Sprache",
  },
  footer: {
    tagline: "Private Datei-Tools direkt im Browser",
    home: "Startseite",
    privacy: "Datenschutz",
    terms: "AGB",
    contact: "Kontakt",
    about: "Über uns",
    support: "Spendier mir einen Kaffee",
    recommended: "Empfohlene Tools",
    pcloud: "pCloud — Cloud-Speicher",
  },
  home: {
    title: "Kostenlose, private Datei-Tools",
    subtitle:
      "PDFs und Bilder konvertieren, komprimieren und zusammenführen — direkt in Ihrem Browser. Nichts wird hochgeladen. Ihre Dateien verlassen niemals Ihr Gerät.",
    badge: "🔒 100 % im Browser · Keine Anmeldung · Keine Dateispeicherung",
    toolsCount: "{count} Tools und es werden mehr.",
  },
  categories: {
    pdf: "PDF-Tools",
    image: "Bild-Tools",
    convert: "Konvertieren",
  },
  tool: {
    trust: "100 % in Ihrem Browser · Dateien werden nie hochgeladen · keine Anmeldung",
    home: "Startseite",
    howItWorks: "So funktioniert es",
    faq: "Häufig gestellte Fragen",
    related: "Verwandte Tools",
    privateHeading: "100 % privat",
    privateBody:
      "Alles läuft in Ihrem Browser über die Rechenleistung Ihres eigenen Geräts. Keine Uploads, keine Speicherung, keine Anmeldung.",
  },
  privacyNote:
    "Ihre Dateien werden in Ihrem Browser verarbeitet und verlassen niemals Ihr Gerät.",
  widgets: {
    dropTitleMulti: "Dateien hier hinein ziehen und ablegen",
    dropTitleSingle: "Datei hier hinein ziehen und ablegen",
    browse: "oder klicken zum Durchsuchen",
    remove: "Entfernen",
    moveUp: "Nach oben",
    moveDown: "Nach unten",
    working: "Wird verarbeitet…",
    loadingTool: "Tool wird geladen…",
    ready: "Ihre Datei ist fertig",
    download: "Herunterladen",
    startOver: "Von vorn beginnen",
    was: "war",
    smaller: "kleiner",
    larger: "größer",
    dismiss: "Schließen",
    bestEffort: "Bestmögliche Konvertierung:",
    comingSoonBanner: "Dieses Tool ist in Entwicklung und noch nicht verfügbar.",
    betaConversion: "🚧 Beta — diese Konvertierung kommt bald.",
    emailDemo: "An diesem Tool arbeiten wir noch. Hinterlassen Sie Ihre E-Mail-Adresse, und wir benachrichtigen Sie, sobald es fertig ist.",
    emailPlaceholder: "you@example.com",
    notifyMe: "Benachrichtigen",
    notifyThanks: "Danke! Wir melden uns. (Dies ist eine UI-Demo und wird nicht gespeichert.)",
  },
  affiliate: {
    disclosure: "Einige Links sind Partner-Links — wenn Sie darüber etwas kaufen, erhalten wir möglicherweise eine kleine Provision, ohne Mehrkosten für Sie.",
    ctaHeading: "Brauchen Sie jedes Mal eine perfekte Konvertierung?",
    ctaBody: "Dieses Tool im Browser ist kostenlos und liefert das bestmögliche Ergebnis. Für pixelgenaue Resultate bei komplexen oder großen Dateien kann eine spezielle Desktop-App mehr leisten.",
    ctaButton: "Empfohlenes Tool ansehen",
    pcloud: {
      heading: "Bewahren Sie Ihre Dateien sicher auf",
      body: "Möchten Sie Ihre konvertierten Dateien speichern? Sichern Sie sich lebenslangen Cloud-Speicher mit pCloud — einmal zahlen, für immer behalten.",
      button: "pCloud Lifetime holen",
    },
  },
  consent: {
    message: "Wir verwenden Cookies für Analysen und künftig auch für Werbung. Sie können nicht notwendige Cookies akzeptieren oder ablehnen.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    learnMore: "Datenschutzerklärung",
  },
  suggest: {
    prompt: "Diese Website auf {lang} ansehen?",
    accept: "Zu {lang} wechseln",
    dismiss: "Nein danke",
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Dieses Tool oder diese Seite gibt es (noch) nicht.",
    cta: "Zurück zu allen Tools",
  },
  legal: {
    privacy: {
      title: "Datenschutzerklärung",
      updated: "Zuletzt aktualisiert: Juni 2026",
      sections: [
        {
          heading: "Die Kurzfassung",
          body: "Ihre Dateien werden in Ihrem Browser verarbeitet und verlassen niemals Ihr Gerät. Wir laden sie nicht hoch, wir speichern sie nicht und wir können sie nicht sehen.",
        },
        {
          heading: "So funktioniert die Dateiverarbeitung",
          body: "Jedes Tool auf FileTools läuft vollständig als clientseitiges JavaScript. Wenn Sie eine Datei auswählen, wird sie in den Speicher Ihres Browsers eingelesen, auf Ihrem eigenen Gerät verarbeitet und Ihnen als Download wieder angeboten. Es werden niemals Dateidaten an einen Server übertragen.",
        },
        {
          heading: "Cookies",
          body: "Wir verwenden Cookies für zwei Zwecke: um Ihre Einstellungen zu speichern (etwa Ihre gewählte Sprache) und — erst nachdem Sie unser Cookie-Banner akzeptiert haben — für Analysen und Werbung. Sie können nicht notwendige Cookies ablehnen, und jedes Tool funktioniert weiterhin vollständig.",
        },
        {
          heading: "Werbung",
          body: "Wir zeigen Anzeigen von Google AdSense, um FileTools kostenlos zu halten. Google und seine Partner verwenden möglicherweise Cookies, um Anzeigen auf Grundlage Ihrer früheren Besuche auf dieser und anderen Websites auszuspielen. Anzeigen werden erst geladen, nachdem Sie Cookies akzeptiert haben. Personalisierte Werbung können Sie in den Anzeigeneinstellungen von Google steuern (adssettings.google.com).",
        },
        {
          heading: "Affiliate-Links",
          body: "Einige Seiten enthalten Affiliate-Links zu Produkten von Drittanbietern, etwa Desktop-Software. Wenn Sie auf einen solchen Link klicken und einen Kauf tätigen, erhalten wir möglicherweise eine Provision — ohne Mehrkosten für Sie. Diese Links werden auf der Seite gekennzeichnet und beeinflussen niemals unsere kostenlosen Tools im Browser.",
        },
        {
          heading: "Analyse",
          body: "Wir verwenden möglicherweise datenschutzfreundliche, aggregierte Analysen, um zu verstehen, welche Tools beliebt sind. Dies umfasst niemals die Inhalte Ihrer Dateien, die uns niemals übermittelt werden. Wir verkaufen keine personenbezogenen Daten.",
        },
        {
          heading: "Ihre Wahlmöglichkeiten",
          body: "Sie können nicht notwendige Cookies jederzeit über das Cookie-Banner akzeptieren oder ablehnen und Ihre Browser-Einstellungen oder die Anzeigeneinstellungen von Google nutzen, um die Personalisierung von Werbung einzuschränken.",
        },
        {
          heading: "Kontakt",
          body: "Fragen zum Datenschutz? Siehe unsere Kontaktseite.",
        },
      ],
    },
    terms: {
      title: "Nutzungsbedingungen",
      updated: "Zuletzt aktualisiert: Juni 2026",
      sections: [
        {
          heading: "Zustimmung",
          body: "Durch die Nutzung von FileTools stimmen Sie diesen Bedingungen zu. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.",
        },
        {
          heading: "Der Dienst",
          body: "FileTools stellt kostenlose, browserbasierte Werkzeuge für die Arbeit mit PDF- und Bilddateien bereit. Die gesamte Verarbeitung findet auf Ihrem Gerät statt. Der Dienst wird „wie besehen“ ohne jegliche Gewährleistung bereitgestellt.",
        },
        {
          heading: "Ihre Verantwortung",
          body: "Sie sind für die von Ihnen verarbeiteten Dateien und für Ihre eigenen Sicherungskopien verantwortlich. Da die Verarbeitung lokal erfolgt, übernehmen wir keine Verantwortung für Datenverluste, und Sie sollten stets eine Kopie Ihrer Originaldateien aufbewahren.",
        },
        {
          heading: "Zulässige Nutzung",
          body: "Verwenden Sie FileTools nicht, um Inhalte zu verarbeiten, an denen Sie keine Rechte besitzen, oder auf eine Weise, die gegen geltendes Recht verstößt.",
        },
        {
          heading: "Haftungsbeschränkung",
          body: "Soweit gesetzlich zulässig, haften FileTools und seine Urheber nicht für Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung des Dienstes entstehen.",
        },
        {
          heading: "Änderungen",
          body: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung der Website bedeutet, dass Sie die jeweils aktuellen Bedingungen akzeptieren.",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      intro:
        "Einen Fehler gefunden, einen Funktionswunsch oder wünschen Sie sich ein neues Tool? Wir freuen uns, von Ihnen zu hören.",
      emailHeading: "E-Mail",
      emailBody: "Erreichen Sie uns unter hello@filetools.example.com.",
      filesHeading: "Ein Hinweis zu Dateien",
      filesBody:
        "Bitte senden Sie uns Ihre Dateien nicht per E-Mail. Jedes Tool läuft vollständig in Ihrem Browser, daher können wir nicht darauf zugreifen und benötigen sie auch nicht, um zu helfen.",
    },
    about: {
      title: "Über FileTools",
      intro:
        "FileTools ist eine kostenlose Sammlung datenschutzorientierter Tools für die Arbeit mit PDFs und Bildern — alle laufen vollständig in Ihrem Browser.",
      sections: [
        {
          heading: "Unsere Mission",
          body: "Wir möchten, dass alltägliche Dateiaufgaben — PDFs zusammenführen, Bilder konvertieren, Dateien komprimieren — schnell, kostenlos und privat sind, ohne dass Sie vertrauliche Dokumente auf den Server eines anderen hochladen müssen.",
        },
        {
          heading: "Was uns unterscheidet",
          body: "Jedes Tool läuft als clientseitiger Code auf Ihrem eigenen Gerät. Ihre Dateien verlassen niemals Ihren Browser, es gibt keine Anmeldung, und nichts wird gespeichert. Was Sie hier tun, bleibt auf Ihrem Computer.",
        },
        {
          heading: "Wie wir es kostenlos halten",
          body: "FileTools wird durch unaufdringliche Anzeigen und gelegentliche Affiliate-Links zu Tools finanziert, die wir wirklich nützlich finden. So können wir jedes Tool für alle kostenlos halten. Einzelheiten finden Sie in unserer Datenschutzerklärung.",
        },
        {
          heading: "Kontakt aufnehmen",
          body: "Haben Sie einen Fehler entdeckt, eine Idee oder wünschen Sie sich ein Tool, das es noch nicht gibt? Besuchen Sie unsere Kontaktseite — wir freuen uns, von Ihnen zu hören.",
        },
      ],
    },
  },
};

export default de;
