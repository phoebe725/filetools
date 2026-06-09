import { type Messages } from "./en";

const de: Messages = {
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
          heading: "Analyse und Cookies",
          body: "Wir verwenden möglicherweise datenschutzfreundliche, aggregierte Analysen, um zu verstehen, welche Tools beliebt sind. Wir verkaufen keine personenbezogenen Daten. Sollte künftig Werbung hinzukommen, wird diese Erklärung aktualisiert, um sie klar zu beschreiben.",
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
  },
};

export default de;
