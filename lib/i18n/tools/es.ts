import type { ToolTranslations } from "../tool-translations";

const es: ToolTranslations = {
  "image-converter": {
    name: "Conversor de imágenes",
    tagline: "Convierte entre PNG, JPG y WebP.",
    title: "Conversor de imágenes — PNG a JPG, JPG a PNG, WebP (gratis, en el navegador)",
    description:
      "Convierte imágenes entre PNG, JPG y WebP directamente en tu navegador. Gratis, rápido y privado: tus archivos nunca salen de tu dispositivo.",
    h1: "Conversor de imágenes",
    intro:
      "Convierte imágenes PNG, JPG y WebP en cualquier dirección, al instante y gratis. Todo se ejecuta localmente en tu navegador, así que tus imágenes nunca se suben.",
    howItWorks: [
      "Arrastra y suelta tu imagen, o haz clic para elegir un archivo.",
      "Elige el formato de salida (PNG, JPG o WebP).",
      "Haz clic en Convertir: el procesamiento ocurre por completo en tu dispositivo.",
      "Descarga tu imagen convertida.",
    ],
    faqs: [
      {
        q: "¿Se suben mis imágenes a un servidor?",
        a: "No. La conversión ocurre localmente en tu navegador usando la API Canvas. Tus imágenes nunca salen de tu dispositivo.",
      },
      {
        q: "¿Por qué a veces está desactivada la opción AVIF?",
        a: "La codificación AVIF depende de tu navegador. Detectamos la compatibilidad automáticamente y desactivamos los formatos que tu navegador no puede producir.",
      },
      {
        q: "¿Al convertir a JPG se pierde la transparencia?",
        a: "Sí. JPG no admite transparencia, así que las zonas transparentes se rellenan de blanco. Usa PNG o WebP para conservar la transparencia.",
      },
    ],
  },
  "resize-image": {
    name: "Redimensionar imagen",
    tagline: "Cambia las dimensiones por ancho o alto.",
    title: "Redimensionar imagen — Cambia ancho y alto online (gratis, privado)",
    description:
      "Redimensiona imágenes por ancho y alto en tu navegador, con la opción de mantener la relación de aspecto. Gratis y privado: los archivos nunca salen de tu dispositivo.",
    h1: "Redimensionar imagen",
    intro:
      "Redimensiona cualquier imagen PNG, JPG o WebP estableciendo un nuevo ancho y alto. Bloquea la relación de aspecto o define dimensiones exactas. Se ejecuta por completo en tu navegador.",
    howItWorks: [
      "Sube una imagen arrastrándola o haciendo clic para buscarla.",
      "Introduce un ancho o un alto de destino.",
      "Activa 'Mantener relación de aspecto' para evitar distorsiones.",
      "Haz clic en Redimensionar y descarga el resultado.",
    ],
    faqs: [
      {
        q: "¿Redimensionar reduce la calidad?",
        a: "Reducir una imagen suele dar un resultado limpio. Ampliarla más allá de las dimensiones originales puede verse borroso, ya que los píxeles se interpolan.",
      },
      {
        q: "¿Puedo mantener la relación de aspecto?",
        a: "Sí. Activa 'Mantener relación de aspecto' y la otra dimensión se calcula automáticamente mientras escribes.",
      },
      {
        q: "¿Qué formatos de imagen puedo redimensionar?",
        a: "PNG, JPG y WebP. El resultado mantiene tu formato original a menos que lo conviertas por separado.",
      },
    ],
  },
  "compress-image": {
    name: "Comprimir imagen",
    tagline: "Reduce el tamaño de JPG/WebP con un control de calidad.",
    title: "Comprimir imagen — Reduce el tamaño de JPG y WebP (gratis, en el navegador)",
    description:
      "Comprime imágenes JPG y WebP con un control de calidad y mira el tamaño de archivo antes y después. Gratis, privado y por completo en el navegador.",
    h1: "Comprimir imagen",
    intro:
      "Reduce el tamaño de archivo de las imágenes con un sencillo control de calidad y compara al instante el tamaño antes y después. Ideal para webs más rápidas y archivos adjuntos de correo más ligeros.",
    howItWorks: [
      "Sube una imagen JPG, PNG o WebP.",
      "Arrastra el control de calidad para equilibrar tamaño y calidad.",
      "Observa cómo se actualiza el tamaño de salida estimado.",
      "Descarga la imagen comprimida.",
    ],
    faqs: [
      {
        q: "¿Qué formatos se comprimen mejor?",
        a: "JPG y WebP admiten control de calidad con pérdida. PNG no tiene pérdida, así que se vuelve a codificar como JPG o WebP para conseguir un ahorro significativo.",
      },
      {
        q: "¿Hay un límite de tamaño de archivo?",
        a: "No hay un límite estricto del servidor porque no se sube nada, pero las imágenes muy grandes pueden ir lentas en dispositivos con poca memoria.",
      },
      {
        q: "¿Comprimir cambia las dimensiones de la imagen?",
        a: "No. La compresión reduce el tamaño de archivo ajustando la calidad y la codificación; el ancho y el alto se mantienen iguales. Usa Redimensionar imagen si además quieres dimensiones más pequeñas.",
      },
    ],
  },
  "images-to-pdf": {
    name: "Imágenes a PDF",
    tagline: "Combina imágenes JPG/PNG/WebP en un solo PDF.",
    title: "Imágenes a PDF — Convierte JPG y PNG a PDF online (gratis)",
    description:
      "Combina varias imágenes JPG, PNG o WebP en un solo PDF en tu navegador. Reordena las páginas antes de exportar. Gratis y privado.",
    h1: "Imágenes a PDF",
    intro:
      "Convierte un conjunto de imágenes en un único PDF para compartir. Añade tantos archivos JPG, PNG o WebP como quieras, arrástralos para reordenarlos y exporta un documento limpio.",
    howItWorks: [
      "Sube una o varias imágenes.",
      "Arrástralas para ordenarlas como quieras.",
      "Haz clic en Crear PDF: cada imagen se convierte en una página.",
      "Descarga el PDF combinado.",
    ],
    faqs: [
      {
        q: "¿Puedo controlar el orden de las páginas?",
        a: "Sí. Usa los controles de subir/bajar en cada imagen para establecer el orden exacto antes de exportar.",
      },
      {
        q: "¿Qué tamaño de página se usa?",
        a: "Cada página se ajusta a su imagen, así que no hay márgenes raros ni recortes.",
      },
      {
        q: "¿Se suben mis imágenes para crear el PDF?",
        a: "No. El PDF se ensambla localmente en tu navegador con pdf-lib, así que tus imágenes nunca salen de tu dispositivo.",
      },
    ],
  },
  "heic-to-jpg": {
    name: "HEIC a JPG",
    tagline: "Convierte fotos HEIC del iPhone a JPG.",
    title: "Conversor de HEIC a JPG — Fotos del iPhone a JPG (en el navegador)",
    description:
      "Convierte fotos HEIC de tu iPhone a JPG en el navegador. Conversión privada y con el mejor esfuerzo posible: los archivos nunca salen de tu dispositivo.",
    h1: "Conversor de HEIC a JPG",
    intro:
      "Convierte fotos HEIC de Apple en imágenes JPG compatibles con todo. La decodificación de HEIC en el navegador es con el mejor esfuerzo posible y depende de tu navegador y dispositivo.",
    howItWorks: [
      "Sube una o varias fotos .heic.",
      "Intentamos decodificarlas en tu navegador.",
      "Conviértelas a JPG.",
      "Descarga los resultados.",
    ],
    faqs: [
      {
        q: "¿Por qué podría fallar la conversión de HEIC?",
        a: "HEIC no se puede decodificar de forma nativa en todos los navegadores. Usamos una biblioteca con el mejor esfuerzo posible, pero algunos archivos podrían no convertirse.",
      },
      {
        q: "¿Perderé calidad al convertir de HEIC a JPG?",
        a: "Hay un pequeño cambio porque JPG tiene pérdida, pero es visualmente insignificante en fotos del día a día y te da un archivo compatible con todo.",
      },
      {
        q: "¿Se suben mis fotos?",
        a: "No. La conversión se intenta por completo en tu navegador, así que tus fotos nunca salen de tu dispositivo.",
      },
    ],
  },
  "merge-pdf": {
    name: "Combinar PDF",
    tagline: "Combina varios PDF en uno solo.",
    title: "Combinar PDF — Une archivos PDF online (gratis, privado)",
    description:
      "Combina varios archivos PDF en un solo documento en tu navegador. Reordena los archivos antes de unirlos. Gratis, rápido y privado.",
    h1: "Combinar PDF",
    intro:
      "Une varios PDF en un solo documento. Añade tus archivos, arrástralos hasta el orden que quieras y exporta un único PDF combinado, todo localmente en tu navegador.",
    howItWorks: [
      "Sube dos o más archivos PDF.",
      "Reordénalos en la secuencia que quieras.",
      "Haz clic en Combinar PDF.",
      "Descarga tu documento combinado.",
    ],
    faqs: [
      {
        q: "¿Hay un límite de cuántos PDF puedo combinar?",
        a: "No hay límite del servidor. Los límites prácticos dependen de la memoria de tu dispositivo y del tamaño total de los archivos.",
      },
      {
        q: "¿Se suben mis PDF?",
        a: "No. La combinación se hace localmente con pdf-lib. Tus documentos nunca salen de tu dispositivo.",
      },
      {
        q: "¿Combinar cambiará la calidad de mis PDF?",
        a: "No. Las páginas se copian tal cual al nuevo documento, así que el texto, las imágenes y la resolución se conservan exactamente.",
      },
    ],
  },
  "split-pdf": {
    name: "Dividir PDF",
    tagline: "Extrae rangos de páginas en un nuevo PDF.",
    title: "Dividir PDF — Extrae páginas y rangos online (gratis)",
    description:
      "Divide un PDF seleccionando rangos de páginas y expórtalos como un nuevo documento. Se ejecuta por completo en tu navegador: privado y gratis.",
    h1: "Dividir PDF",
    intro:
      "Extrae páginas o rangos concretos de un PDF a un archivo nuevo. Introduce rangos como 1-3, 5, 8-10 y exporta exactamente las páginas que necesitas.",
    howItWorks: [
      "Sube un solo PDF.",
      "Introduce los rangos de páginas que quieres conservar (p. ej. 1-3, 5, 8-10).",
      "Haz clic en Dividir PDF.",
      "Descarga el nuevo documento solo con esas páginas.",
    ],
    faqs: [
      {
        q: "¿Qué formato de rango debo usar?",
        a: "Usa comas y guiones, como 1-3, 5, 8-10. Las páginas se exportan en el orden en que las indiques.",
      },
      {
        q: "¿Puedo extraer una sola página?",
        a: "Sí. Introduce solo ese número de página (por ejemplo, 4) para exportar un PDF de una sola página.",
      },
      {
        q: "¿Se suben mis PDF para dividirlos?",
        a: "No. La división ocurre localmente en tu navegador con pdf-lib; tu archivo nunca sale de tu dispositivo.",
      },
    ],
  },
  "rotate-pdf": {
    name: "Rotar PDF",
    tagline: "Rota páginas concretas o todo el PDF.",
    title: "Rotar PDF — Gira páginas 90/180/270° online (gratis)",
    description:
      "Rota todas las páginas o páginas concretas de un PDF en 90, 180 o 270 grados. Rotación de PDF gratis, privada y en el navegador.",
    h1: "Rotar PDF",
    intro:
      "Corrige páginas giradas o boca abajo. Rota todo el PDF o solo las páginas que elijas, y luego exporta el archivo corregido.",
    howItWorks: [
      "Sube un solo PDF.",
      "Elige el ángulo de rotación y qué páginas rotar.",
      "Haz clic en Rotar PDF.",
      "Descarga el documento rotado.",
    ],
    faqs: [
      {
        q: "¿Puedo rotar solo algunas páginas?",
        a: "Sí. Introduce números de página o rangos concretos, o déjalo en blanco para rotar todas las páginas.",
      },
      {
        q: "¿Rotar reduce la calidad?",
        a: "No. La rotación solo cambia la orientación de cada página, así que el contenido se mantiene idéntico píxel a píxel.",
      },
      {
        q: "¿Se suben mis archivos?",
        a: "No. La rotación se hace localmente en tu navegador; tu PDF nunca sale de tu dispositivo.",
      },
    ],
  },
  "pdf-to-images": {
    name: "PDF a imágenes",
    tagline: "Exporta cada página del PDF como PNG.",
    title: "PDF a imágenes — Convierte páginas de PDF a PNG (en el navegador)",
    description:
      "Convierte cada página de un PDF en una imagen PNG, directamente en tu navegador. Privado y gratis.",
    h1: "PDF a imágenes",
    intro:
      "Renderiza cada página de un PDF como una imagen que puedes descargar. Útil para miniaturas, vistas previas o para pegar páginas en otras apps.",
    howItWorks: [
      "Sube un solo PDF.",
      "Renderizamos cada página en tu navegador.",
      "Exporta las páginas como imágenes PNG.",
      "Descarga los resultados.",
    ],
    faqs: [
      {
        q: "¿Se suben mis archivos?",
        a: "No. El renderizado usa pdf.js localmente en tu navegador.",
      },
      {
        q: "¿Qué resolución tienen las imágenes exportadas?",
        a: "Las páginas se renderizan a una resolución alta, adecuada para compartir y para vistas previas. Las páginas más grandes producen archivos PNG más grandes.",
      },
      {
        q: "¿Puedo obtener JPG en lugar de PNG?",
        a: "Esta herramienta exporta PNG para la mejor calidad. Para obtener JPG, pasa después los PNG por nuestro Conversor de imágenes.",
      },
    ],
  },
  "organize-pdf": {
    name: "Organizar PDF",
    tagline: "Elimina y reordena páginas del PDF.",
    title: "Organizar PDF — Elimina y reordena páginas online (en el navegador)",
    description:
      "Elimina páginas que no quieras y reordena el resto de un PDF en tu navegador. Privado y gratis.",
    h1: "Organizar páginas de PDF",
    intro:
      "Pon orden en un PDF eliminando las páginas que no necesitas y arrastrando el resto hasta el orden correcto.",
    howItWorks: [
      "Sube un solo PDF.",
      "Elimina las páginas que no quieras.",
      "Reordena las páginas restantes.",
      "Exporta el PDF organizado.",
    ],
    faqs: [
      {
        q: "¿Se modifica el archivo original?",
        a: "No. Se genera un nuevo PDF; tu archivo original queda intacto.",
      },
      {
        q: "¿Se suben mis archivos?",
        a: "No. Reordenar y eliminar páginas ocurre localmente en tu navegador; tu PDF nunca sale de tu dispositivo.",
      },
      {
        q: "¿Y si elimino la página equivocada?",
        a: "Tu archivo original nunca se modifica, así que basta con empezar de nuevo con él si eliminas una página por error.",
      },
    ],
  },
  "add-page-numbers": {
    name: "Añadir números de página",
    tagline: "Estampa números de página en un PDF.",
    title: "Añadir números de página a un PDF — Online y privado (en el navegador)",
    description:
      "Añade números de página a un documento PDF en tu navegador. Elige posición y formato. Privado y gratis.",
    h1: "Añadir números de página a un PDF",
    intro:
      "Estampa números de página limpios y consistentes en cada página de tu PDF sin ninguna subida.",
    howItWorks: [
      "Sube un solo PDF.",
      "Elige la posición y el número inicial.",
      "Aplica los números de página.",
      "Descarga el PDF numerado.",
    ],
    faqs: [
      {
        q: "¿Puedo elegir dónde aparecen los números?",
        a: "Sí: podrás elegir una esquina o el centro del pie de página.",
      },
      {
        q: "¿Puedo empezar la numeración desde un número concreto?",
        a: "Sí. Establece el número inicial: práctico cuando tu documento continúa a partir de otro archivo.",
      },
      {
        q: "¿Se suben mis archivos?",
        a: "No. Los números de página se estampan localmente en tu navegador; tu PDF nunca sale de tu dispositivo.",
      },
    ],
  },
  "compress-pdf": {
    name: "Comprimir PDF",
    tagline: "Reduce el tamaño del archivo PDF.",
    title: "Comprimir PDF — Reduce el tamaño del PDF online (gratis, en el navegador)",
    description:
      "Comprime archivos PDF para reducir su tamaño, directamente en tu navegador. Ideal para PDF escaneados o con muchas imágenes. Gratis y privado.",
    h1: "Comprimir PDF",
    intro:
      "Reduce el tamaño de archivo de PDF grandes para compartirlos y enviarlos por correo más fácilmente. Funciona rasterizando las páginas, así que es más eficaz en documentos escaneados o con muchas imágenes, y se ejecuta por completo en tu navegador.",
    howItWorks: [
      "Sube un PDF.",
      "Elige un nivel de compresión (fuerte, equilibrado o ligero).",
      "Haz clic en Comprimir: las páginas se vuelven a renderizar y a guardar localmente.",
      "Descarga el PDF más ligero y compara el tamaño antes y después.",
    ],
    faqs: [
      {
        q: "¿El texto seguirá siendo seleccionable?",
        a: "No. La compresión rasteriza cada página (el texto pasa a formar parte de la imagen), por eso reduce tan bien los PDF escaneados, pero no es lo ideal para documentos solo de texto.",
      },
      {
        q: "¿Por qué mi PDF no se hizo más pequeño?",
        a: "Los PDF solo de texto ya son compactos. Esta herramienta ofrece el mayor ahorro en escaneos y PDF con muchas fotos.",
      },
      {
        q: "¿Se suben mis archivos para comprimirlos?",
        a: "No. La compresión se ejecuta por completo en tu navegador, volviendo a renderizar las páginas localmente; tu PDF nunca sale de tu dispositivo.",
      },
    ],
  },
  "pdf-to-word": {
    name: "PDF a Word",
    tagline: "Extrae el texto del PDF a un Word editable.",
    title: "PDF a Word — Convierte PDF a DOCX editable (gratis, en el navegador)",
    description:
      "Extrae el texto de un PDF a un documento Word (.docx) editable, en tu navegador. Con el mejor esfuerzo posible, gratis y privado.",
    h1: "PDF a Word",
    intro:
      "Extrae el texto de un PDF a un documento Word editable. Es una conversión con el mejor esfuerzo posible: el texto se traspasa para que puedas editarlo, pero no se conservan las columnas, las imágenes ni el diseño exacto. Se ejecuta por completo en tu navegador.",
    howItWorks: [
      "Sube un PDF.",
      "Haz clic en Convertir: el texto se extrae localmente.",
      "Se crea un archivo .docx en tu navegador.",
      "Descárgalo y edítalo en Word, Google Docs o Pages.",
    ],
    faqs: [
      {
        q: "¿Quedará exactamente igual que mi PDF?",
        a: "No. Esto extrae el texto a un documento editable; el diseño complejo, las columnas y las imágenes no se reproducen. Es ideal cuando lo que necesitas sobre todo es recuperar las palabras.",
      },
      {
        q: "¿Se suben mis archivos?",
        a: "No: la extracción y el .docx se producen por completo en tu navegador.",
      },
      {
        q: "¿Puedo editar el resultado?",
        a: "Sí. Obtienes un .docx estándar que puedes abrir y editar en Word, Google Docs o Pages.",
      },
    ],
  },
  "word-to-pdf": {
    name: "Word a PDF",
    tagline: "Convierte un .docx en un PDF para compartir.",
    title: "Word a PDF — Convierte DOCX a PDF online (gratis, en el navegador)",
    description:
      "Convierte un documento Word (.docx) en un PDF que puedes compartir, en tu navegador. Con el mejor esfuerzo posible, gratis y privado.",
    h1: "Word a PDF",
    intro:
      "Convierte un Word .docx en un PDF que puedas compartir. Se conservan el texto y el flujo de los párrafos; el estilo recargado, las imágenes y las tablas pueden simplificarse. Todo se ejecuta en tu navegador.",
    howItWorks: [
      "Sube un documento .docx.",
      "Haz clic en Convertir: el documento se lee localmente.",
      "Se genera un PDF en tu navegador.",
      "Descarga tu PDF.",
    ],
    faqs: [
      {
        q: "¿Qué archivos son compatibles?",
        a: "Archivos Word .docx modernos. El formato más antiguo .doc no es compatible: vuelve a guardarlo como .docx primero.",
      },
      {
        q: "¿Coincidirá exactamente con el diseño de Word?",
        a: "Es una conversión con el mejor esfuerzo posible centrada en el texto y los párrafos; el formato complejo puede simplificarse.",
      },
      {
        q: "¿Se suben mis documentos?",
        a: "No. El .docx se lee y el PDF se genera por completo en tu navegador; tu archivo nunca sale de tu dispositivo.",
      },
    ],
  },
  "pdf-to-excel": {
    name: "PDF a Excel",
    tagline: "Extrae el texto del PDF a una hoja de cálculo.",
    title: "PDF a Excel — Convierte el texto del PDF a XLSX (gratis, en el navegador)",
    description:
      "Extrae el texto de un PDF a una hoja de cálculo Excel (.xlsx) editable en tu navegador. Detección de tablas con el mejor esfuerzo posible, gratis y privado.",
    h1: "PDF a Excel",
    intro:
      "Extrae el texto de un PDF a una hoja de cálculo. Cada línea se convierte en una fila, y los espacios amplios se tratan como saltos de columna. Las tablas reales varían, así que revisa el resultado, pero te ahorra mucho retecleo. Se ejecuta en tu navegador.",
    howItWorks: [
      "Sube un PDF.",
      "Haz clic en Convertir: el texto se extrae localmente.",
      "Se crea un archivo .xlsx, dividiendo las columnas en los espacios amplios.",
      "Descárgalo y ajusta las columnas en Excel o Google Sheets.",
    ],
    faqs: [
      {
        q: "¿Detectará mis tablas a la perfección?",
        a: "No siempre. Los PDF no almacenan la estructura real de las tablas, así que las columnas se deducen del espaciado. Espera tener que corregir algunas celdas, sobre todo en diseños complejos.",
      },
      {
        q: "¿Es privado?",
        a: "Sí: la extracción y la hoja de cálculo se producen por completo en tu navegador.",
      },
      {
        q: "¿Qué formato de hoja de cálculo obtengo?",
        a: "Un archivo .xlsx estándar que puedes abrir en Excel, Google Sheets o Numbers.",
      },
    ],
  },
  "pdf-to-powerpoint": {
    name: "PDF a PowerPoint",
    tagline: "Convierte cada página del PDF en una diapositiva.",
    title: "PDF a PowerPoint — Convierte PDF a PPTX (gratis, en el navegador)",
    description:
      "Convierte las páginas de un PDF en diapositivas de PowerPoint (.pptx) en tu navegador. Cada página se convierte en una imagen a página completa. Gratis y privado.",
    h1: "PDF a PowerPoint",
    intro:
      "Convierte un PDF en una presentación de PowerPoint donde cada página se convierte en una diapositiva. Las diapositivas se ven exactamente como el PDF (cada página se coloca como una imagen a diapositiva completa), así que son perfectas para presentar, aunque su texto no se puede editar individualmente. Se ejecuta en tu navegador.",
    howItWorks: [
      "Sube un PDF.",
      "Haz clic en Convertir: cada página se renderiza localmente.",
      "Se crea un archivo .pptx con una diapositiva por página.",
      "Descárgalo y ábrelo en PowerPoint, Keynote o Google Slides.",
    ],
    faqs: [
      {
        q: "¿Puedo editar el texto de las diapositivas?",
        a: "No directamente: cada diapositiva es una imagen de alta resolución de la página. Así se mantiene un aspecto idéntico al del PDF.",
      },
      {
        q: "¿Es privado?",
        a: "Sí: las páginas se renderizan y el .pptx se crea por completo en tu navegador.",
      },
      {
        q: "¿Qué formato de archivo obtengo?",
        a: "Un .pptx estándar que puedes abrir en PowerPoint, Keynote o Google Slides.",
      },
    ],
  },
  "ocr-pdf": {
    name: "OCR de PDF",
    tagline: "Extrae texto de PDF e imágenes escaneados.",
    title: "OCR de PDF — PDF e imágenes escaneados a texto (gratis, en el navegador)",
    description:
      "Reconoce el texto de PDF e imágenes escaneados y cópialo o descárgalo como texto plano. Se ejecuta por completo en tu navegador: gratis y privado.",
    h1: "OCR — PDF e imagen escaneados a texto",
    intro:
      "Extrae el texto de documentos escaneados, fotos y PDF basados en imágenes usando OCR en el dispositivo. Todo se ejecuta localmente en tu navegador, así que tus documentos siguen siendo privados. Idioma inglés.",
    howItWorks: [
      "Sube un PDF escaneado o imágenes (PNG/JPG).",
      "Haz clic en Extraer texto: la primera vez se descarga el motor de reconocimiento (~10 MB).",
      "Cada página se lee localmente en tu dispositivo.",
      "Copia el texto o descárgalo como archivo .txt.",
    ],
    faqs: [
      {
        q: "¿El OCR se ejecuta en mi navegador?",
        a: "Sí: usa Tesseract (WebAssembly) por completo en tu dispositivo. Tus archivos nunca se suben.",
      },
      {
        q: "¿Qué idiomas son compatibles?",
        a: "Actualmente inglés. El motor descarga su modelo de idioma la primera vez que se usa y luego lo almacena en caché.",
      },
      {
        q: "¿Por qué la primera vez va lenta?",
        a: "El motor de reconocimiento y el modelo de inglés (~10 MB) se descargan una vez en el primer uso. Después es mucho más rápido.",
      },
    ],
  },
  "edit-pdf-text": {
    name: "Editar texto del PDF",
    tagline: "Extrae, edita y reconstruye el texto del PDF.",
    title: "Editar texto del PDF — Extrae, edita y reconstruye (gratis, en el navegador)",
    description:
      "Extrae el texto de un PDF, edítalo página a página y reconstruye un PDF de texto limpio, todo en tu navegador. Gratis y privado.",
    h1: "Editar texto del PDF",
    intro:
      "Corrige erratas y cambia el texto de un PDF. Esto extrae el texto para que puedas editarlo página a página y luego reconstruye un PDF limpio, solo de texto. No se conservan las fuentes, las imágenes ni el diseño exacto originales: es lo mejor cuando lo que necesitas sobre todo es cambiar las palabras. Se ejecuta en tu navegador.",
    howItWorks: [
      "Sube un PDF.",
      "Edita el texto extraído en el cuadro de cada página.",
      "Haz clic en Reconstruir: se genera un nuevo PDF de texto localmente.",
      "Descarga tu PDF editado.",
    ],
    faqs: [
      {
        q: "¿Conserva el diseño original?",
        a: "No. Los PDF almacenan el texto como glifos posicionados, no como párrafos editables, así que la edición real en su sitio no es posible gratis en el navegador. En su lugar, esto reconstruye un PDF de texto limpio a partir de tus ediciones.",
      },
      {
        q: "¿Se suben mis archivos?",
        a: "No: la extracción y el PDF reconstruido ocurren por completo en tu dispositivo.",
      },
      {
        q: "¿Qué PDF funcionan mejor?",
        a: "Los PDF basados en texto en los que sobre todo necesitas corregir la redacción. Los PDF escaneados o solo de imagen no tienen texto extraíble: ejecuta primero OCR.",
      },
    ],
  },
};

export default es;
