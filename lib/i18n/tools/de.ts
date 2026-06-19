import type { ToolTranslations } from "../tool-translations";
const de: ToolTranslations = {
  "image-converter": {
    name: "Bildkonverter",
    tagline: "Zwischen PNG, JPG und WebP konvertieren.",
    title: "Bildkonverter — PNG zu JPG, JPG zu PNG, WebP (kostenlos, im Browser)",
    description:
      "Konvertieren Sie Bilder zwischen PNG, JPG und WebP direkt in Ihrem Browser. Kostenlos, schnell und privat — Ihre Dateien verlassen niemals Ihr Gerät.",
    h1: "Bildkonverter",
    intro:
      "Konvertieren Sie PNG-, JPG- und WebP-Bilder in jede Richtung, sofort und kostenlos. Alles läuft lokal in Ihrem Browser, sodass Ihre Bilder niemals hochgeladen werden.",
    howItWorks: [
      "Ziehen Sie Ihr Bild per Drag-and-drop herein oder klicken Sie, um eine Datei auszuwählen.",
      "Wählen Sie das Ausgabeformat (PNG, JPG oder WebP).",
      "Klicken Sie auf Konvertieren — die Verarbeitung erfolgt vollständig auf Ihrem Gerät.",
      "Laden Sie Ihr konvertiertes Bild herunter.",
    ],
    faqs: [
      {
        q: "Werden meine Bilder auf einen Server hochgeladen?",
        a: "Nein. Die Konvertierung erfolgt lokal in Ihrem Browser über die Canvas-API. Ihre Bilder verlassen niemals Ihr Gerät.",
      },
      {
        q: "Warum ist die AVIF-Option manchmal deaktiviert?",
        a: "Die AVIF-Kodierung hängt von Ihrem Browser ab. Wir erkennen die Unterstützung automatisch und deaktivieren Formate, die Ihr Browser nicht erzeugen kann.",
      },
      {
        q: "Geht beim Konvertieren in JPG die Transparenz verloren?",
        a: "Ja. JPG kennt keine Transparenz, daher werden transparente Bereiche mit Weiß gefüllt. Verwenden Sie PNG oder WebP, um die Transparenz zu erhalten.",
      },
    ],
  },
  "resize-image": {
    name: "Bild skalieren",
    tagline: "Bildabmessungen nach Breite oder Höhe ändern.",
    title: "Bild skalieren — Breite & Höhe online ändern (kostenlos, privat)",
    description:
      "Skalieren Sie Bilder nach Breite und Höhe in Ihrem Browser, mit der Option, das Seitenverhältnis beizubehalten. Kostenlos und privat — Dateien verlassen niemals Ihr Gerät.",
    h1: "Bild skalieren",
    intro:
      "Skalieren Sie jedes PNG-, JPG- oder WebP-Bild, indem Sie eine neue Breite und Höhe festlegen. Sperren Sie das Seitenverhältnis oder legen Sie exakte Abmessungen fest. Läuft vollständig in Ihrem Browser.",
    howItWorks: [
      "Laden Sie ein Bild hoch, indem Sie es hineinziehen oder zum Durchsuchen klicken.",
      "Geben Sie eine Zielbreite und/oder -höhe ein.",
      "Aktivieren Sie „Seitenverhältnis beibehalten“, um Verzerrungen zu vermeiden.",
      "Klicken Sie auf Skalieren und laden Sie das Ergebnis herunter.",
    ],
    faqs: [
      {
        q: "Verringert das Skalieren die Qualität?",
        a: "Das Verkleinern eines Bildes ist in der Regel sauber. Das Vergrößern über die Originalabmessungen hinaus kann unscharf wirken, da Pixel interpoliert werden.",
      },
      {
        q: "Kann ich das Seitenverhältnis beibehalten?",
        a: "Ja. Aktivieren Sie „Seitenverhältnis beibehalten“, und die andere Abmessung wird beim Tippen automatisch berechnet.",
      },
      {
        q: "Welche Bildformate kann ich skalieren?",
        a: "PNG, JPG und WebP. Das Ergebnis behält Ihr Originalformat bei, sofern Sie es nicht separat konvertieren.",
      },
    ],
  },
  "compress-image": {
    name: "Bild komprimieren",
    tagline: "JPG/WebP-Dateigröße mit einem Qualitätsregler verringern.",
    title: "Bild komprimieren — JPG- & WebP-Dateigröße verringern (kostenlos, im Browser)",
    description:
      "Komprimieren Sie JPG- und WebP-Bilder mit einem Qualitätsregler und sehen Sie die Dateigröße vorher/nachher. Kostenlos, privat und vollständig im Browser.",
    h1: "Bild komprimieren",
    intro:
      "Verringern Sie die Bilddateigröße mit einem einfachen Qualitätsregler und vergleichen Sie sofort die Größe vorher und nachher. Ideal für schnellere Websites und kleinere E-Mail-Anhänge.",
    howItWorks: [
      "Laden Sie ein JPG-, PNG- oder WebP-Bild hoch.",
      "Ziehen Sie den Qualitätsregler, um Größe und Qualität auszubalancieren.",
      "Beobachten Sie, wie sich die geschätzte Ausgabegröße aktualisiert.",
      "Laden Sie das komprimierte Bild herunter.",
    ],
    faqs: [
      {
        q: "Welche Formate lassen sich am besten komprimieren?",
        a: "JPG und WebP unterstützen verlustbehaftete Qualitätssteuerung. PNG ist verlustfrei und wird daher für spürbare Einsparungen als JPG oder WebP neu kodiert.",
      },
      {
        q: "Gibt es eine Dateigrößenbeschränkung?",
        a: "Es gibt keine feste Serverbeschränkung, da nichts hochgeladen wird, aber sehr große Bilder können auf Geräten mit wenig Arbeitsspeicher langsam sein.",
      },
      {
        q: "Ändert das Komprimieren die Bildabmessungen?",
        a: "Nein. Die Komprimierung verringert die Dateigröße durch Anpassung von Qualität und Kodierung; Breite und Höhe bleiben gleich. Verwenden Sie Bild skalieren, wenn Sie zusätzlich kleinere Abmessungen möchten.",
      },
    ],
  },
  "images-to-pdf": {
    name: "Bilder zu PDF",
    tagline: "JPG/PNG/WebP-Bilder zu einem PDF zusammenführen.",
    title: "Bilder zu PDF — JPG & PNG online in PDF umwandeln (kostenlos)",
    description:
      "Führen Sie mehrere JPG-, PNG- oder WebP-Bilder in Ihrem Browser zu einem einzigen PDF zusammen. Ordnen Sie die Seiten vor dem Export neu. Kostenlos und privat.",
    h1: "Bilder zu PDF",
    intro:
      "Verwandeln Sie eine Reihe von Bildern in ein einziges, teilbares PDF. Fügen Sie beliebig viele JPG-, PNG- oder WebP-Dateien hinzu, ordnen Sie sie per Drag-and-drop um und exportieren Sie ein sauberes Dokument.",
    howItWorks: [
      "Laden Sie ein oder mehrere Bilder hoch.",
      "Ziehen Sie sie in die gewünschte Seitenreihenfolge.",
      "Klicken Sie auf PDF erstellen — jedes Bild wird zu einer Seite.",
      "Laden Sie das zusammengeführte PDF herunter.",
    ],
    faqs: [
      {
        q: "Kann ich die Seitenreihenfolge bestimmen?",
        a: "Ja. Verwenden Sie die Auf-/Ab-Steuerung bei jedem Bild, um vor dem Export die genaue Reihenfolge festzulegen.",
      },
      {
        q: "Welches Seitenformat wird verwendet?",
        a: "Jede Seite wird an ihr Bild angepasst, sodass es keine unschönen Ränder oder Beschneidungen gibt.",
      },
      {
        q: "Werden meine Bilder hochgeladen, um das PDF zu erstellen?",
        a: "Nein. Das PDF wird lokal in Ihrem Browser mit pdf-lib zusammengestellt, sodass Ihre Bilder niemals Ihr Gerät verlassen.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC zu JPG",
    tagline: "iPhone-HEIC-Fotos in JPG umwandeln.",
    title: "HEIC-zu-JPG-Konverter — iPhone-Fotos in JPG (browserbasiert)",
    description:
      "Konvertieren Sie HEIC-Fotos von Ihrem iPhone im Browser in JPG. Bestmögliche, vollständig private Konvertierung — Dateien verlassen niemals Ihr Gerät.",
    h1: "HEIC-zu-JPG-Konverter",
    intro:
      "Konvertieren Sie Apple-HEIC-Fotos in universell unterstützte JPG-Bilder. Die HEIC-Dekodierung im Browser erfolgt nach bestem Bemühen und hängt von Ihrem Browser und Gerät ab.",
    howItWorks: [
      "Laden Sie ein oder mehrere .heic-Fotos hoch.",
      "Wir versuchen, sie in Ihrem Browser zu dekodieren.",
      "Konvertieren in JPG.",
      "Laden Sie die Ergebnisse herunter.",
    ],
    faqs: [
      {
        q: "Warum könnte die HEIC-Konvertierung fehlschlagen?",
        a: "HEIC lässt sich nicht in jedem Browser nativ dekodieren. Wir verwenden eine Bibliothek nach bestem Bemühen, aber einige Dateien lassen sich möglicherweise nicht konvertieren.",
      },
      {
        q: "Verliere ich Qualität bei der Konvertierung von HEIC zu JPG?",
        a: "Es gibt eine geringe Veränderung, da JPG verlustbehaftet ist, aber sie ist für alltägliche Fotos visuell vernachlässigbar und liefert Ihnen eine universell kompatible Datei.",
      },
      {
        q: "Werden meine Fotos hochgeladen?",
        a: "Nein. Die Konvertierung wird vollständig in Ihrem Browser versucht, sodass Ihre Fotos niemals Ihr Gerät verlassen.",
      },
    ],
  },
  "merge-pdf": {
    name: "PDF zusammenführen",
    tagline: "Mehrere PDFs zu einem zusammenführen.",
    title: "PDF zusammenführen — PDF-Dateien online kombinieren (kostenlos, privat)",
    description:
      "Führen Sie mehrere PDF-Dateien in Ihrem Browser zu einem Dokument zusammen. Ordnen Sie die Dateien vor dem Kombinieren neu. Kostenlos, schnell und privat.",
    h1: "PDF zusammenführen",
    intro:
      "Kombinieren Sie mehrere PDFs zu einem einzigen Dokument. Fügen Sie Ihre Dateien hinzu, ziehen Sie sie in die gewünschte Reihenfolge und exportieren Sie ein zusammengeführtes PDF — alles lokal in Ihrem Browser.",
    howItWorks: [
      "Laden Sie zwei oder mehr PDF-Dateien hoch.",
      "Ordnen Sie sie in die gewünschte Reihenfolge.",
      "Klicken Sie auf PDF zusammenführen.",
      "Laden Sie Ihr kombiniertes Dokument herunter.",
    ],
    faqs: [
      {
        q: "Gibt es eine Begrenzung, wie viele PDFs ich zusammenführen kann?",
        a: "Es gibt keine Serverbeschränkung. Praktische Grenzen hängen vom Arbeitsspeicher Ihres Geräts und der gesamten Dateigröße ab.",
      },
      {
        q: "Werden meine PDFs hochgeladen?",
        a: "Nein. Das Zusammenführen erfolgt lokal mit pdf-lib. Ihre Dokumente verlassen niemals Ihr Gerät.",
      },
      {
        q: "Ändert das Zusammenführen die Qualität meiner PDFs?",
        a: "Nein. Die Seiten werden unverändert in das neue Dokument kopiert, sodass Text, Bilder und Auflösung exakt erhalten bleiben.",
      },
    ],
  },
  "split-pdf": {
    name: "PDF teilen",
    tagline: "Seitenbereiche in ein neues PDF extrahieren.",
    title: "PDF teilen — Seiten & Seitenbereiche online extrahieren (kostenlos)",
    description:
      "Teilen Sie ein PDF, indem Sie Seitenbereiche auswählen und sie als neues Dokument exportieren. Läuft vollständig in Ihrem Browser — privat und kostenlos.",
    h1: "PDF teilen",
    intro:
      "Ziehen Sie bestimmte Seiten oder Bereiche aus einem PDF in eine neue Datei. Geben Sie Bereiche wie 1-3, 5, 8-10 ein und exportieren Sie genau die Seiten, die Sie benötigen.",
    howItWorks: [
      "Laden Sie ein einzelnes PDF hoch.",
      "Geben Sie die zu behaltenden Seitenbereiche ein (z. B. 1-3, 5, 8-10).",
      "Klicken Sie auf PDF teilen.",
      "Laden Sie das neue Dokument mit nur diesen Seiten herunter.",
    ],
    faqs: [
      {
        q: "Welches Bereichsformat sollte ich verwenden?",
        a: "Verwenden Sie Kommas und Bindestriche, etwa 1-3, 5, 8-10. Die Seiten werden in der von Ihnen aufgeführten Reihenfolge exportiert.",
      },
      {
        q: "Kann ich eine einzelne Seite extrahieren?",
        a: "Ja. Geben Sie einfach diese Seitenzahl ein (zum Beispiel 4), um ein einseitiges PDF zu exportieren.",
      },
      {
        q: "Werden meine PDFs zum Teilen hochgeladen?",
        a: "Nein. Das Teilen erfolgt lokal in Ihrem Browser mit pdf-lib; Ihre Datei verlässt niemals Ihr Gerät.",
      },
    ],
  },
  "rotate-pdf": {
    name: "PDF drehen",
    tagline: "Ausgewählte Seiten oder das gesamte PDF drehen.",
    title: "PDF drehen — Seiten online um 90/180/270° drehen (kostenlos)",
    description:
      "Drehen Sie alle Seiten oder bestimmte Seiten eines PDFs um 90, 180 oder 270 Grad. Kostenloses, privates PDF-Drehen im Browser.",
    h1: "PDF drehen",
    intro:
      "Korrigieren Sie seitlich oder kopfüber stehende Seiten. Drehen Sie das gesamte PDF oder nur die von Ihnen gewählten Seiten und exportieren Sie dann die korrigierte Datei.",
    howItWorks: [
      "Laden Sie ein einzelnes PDF hoch.",
      "Wählen Sie den Drehwinkel und welche Seiten gedreht werden sollen.",
      "Klicken Sie auf PDF drehen.",
      "Laden Sie das gedrehte Dokument herunter.",
    ],
    faqs: [
      {
        q: "Kann ich nur einige Seiten drehen?",
        a: "Ja. Geben Sie bestimmte Seitenzahlen oder Bereiche ein oder lassen Sie das Feld leer, um jede Seite zu drehen.",
      },
      {
        q: "Verringert das Drehen die Qualität?",
        a: "Nein. Das Drehen ändert nur die Ausrichtung jeder Seite, sodass der Inhalt Pixel für Pixel identisch bleibt.",
      },
      {
        q: "Werden meine Dateien hochgeladen?",
        a: "Nein. Das Drehen erfolgt lokal in Ihrem Browser; Ihr PDF verlässt niemals Ihr Gerät.",
      },
    ],
  },
  "pdf-to-images": {
    name: "PDF zu Bildern",
    tagline: "Jede PDF-Seite als PNG exportieren.",
    title: "PDF zu Bildern — PDF-Seiten in PNG umwandeln (browserbasiert)",
    description:
      "Konvertieren Sie jede Seite eines PDFs direkt in Ihrem Browser in ein PNG-Bild. Privat und kostenlos.",
    h1: "PDF zu Bildern",
    intro:
      "Rendern Sie jede Seite eines PDFs als Bild, das Sie herunterladen können. Nützlich für Vorschaubilder, Voransichten oder zum Einfügen von Seiten in andere Apps.",
    howItWorks: [
      "Laden Sie ein einzelnes PDF hoch.",
      "Wir rendern jede Seite in Ihrem Browser.",
      "Exportieren Sie Seiten als PNG-Bilder.",
      "Laden Sie die Ergebnisse herunter.",
    ],
    faqs: [
      {
        q: "Werden meine Dateien hochgeladen?",
        a: "Nein. Das Rendern erfolgt mit pdf.js lokal in Ihrem Browser.",
      },
      {
        q: "Welche Auflösung haben die exportierten Bilder?",
        a: "Die Seiten werden in einer hohen Auflösung gerendert, die sich zum Teilen und für Voransichten eignet. Größere Seiten erzeugen größere PNG-Dateien.",
      },
      {
        q: "Kann ich JPGs statt PNGs erhalten?",
        a: "Dieses Tool exportiert PNG für die beste Qualität. Um JPGs zu erhalten, lassen Sie die PNGs anschließend durch unseren Bildkonverter laufen.",
      },
    ],
  },
  "organize-pdf": {
    name: "PDF organisieren",
    tagline: "PDF-Seiten löschen und neu anordnen.",
    title: "PDF organisieren — Seiten online löschen & neu anordnen (browserbasiert)",
    description:
      "Löschen Sie unerwünschte Seiten und ordnen Sie die übrigen Seiten eines PDFs in Ihrem Browser neu. Privat und kostenlos.",
    h1: "PDF-Seiten organisieren",
    intro:
      "Räumen Sie ein PDF auf, indem Sie nicht benötigte Seiten entfernen und die übrigen per Drag-and-drop in die richtige Reihenfolge bringen.",
    howItWorks: [
      "Laden Sie ein einzelnes PDF hoch.",
      "Entfernen Sie Seiten, die Sie nicht möchten.",
      "Ordnen Sie die verbleibenden Seiten neu.",
      "Exportieren Sie das organisierte PDF.",
    ],
    faqs: [
      {
        q: "Wird die Originaldatei verändert?",
        a: "Nein. Es wird ein neues PDF erzeugt; Ihre Originaldatei bleibt unberührt.",
      },
      {
        q: "Werden meine Dateien hochgeladen?",
        a: "Nein. Das Neuanordnen und Löschen von Seiten erfolgt lokal in Ihrem Browser; Ihr PDF verlässt niemals Ihr Gerät.",
      },
      {
        q: "Was, wenn ich die falsche Seite lösche?",
        a: "Ihre Originaldatei wird niemals verändert, beginnen Sie also einfach erneut damit, falls Sie versehentlich eine Seite entfernen.",
      },
    ],
  },
  "add-page-numbers": {
    name: "Seitenzahlen hinzufügen",
    tagline: "Seitenzahlen auf ein PDF stempeln.",
    title: "Seitenzahlen zu PDF hinzufügen — online & privat (browserbasiert)",
    description:
      "Fügen Sie einem PDF-Dokument in Ihrem Browser Seitenzahlen hinzu. Wählen Sie Position und Format. Privat und kostenlos.",
    h1: "Seitenzahlen zu PDF hinzufügen",
    intro:
      "Stempeln Sie saubere, einheitliche Seitenzahlen auf jede Seite Ihres PDFs, ganz ohne Uploads.",
    howItWorks: [
      "Laden Sie ein einzelnes PDF hoch.",
      "Wählen Sie die Position und die Startnummer.",
      "Wenden Sie die Seitenzahlen an.",
      "Laden Sie das nummerierte PDF herunter.",
    ],
    faqs: [
      {
        q: "Kann ich wählen, wo die Nummern erscheinen?",
        a: "Ja — Sie können eine Ecke oder die Mitte der Fußzeile auswählen.",
      },
      {
        q: "Kann ich die Nummerierung bei einer bestimmten Zahl beginnen?",
        a: "Ja. Legen Sie die Startnummer fest — praktisch, wenn Ihr Dokument an eine andere Datei anschließt.",
      },
      {
        q: "Werden meine Dateien hochgeladen?",
        a: "Nein. Die Seitenzahlen werden lokal in Ihrem Browser aufgestempelt; Ihr PDF verlässt niemals Ihr Gerät.",
      },
    ],
  },
  "compress-pdf": {
    name: "PDF komprimieren",
    tagline: "PDF-Dateigröße verringern.",
    title: "PDF komprimieren — PDF-Dateigröße online verringern (kostenlos, im Browser)",
    description:
      "Komprimieren Sie PDF-Dateien, um ihre Größe zu verringern, direkt in Ihrem Browser. Am besten für gescannte oder bildlastige PDFs. Kostenlos und privat.",
    h1: "PDF komprimieren",
    intro:
      "Verringern Sie die Dateigröße großer PDFs für leichteres Teilen und Versenden per E-Mail. Dies funktioniert durch das Rastern der Seiten, daher ist es am wirksamsten bei gescannten oder bildlastigen Dokumenten — und es läuft vollständig in Ihrem Browser.",
    howItWorks: [
      "Laden Sie ein PDF hoch.",
      "Wählen Sie eine Komprimierungsstufe (stark, ausgewogen oder leicht).",
      "Klicken Sie auf Komprimieren — die Seiten werden lokal neu gerendert und neu gespeichert.",
      "Laden Sie das kleinere PDF herunter und vergleichen Sie die Größe vorher/nachher.",
    ],
    faqs: [
      {
        q: "Ist der Text danach noch auswählbar?",
        a: "Nein. Die Komprimierung rastert jede Seite (Text wird Teil des Bildes), weshalb sie gescannte PDFs so gut verkleinert, aber für reine Textdokumente nicht ideal ist.",
      },
      {
        q: "Warum wurde mein PDF nicht kleiner?",
        a: "Reine Text-PDFs sind bereits kompakt. Dieses Tool erzielt die größten Einsparungen bei Scans und fotolastigen PDFs.",
      },
      {
        q: "Werden meine Dateien zum Komprimieren hochgeladen?",
        a: "Nein. Die Komprimierung läuft vollständig in Ihrem Browser, indem die Seiten lokal neu gerendert werden; Ihr PDF verlässt niemals Ihr Gerät.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF zu Word",
    tagline: "PDF-Text in ein bearbeitbares Word-Dokument extrahieren.",
    title: "PDF zu Word — PDF in bearbeitbares DOCX umwandeln (kostenlos, im Browser)",
    description:
      "Extrahieren Sie den Text aus einem PDF in ein bearbeitbares Word-Dokument (.docx), in Ihrem Browser. Nach bestem Bemühen, kostenlos und privat.",
    h1: "PDF zu Word",
    intro:
      "Holen Sie den Text aus einem PDF in ein bearbeitbares Word-Dokument. Dies ist eine Konvertierung nach bestem Bemühen — der Text wird übernommen, sodass Sie ihn bearbeiten können, aber Spalten, Bilder und das exakte Layout bleiben nicht erhalten. Läuft vollständig in Ihrem Browser.",
    howItWorks: [
      "Laden Sie ein PDF hoch.",
      "Klicken Sie auf Konvertieren — der Text wird lokal extrahiert.",
      "Ein .docx wird in Ihrem Browser erstellt.",
      "Laden Sie es herunter und bearbeiten Sie es in Word, Google Docs oder Pages.",
    ],
    faqs: [
      {
        q: "Wird es genau wie mein PDF aussehen?",
        a: "Nein. Dies extrahiert den Text in ein bearbeitbares Dokument; komplexes Layout, Spalten und Bilder werden nicht reproduziert. Es ist ideal, wenn Sie hauptsächlich die Wörter zurückbenötigen.",
      },
      {
        q: "Werden meine Dateien hochgeladen?",
        a: "Nein — die Extraktion und das .docx werden vollständig in Ihrem Browser erzeugt.",
      },
      {
        q: "Kann ich das Ergebnis bearbeiten?",
        a: "Ja. Sie erhalten ein standardmäßiges .docx, das Sie in Word, Google Docs oder Pages öffnen und bearbeiten können.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word zu PDF",
    tagline: "Ein .docx in ein teilbares PDF umwandeln.",
    title: "Word zu PDF — DOCX in PDF umwandeln (kostenlos, im Browser)",
    description:
      "Konvertieren Sie ein Word-Dokument (.docx) in Ihrem Browser in ein teilbares PDF. Nach bestem Bemühen, kostenlos und privat.",
    h1: "Word zu PDF",
    intro:
      "Verwandeln Sie ein Word-.docx in ein PDF, das Sie teilen können. Text und Absatzfluss bleiben erhalten; aufwendige Gestaltung, Bilder und Tabellen können vereinfacht werden. Alles läuft in Ihrem Browser.",
    howItWorks: [
      "Laden Sie ein .docx-Dokument hoch.",
      "Klicken Sie auf Konvertieren — das Dokument wird lokal gelesen.",
      "Ein PDF wird in Ihrem Browser erzeugt.",
      "Laden Sie Ihr PDF herunter.",
    ],
    faqs: [
      {
        q: "Welche Dateien werden unterstützt?",
        a: "Moderne Word-.docx-Dateien. Das ältere .doc-Format wird nicht unterstützt — speichern Sie es zuvor als .docx.",
      },
      {
        q: "Wird es das Word-Layout exakt nachbilden?",
        a: "Es ist eine Konvertierung nach bestem Bemühen mit Fokus auf Text und Absätze; komplexe Formatierungen können vereinfacht werden.",
      },
      {
        q: "Werden meine Dokumente hochgeladen?",
        a: "Nein. Das .docx wird gelesen und das PDF wird vollständig in Ihrem Browser erzeugt; Ihre Datei verlässt niemals Ihr Gerät.",
      },
    ],
  },
  "pdf-to-excel": {
    name: "PDF zu Excel",
    tagline: "PDF-Text in eine Tabelle extrahieren.",
    title: "PDF zu Excel — PDF-Text in XLSX umwandeln (kostenlos, im Browser)",
    description:
      "Extrahieren Sie Text aus einem PDF in eine bearbeitbare Excel-Tabelle (.xlsx) in Ihrem Browser. Tabellenerkennung nach bestem Bemühen, kostenlos und privat.",
    h1: "PDF zu Excel",
    intro:
      "Holen Sie den Text aus einem PDF in eine Tabelle. Jede Zeile wird zu einer Zeile, und große Abstände werden als Spaltentrennungen behandelt. Reale Tabellen sind unterschiedlich, prüfen Sie also das Ergebnis — aber es erspart viel Neutippen. Läuft in Ihrem Browser.",
    howItWorks: [
      "Laden Sie ein PDF hoch.",
      "Klicken Sie auf Konvertieren — der Text wird lokal extrahiert.",
      "Ein .xlsx wird erstellt, wobei Spalten an großen Abständen getrennt werden.",
      "Laden Sie es herunter und bereinigen Sie die Spalten in Excel oder Google Sheets.",
    ],
    faqs: [
      {
        q: "Erkennt es meine Tabellen perfekt?",
        a: "Nicht immer. PDFs speichern keine echte Tabellenstruktur, daher werden Spalten anhand der Abstände erraten. Rechnen Sie damit, einige Zellen zu korrigieren, besonders bei komplexen Layouts.",
      },
      {
        q: "Ist es privat?",
        a: "Ja — die Extraktion und die Tabelle werden vollständig in Ihrem Browser erzeugt.",
      },
      {
        q: "Welches Tabellenformat erhalte ich?",
        a: "Eine standardmäßige .xlsx-Datei, die Sie in Excel, Google Sheets oder Numbers öffnen können.",
      },
    ],
  },
  "pdf-to-powerpoint": {
    name: "PDF zu PowerPoint",
    tagline: "Jede PDF-Seite in eine Folie verwandeln.",
    title: "PDF zu PowerPoint — PDF in PPTX umwandeln (kostenlos, im Browser)",
    description:
      "Konvertieren Sie PDF-Seiten in Ihrem Browser in PowerPoint-Folien (.pptx). Jede Seite wird zu einem ganzseitigen Folienbild. Kostenlos und privat.",
    h1: "PDF zu PowerPoint",
    intro:
      "Verwandeln Sie ein PDF in eine PowerPoint-Präsentation, bei der jede Seite zu einer Folie wird. Die Folien sehen genau wie das PDF aus (jede Seite wird als ganzseitiges Bild platziert), eignen sich also hervorragend zum Präsentieren — auch wenn der Text darauf nicht einzeln bearbeitbar ist. Läuft in Ihrem Browser.",
    howItWorks: [
      "Laden Sie ein PDF hoch.",
      "Klicken Sie auf Konvertieren — jede Seite wird lokal gerendert.",
      "Ein .pptx wird mit einer Folie pro Seite erstellt.",
      "Laden Sie es herunter und öffnen Sie es in PowerPoint, Keynote oder Google Slides.",
    ],
    faqs: [
      {
        q: "Kann ich den Text auf den Folien bearbeiten?",
        a: "Nicht direkt — jede Folie ist ein hochauflösendes Bild der Seite. Dadurch bleibt das Aussehen identisch mit dem PDF.",
      },
      {
        q: "Ist es privat?",
        a: "Ja — die Seiten werden gerendert und das .pptx wird vollständig in Ihrem Browser erstellt.",
      },
      {
        q: "Welches Dateiformat erhalte ich?",
        a: "Ein standardmäßiges .pptx, das Sie in PowerPoint, Keynote oder Google Slides öffnen können.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR PDF",
    tagline: "Text aus gescannten PDFs & Bildern extrahieren.",
    title: "OCR PDF — gescanntes PDF & Bild in Text (kostenlos, im Browser)",
    description:
      "Erkennen Sie Text in gescannten PDFs und Bildern und kopieren Sie ihn oder laden Sie ihn als reinen Text herunter. Läuft vollständig in Ihrem Browser — kostenlos und privat.",
    h1: "OCR — gescanntes PDF & Bild in Text",
    intro:
      "Holen Sie den Text aus gescannten Dokumenten, Fotos und bildbasierten PDFs mit OCR auf dem Gerät. Alles läuft lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben. Englische Sprache.",
    howItWorks: [
      "Laden Sie ein gescanntes PDF oder Bilder (PNG/JPG) hoch.",
      "Klicken Sie auf Text extrahieren — beim ersten Durchlauf wird die Erkennungs-Engine (~10 MB) heruntergeladen.",
      "Jede Seite wird lokal auf Ihrem Gerät gelesen.",
      "Kopieren Sie den Text oder laden Sie ihn als .txt-Datei herunter.",
    ],
    faqs: [
      {
        q: "Läuft OCR in meinem Browser?",
        a: "Ja — es verwendet Tesseract (WebAssembly) vollständig auf Ihrem Gerät. Ihre Dateien werden niemals hochgeladen.",
      },
      {
        q: "Welche Sprachen werden unterstützt?",
        a: "Derzeit Englisch. Die Engine lädt ihr Sprachmodell bei der ersten Nutzung herunter und speichert es dann im Cache.",
      },
      {
        q: "Warum ist der erste Durchlauf langsam?",
        a: "Die Erkennungs-Engine und das englische Modell (~10 MB) werden bei der ersten Nutzung einmalig heruntergeladen. Danach geht es deutlich schneller.",
      },
    ],
  },
  "edit-pdf-text": {
    name: "PDF-Text bearbeiten",
    tagline: "PDF-Text extrahieren, bearbeiten und neu aufbauen.",
    title: "PDF-Text bearbeiten — extrahieren, bearbeiten & neu aufbauen (kostenlos, im Browser)",
    description:
      "Extrahieren Sie den Text aus einem PDF, bearbeiten Sie ihn Seite für Seite und bauen Sie ein sauberes Text-PDF neu auf — alles in Ihrem Browser. Kostenlos und privat.",
    h1: "PDF-Text bearbeiten",
    intro:
      "Korrigieren Sie Tippfehler und ändern Sie Formulierungen in einem PDF. Dies extrahiert den Text, sodass Sie ihn Seite für Seite bearbeiten können, und baut dann ein sauberes, reines Text-PDF neu auf. Die Originalschriften, Bilder und das exakte Layout bleiben nicht erhalten — es ist am besten, wenn Sie hauptsächlich die Wörter ändern möchten. Läuft in Ihrem Browser.",
    howItWorks: [
      "Laden Sie ein PDF hoch.",
      "Bearbeiten Sie den extrahierten Text im Feld für jede Seite.",
      "Klicken Sie auf Neu aufbauen — ein neues Text-PDF wird lokal erzeugt.",
      "Laden Sie Ihr bearbeitetes PDF herunter.",
    ],
    faqs: [
      {
        q: "Bleibt das Originaldesign erhalten?",
        a: "Nein. PDFs speichern Text als positionierte Glyphen, nicht als bearbeitbare Absätze, daher ist echtes In-Place-Bearbeiten im Browser nicht kostenlos möglich. Stattdessen wird aus Ihren Änderungen ein sauberes Text-PDF neu aufgebaut.",
      },
      {
        q: "Werden meine Dateien hochgeladen?",
        a: "Nein — die Extraktion und das neu aufgebaute PDF erfolgen vollständig auf Ihrem Gerät.",
      },
      {
        q: "Welche PDFs funktionieren am besten?",
        a: "Textbasierte PDFs, bei denen Sie hauptsächlich die Formulierung korrigieren müssen. Gescannte oder reine Bild-PDFs enthalten keinen extrahierbaren Text — führen Sie zuerst OCR aus.",
      },
    ],
  },
};
export default de;
