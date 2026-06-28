import type { GuideContent } from "../../guide-types";

const guides: Record<string, GuideContent> = {
  "compress-pdf-for-email": {
    title: "PDF für E-Mail komprimieren (kostenlos, ohne Upload)",
    description:
      "Ihre E-Mail kommt zurück, weil die PDF zu groß ist? So verkleinern Sie eine PDF kostenlos unter die 10–25-MB-Grenze, direkt im Browser, ohne die Datei irgendwohin hochzuladen.",
    h1: "PDF für E-Mail komprimieren",
    excerpt:
      "Bringen Sie eine große PDF unter die 10–25-MB-E-Mail-Grenze — kostenlos und ohne sie irgendwohin hochzuladen.",
    intro:
      "Die meisten E-Mail-Anbieter lehnen Anhänge ab einer bestimmten Größe ab — Gmail begrenzt Sie auf 25 MB, Outlook auf 20 MB und viele Unternehmensserver auf gerade einmal 10 MB. Ein gescannter Vertrag oder ein bildlastiger Bericht überschreitet das schnell. Die gute Nachricht: Sie können nahezu jede PDF in wenigen Sekunden wieder unter die Grenze bringen, kostenlos und ohne Ihr Dokument an einen fremden Server zu senden.",
    sections: [
      {
        heading: "Warum PDFs überhaupt so groß werden",
        body: [
          "PDFs blähen sich vor allem aus einem Grund auf: Bilder. Ein überwiegend aus Text bestehendes Dokument ist meist winzig — ein paar hundert Kilobyte. Doch sobald Sie Seiten scannen, Screenshots einfügen oder aus einem Designprogramm exportieren, wird jede Seite zu einem hochauflösenden Bild, und die Dateigröße vervielfacht sich rasch.",
          "Genau deshalb funktioniert die wirksamste Komprimierung, indem diese Bilder mit einer sinnvolleren Auflösung neu kodiert werden. Reine Text-PDFs sind bereits kompakt, erwarten Sie dort also keine Wunder — die großen Erfolge erzielen Sie bei Scans und fotolastigen Dokumenten.",
        ],
      },
      {
        heading: "Ihre PDF im Browser komprimieren (Schritt für Schritt)",
        list: [
          "Öffnen Sie das kostenlose PDF-komprimieren-Tool — nichts wird hochgeladen; es läuft auf Ihrem Gerät.",
          "Ziehen Sie die PDF herein, die Sie per E-Mail versenden möchten.",
          "Wählen Sie eine Komprimierungsstufe: „stark“ für die kleinste Datei, „ausgewogen“ für einen guten Mittelweg.",
          "Laden Sie das Ergebnis herunter und prüfen Sie die neue Größe gegen Ihre E-Mail-Grenze (Vorher/Nachher wird angezeigt).",
        ],
      },
      {
        heading: "Falls sie immer noch zu groß ist",
        body: [
          "Zwei zuverlässige Ausweichlösungen: Teilen Sie die PDF in Teile auf und versenden Sie diese in getrennten E-Mails, oder entfernen Sie vor dem Komprimieren Seiten, die Sie eigentlich nicht brauchen. Beides erhält die Qualität, statt das Ganze noch stärker zusammenzudrücken.",
          "Für Dokumente, die Sie häufig teilen, ist die sauberste langfristige Lösung, die Datei in einen Cloud-Speicher zu legen und einen Link statt des Anhangs zu versenden — keine Größenbeschränkung, und der Empfänger erhält stets die aktuellste Version.",
        ],
      },
      {
        heading: "Eine Anmerkung zum Datenschutz",
        body: [
          "Viele „PDF komprimieren“-Websites funktionieren, indem sie Ihre Datei auf ihre Server hochladen, sie dort verarbeiten und wieder zurücksenden. Bei einer Rechnung, einem Vertrag oder einem medizinischen Formular ist das ein echtes Datenschutzproblem. Das obige Tool erledigt alles lokal in Ihrem Browser über die Verarbeitung Ihres eigenen Geräts — die Datei verlässt niemals Ihren Computer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie groß darf ein E-Mail-Anhang maximal sein?",
        a: "Gmail erlaubt 25 MB, Outlook.com 20 MB, und viele Firmen-E-Mail-Server begrenzen auf 10 MB. Bleiben Sie am besten unter der niedrigsten Grenze, die Ihr Empfänger haben könnte.",
      },
      {
        q: "Ruiniert das Komprimieren die Qualität?",
        a: "Bei Scans und bildlastigen PDFs ist die Veränderung bei der Qualität „ausgewogen“ meist kaum wahrnehmbar. Text bleibt lesbar; nur die Bilder werden neu kodiert.",
      },
      {
        q: "Ist es sicher, vertrauliche PDFs online zu komprimieren?",
        a: "Nur wenn das Tool die Datei in Ihrem Browser verarbeitet. Das PDF-komprimieren-Tool hier lädt Ihr Dokument niemals hoch, sodass vertrauliche Dateien auf Ihrem Gerät bleiben.",
      },
    ],
  },
  "merge-pdf-without-uploading": {
    title: "PDF-Dateien zusammenführen ohne Upload",
    description:
      "Fügen Sie mehrere PDFs zu einem Dokument zusammen, ohne irgendetwas auf einen Server hochzuladen. Eine kostenlose, private Methode, um PDFs auf jedem Computer im Browser zusammenzuführen.",
    h1: "PDF-Dateien zusammenführen ohne Upload",
    excerpt:
      "Fügen Sie mehrere PDFs privat zu einer Datei zusammen — die Zusammenführung geschieht in Ihrem Browser, nicht auf einem Server.",
    intro:
      "PDFs zusammenzufügen gehört zu den häufigsten Dokumentaufgaben: eine Rechnung an einen Beleg heften, gescannte Seiten verbinden oder einen Bericht aus mehreren Exporten zusammenstellen. Die meisten Online-Tools laden Ihre Dateien dafür hoch. Wenn Ihre Dokumente vertraulich sind — und PDFs sind das meist —, erfahren Sie hier, wie Sie sie zusammenführen, ohne dass irgendetwas Ihren Computer verlässt.",
    sections: [
      {
        heading: "Warum „ohne Upload“ wichtig ist",
        body: [
          "Wenn eine Website Ihre PDFs zusammenführt, sendet der herkömmliche Ansatz jede Datei an ihre Server, kombiniert sie dort und gibt das Ergebnis zurück. Ihre Dokumente liegen, wenn auch nur kurz, auf der Maschine eines anderen, und Sie vertrauen dessen Aufbewahrungs- und Sicherheitsrichtlinien.",
          "Moderne Browser sind leistungsfähig genug, um die gesamte Aufgabe lokal zu erledigen. Ein so gebautes Tool liest Ihre Dateien in den Arbeitsspeicher des Browsers ein, führt sie auf Ihrem eigenen Gerät zusammen und übergibt Ihnen die fertige PDF direkt zurück — kein Server-Umweg, kein Upload.",
        ],
      },
      {
        heading: "Ihre PDFs zusammenführen (Schritt für Schritt)",
        list: [
          "Öffnen Sie das kostenlose PDF-zusammenführen-Tool — es läuft vollständig in Ihrem Browser.",
          "Fügen Sie zwei oder mehr PDF-Dateien per Drag-and-drop hinzu.",
          "Ziehen Sie die Dateien in genau die Reihenfolge, in der sie kombiniert werden sollen.",
          "Klicken Sie auf Zusammenführen und laden Sie anschließend Ihr einzelnes, kombiniertes Dokument herunter.",
        ],
      },
      {
        heading: "Tipps für ein sauberes Ergebnis",
        body: [
          "Die Reihenfolge zählt: Ordnen Sie die Dateien vor dem Zusammenführen an, damit Sie es nicht wiederholen müssen. Wenn Sie nur einige Seiten aus einer Datei benötigen, kürzen Sie diese zuerst mit einem Tool zum Aufteilen oder Organisieren und führen Sie dann das kleinere Stück zusammen.",
          "Beim Zusammenführen wird jede Seite unverändert übernommen, sodass Text auswählbar bleibt und die Bildqualität exakt erhalten wird — es wird nichts zusammengefügt oder neu gerendert.",
        ],
      },
    ],
    faqs: [
      {
        q: "Gibt es ein Limit, wie viele PDFs ich zusammenführen kann?",
        a: "Es gibt kein Server-Limit, weil nichts hochgeladen wird. Die praktische Grenze ist der Arbeitsspeicher Ihres Geräts und die Gesamtdateigröße.",
      },
      {
        q: "Verändert das Zusammenführen die Qualität oder macht Text nicht mehr auswählbar?",
        a: "Nein. Seiten werden unverändert in das neue Dokument kopiert, sodass Text auswählbar bleibt und Bilder ihre ursprüngliche Auflösung behalten.",
      },
      {
        q: "Funktioniert das auf einem Mac, unter Windows oder auf einem Chromebook?",
        a: "Ja. Da es im Browser läuft, funktioniert es auf jedem Betriebssystem mit einem modernen Browser — ohne Installation.",
      },
    ],
  },
  "convert-heic-to-jpg-on-windows": {
    title: "HEIC unter Windows in JPG umwandeln (kostenlos)",
    description:
      "Windows öffnet die HEIC-Fotos Ihres iPhones nicht? Wandeln Sie HEIC kostenlos in JPG um, direkt im Browser — keine Software zu installieren, und Ihre Fotos werden niemals hochgeladen.",
    h1: "HEIC unter Windows in JPG umwandeln",
    excerpt:
      "Öffnen Sie iPhone-HEIC-Fotos unter Windows, indem Sie sie in JPG umwandeln — kostenlos, ohne Installation, ohne Upload.",
    intro:
      "iPhones speichern Fotos im HEIC-Format, das eine hohe Qualität bei geringerem Speicherbedarf bewahrt. Der Haken: Windows, ältere Software und viele Websites können HEIC-Dateien noch immer nicht öffnen. Die Umwandlung in JPG behebt das sofort — und Sie können es kostenlos in Ihrem Browser erledigen, ohne etwas zu installieren oder Ihre Fotos an eine Website zu übergeben.",
    sections: [
      {
        heading: "Warum Ihre iPhone-Fotos HEIC sind",
        body: [
          "Seit iOS 11 verwendet Apple standardmäßig HEIC (High Efficiency Image Container), weil es dieselbe Bildqualität in etwa der halben Dateigröße von JPG speichert. Auf Ihrem Telefon ist das großartig, doch die Kompatibilität anderswo ist nach wie vor lückenhaft — deshalb verweigert ein Foto, das auf Ihrem iPhone gut aussieht, das Öffnen auf einem Windows-PC oder den Upload in ein älteres Webformular.",
          "JPG hingegen lässt sich buchstäblich überall öffnen. Das Umwandeln ist der schnellste Weg, Ihre Fotos universell nutzbar zu machen.",
        ],
      },
      {
        heading: "HEIC in JPG umwandeln (Schritt für Schritt)",
        list: [
          "Öffnen Sie das kostenlose HEIC-zu-JPG-Tool im Browser auf dem Windows-PC.",
          "Ziehen Sie ein oder mehrere .heic-Fotos herein.",
          "Lassen Sie das Tool sie dekodieren und auf Ihrem Gerät in JPG umwandeln.",
          "Laden Sie die JPGs herunter — jetzt in Fotos, Office und jeder Website zu öffnen.",
        ],
      },
      {
        heading: "Verhindern, dass neue Fotos als HEIC gespeichert werden (optional)",
        body: [
          "Wenn Sie das Umwandeln nicht jedes Mal vornehmen möchten, können Sie Ihr iPhone direkt JPG aufnehmen lassen: Öffnen Sie Einstellungen → Kamera → Formate und wählen Sie „Maximale Kompatibilität“. Neue Fotos sind von da an JPG. Ihre vorhandene HEIC-Bibliothek muss weiterhin umgewandelt werden, neue Aufnahmen jedoch nicht.",
        ],
      },
      {
        heading: "Ihre Fotos privat halten",
        body: [
          "Fotos sind persönlich, daher lohnt es sich zu wissen, dass viele HEIC-Konverter Ihre Bilder auf ihre Server hochladen. Das Tool hier dekodiert und konvertiert alles in Ihrem Browser — Ihre Fotos verlassen niemals den Computer, was wichtig ist, wenn Sie eine ganze Kamerarolle umwandeln.",
        ],
      },
    ],
    faqs: [
      {
        q: "Verliere ich beim Umwandeln von HEIC in JPG Qualität?",
        a: "Es gibt eine kleine Veränderung, weil JPG ein verlustbehaftetes Format ist, doch sie ist für Alltagsfotos visuell vernachlässigbar — und Sie gewinnen überall Kompatibilität.",
      },
      {
        q: "Muss ich unter Windows Software installieren?",
        a: "Nein. Die Umwandlung läuft in Ihrem Browser, es gibt also nichts herunterzuladen oder zu installieren.",
      },
      {
        q: "Warum schlägt die HEIC-Umwandlung manchmal fehl?",
        a: "HEIC lässt sich nicht in jedem Browser nativ dekodieren. Das Tool nutzt einen bestmöglichen Decoder; wenn eine Datei sich nicht umwandeln lässt, hilft oft ein anderer Browser.",
      },
    ],
  },
  "convert-pdf-to-editable-word": {
    title: "PDF in ein bearbeitbares Word-Dokument umwandeln (kostenlos)",
    description:
      "Sie müssen den Text in einer PDF bearbeiten? So wandeln Sie eine PDF kostenlos in Ihrem Browser in eine bearbeitbare Word-Datei (.docx) um und was Sie vom Ergebnis erwarten können.",
    h1: "PDF in ein bearbeitbares Word-Dokument umwandeln",
    excerpt:
      "Holen Sie den Text aus einer PDF in ein bearbeitbares .docx — kostenlos, im Browser, mit realistischen Erwartungen.",
    intro:
      "PDFs sind dafür gemacht, überall gleich auszusehen, was genau der Grund ist, warum sie sich umständlich bearbeiten lassen. Wenn Sie den Wortlaut einer PDF ändern müssen — einen Tippfehler beheben, eine Zahl aktualisieren, einen Absatz wiederverwenden —, führt der übliche Weg über die Umwandlung in ein bearbeitbares Word-Dokument. So erledigen Sie das kostenlos in Ihrem Browser, samt einem ehrlichen Blick darauf, was sich gut umwandeln lässt und was nicht.",
    sections: [
      {
        heading: "Was „PDF zu Word“ kann und was nicht",
        body: [
          "Es hilft, die Erwartungen vorab zu klären. Eine PDF speichert Text als positionierte Glyphen, nicht als fließende Absätze, sodass kein kostenloses Tool ein komplexes Layout perfekt rekonstruieren kann. Was ein guter Konverter gut beherrscht, ist, die Wörter in ein bearbeitbares .docx zu extrahieren, das Sie überarbeiten können — der Text kommt sauber an, sodass Sie ihn bearbeiten können.",
          "Was nicht immer erhalten bleibt: mehrspaltige Layouts, exakte Schriftarten, eingebettete Bilder und verschachtelte Tabellen. Besteht Ihre PDF überwiegend aus Fließtext, erhalten Sie ein hervorragendes Ergebnis. Ist es eine aufwendig gestaltete Broschüre, rechnen Sie mit etwas Nachformatierung.",
        ],
      },
      {
        heading: "PDF in Word umwandeln (Schritt für Schritt)",
        list: [
          "Öffnen Sie das kostenlose PDF-zu-Word-Tool — es extrahiert Text lokal in Ihrem Browser.",
          "Ziehen Sie Ihre PDF herein.",
          "Klicken Sie auf Umwandeln; der Text wird herausgezogen und auf Ihrem Gerät ein .docx erstellt.",
          "Laden Sie das .docx herunter und öffnen Sie es zum Bearbeiten in Word, Google Docs oder Pages.",
        ],
      },
      {
        heading: "Was, wenn die PDF ein Scan ist?",
        body: [
          "Wenn Ihre PDF ein gescanntes Bild einer Seite ist, befindet sich darin kein echter Text zum Extrahieren — es ist ein Bild. In diesem Fall lassen Sie sie zuerst durch OCR (optische Zeichenerkennung) laufen, um das Bild in erkennbaren Text zu verwandeln, und wandeln dann um. Unser OCR-Tool erledigt auch das im Browser.",
        ],
      },
      {
        heading: "Bearbeiten ohne Umwandeln",
        body: [
          "Manchmal müssen Sie nur ein paar Wörter korrigieren und möchten kein vollständiges Word-Dokument. In diesem Fall lässt Sie ein „PDF-Text-bearbeiten“-Tool im Browser den Text extrahieren, ändern und eine saubere Text-PDF neu erstellen — praktisch für schnelle Korrekturen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wird die Word-Datei genauso aussehen wie meine PDF?",
        a: "Nicht exakt. Der Text wird gut umgewandelt, sodass Sie ihn bearbeiten können, doch komplexe Layouts, Spalten und Bilder werden nicht perfekt reproduziert. Ideal ist es, wenn Sie hauptsächlich die Wörter zurückbenötigen.",
      },
      {
        q: "Werden meine Dateien während der Umwandlung hochgeladen?",
        a: "Nein. Die Extraktion und das .docx werden vollständig in Ihrem Browser erzeugt, sodass das Dokument niemals Ihr Gerät verlässt.",
      },
      {
        q: "Kann ich eine gescannte PDF in Word umwandeln?",
        a: "Lassen Sie sie zuerst durch OCR laufen, um den Text zu erkennen, und wandeln Sie dann um. Ein Scan allein hat keinen extrahierbaren Text — es ist ein Bild.",
      },
    ],
  },
  "reduce-image-size-without-losing-quality": {
    title: "Bilddateigröße reduzieren ohne Qualitätsverlust (kostenlos)",
    description:
      "Verkleinern Sie JPG-, PNG- und WebP-Bilder für schnellere Websites und kleinere Uploads — ohne sichtbaren Qualitätsverlust. Kostenlos und privat, direkt in Ihrem Browser.",
    h1: "Bilddateigröße reduzieren ohne Qualitätsverlust",
    excerpt:
      "Machen Sie Bilder für das Web und Uploads kleiner und halten Sie sie dabei gestochen scharf — kostenlos und im Browser.",
    intro:
      "Große Bilddateien verlangsamen Websites, blähen E-Mails auf und stoßen an Upload-Grenzen. Der Trick besteht darin, die Dateigröße ohne sichtbaren Qualitätsverlust zu reduzieren — und das ist meist vollständig möglich, weil Bilder weit mehr Daten enthalten, als das Auge tatsächlich benötigt. So erledigen Sie das kostenlos in Ihrem Browser.",
    sections: [
      {
        heading: "Komprimieren vs. skalieren: den Unterschied kennen",
        body: [
          "Diese beiden werden ständig verwechselt. Komprimieren senkt die Dateigröße, indem das Bild effizienter gespeichert wird, während Breite und Höhe gleich bleiben. Skalieren ändert die tatsächlichen Pixelabmessungen. Für die meisten „mein Bild ist zu groß“-Probleme ist der richtige erste Schritt das Komprimieren; skalieren Sie nur, wenn das Bild auch auf dem Bildschirm größer ist, als es sein muss.",
          "Oft erzielen Sie die besten Ergebnisse, indem Sie beides tun: Skalieren Sie ein 6000 Pixel breites Foto auf die 1600 Pixel herunter, die Ihre Website tatsächlich anzeigt, und komprimieren Sie das dann. Die Einsparungen können enorm sein.",
        ],
      },
      {
        heading: "Dateigröße reduzieren (Schritt für Schritt)",
        list: [
          "Öffnen Sie das kostenlose Bild-komprimieren-Tool in Ihrem Browser.",
          "Ziehen Sie ein JPG-, PNG- oder WebP-Bild herein.",
          "Ziehen Sie den Qualitätsregler herunter, während Sie die geschätzte Ausgabegröße beobachten — 70–80 % sind für das Auge meist unsichtbar.",
          "Laden Sie das kleinere Bild herunter und vergleichen Sie die Vorher/Nachher-Größe.",
        ],
      },
      {
        heading: "Das richtige Format wählen",
        body: [
          "Die Formatwahl ist wichtig. JPG eignet sich am besten für Fotografien. PNG ist am besten für Grafiken mit scharfen Kanten oder Transparenz, ist jedoch verlustfrei und oft groß — ein Foto von PNG in JPG oder WebP umzuwandeln, kann die Größe drastisch verringern. WebP schlägt bei gleicher Qualität häufig beide, sofern jedes Gerät, das das Bild benötigt, es unterstützt.",
        ],
      },
      {
        heading: "Warum dies im Browser tun",
        body: [
          "Bilder auf eine Komprimierungs-Website hochzuladen ist bei großen Dateien langsam und bedeutet, dass Ihre Fotos durch den Server eines anderen laufen. Ein Tool im Browser komprimiert sofort auf Ihrem eigenen Gerät — schneller, und Ihre Bilder bleiben privat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie stark kann ich komprimieren, bevor die Qualität leidet?",
        a: "Bei Fotos sind 70–80 % Qualität meist nicht vom Original zu unterscheiden und verringern die Größe erheblich. Gehen Sie für Miniaturansichten, bei denen Details weniger wichtig sind, ruhig tiefer.",
      },
      {
        q: "Ändert das Komprimieren die Abmessungen des Bildes?",
        a: "Nein. Die Komprimierung behält dieselbe Breite und Höhe bei; sie speichert das Bild lediglich effizienter. Verwenden Sie ein Skalierungs-Tool, wenn Sie auch kleinere Abmessungen wünschen.",
      },
      {
        q: "Welches Format ergibt die kleinste Datei?",
        a: "Bei Fotos ist WebP meist am kleinsten, dann JPG. PNG bleibt am besten Grafiken und Transparenz vorbehalten, wo es trotz größerer Dateien glänzt.",
      },
    ],
  },
  "split-pdf-extract-pages": {
    title: "PDF aufteilen oder bestimmte Seiten extrahieren (kostenlos)",
    description:
      "Ziehen Sie bestimmte Seiten oder Seitenbereiche aus einer PDF in eine neue Datei — kostenlos, privat und in Ihrem Browser. Eine einfache Anleitung zum Aufteilen und Extrahieren von PDF-Seiten.",
    h1: "PDF aufteilen oder bestimmte Seiten extrahieren",
    excerpt:
      "Extrahieren Sie genau die Seiten, die Sie benötigen, aus einer PDF in eine neue Datei — kostenlos und vollständig in Ihrem Browser.",
    intro:
      "Nicht jede PDF muss als Ganzes geteilt werden. Vielleicht möchten Sie nur die Seiten 3 bis 5 eines langen Berichts, oder Sie müssen eine einzelne unterschriebene Seite aus einem Vertrag herausziehen. Mit dem Aufteilen einer PDF extrahieren Sie genau die Seiten, die Sie benötigen, in eine neue Datei — und das kostenlos in Ihrem Browser, ohne das Original irgendwohin hochzuladen.",
    sections: [
      {
        heading: "Aufteilen vs. organisieren",
        body: [
          "Es gibt zwei verwandte Aufgaben. Aufteilen (oder Extrahieren) zieht eine Reihe von Seiten in eine brandneue PDF heraus und lässt Ihr Original unangetastet. Organisieren ordnet Seiten innerhalb eines Dokuments um und löscht sie. Wenn Ihr Ziel lautet „Ich möchte einfach diese bestimmten Seiten als eigene Datei“, ist Aufteilen das Richtige.",
        ],
      },
      {
        heading: "Seiten extrahieren (Schritt für Schritt)",
        list: [
          "Öffnen Sie das kostenlose PDF-aufteilen-Tool in Ihrem Browser.",
          "Ziehen Sie die PDF herein, aus der Sie Seiten herausziehen möchten.",
          "Geben Sie die zu behaltenden Seiten oder Bereiche ein — zum Beispiel 1-3, 5, 8-10.",
          "Klicken Sie auf Aufteilen und laden Sie die neue PDF herunter, die nur diese Seiten enthält.",
        ],
      },
      {
        heading: "Die Bereichssyntax erklärt",
        body: [
          "Bereiche verwenden Kommas und Bindestriche. „1-3“ bedeutet die Seiten eins bis drei; eine einzelne Zahl wie „5“ greift nur diese Seite; und Sie können sie kombinieren: „1-3, 5, 8-10“. Seiten werden in der Reihenfolge exportiert, in der Sie sie auflisten, sodass Sie beim Extrahieren zugleich umordnen können.",
          "Möchten Sie eine einzelne Seite? Geben Sie einfach ihre Nummer allein ein — zum Beispiel „4“ —, um eine einseitige PDF zu exportieren.",
        ],
      },
      {
        heading: "Von Grund auf privat",
        body: [
          "Das Aufteilen geschieht vollständig in Ihrem Browser über die Verarbeitung Ihres eigenen Geräts, sodass ein vertraulicher Vertrag oder Bericht niemals hochgeladen wird. Wenn Sie fertig sind, ist die Originaldatei unverändert — Sie haben lediglich eine neue, kleinere PDF daneben erstellt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Welches Bereichsformat sollte ich verwenden?",
        a: "Verwenden Sie Kommas und Bindestriche, wie 1-3, 5, 8-10. Seiten werden in der Reihenfolge exportiert, in der Sie sie auflisten.",
      },
      {
        q: "Kann ich nur eine einzige Seite extrahieren?",
        a: "Ja — geben Sie diese Seitennummer allein ein (zum Beispiel 4), um eine einseitige PDF zu exportieren.",
      },
      {
        q: "Ändert das Aufteilen meine Originaldatei?",
        a: "Nein. Es wird eine neue PDF mit den von Ihnen gewählten Seiten erstellt; Ihr Originaldokument bleibt unangetastet.",
      },
    ],
  },
};

export default guides;
