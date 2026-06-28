import type { GuideContent } from "../../guide-types";

const guides: Record<string, GuideContent> = {
  "compress-pdf-for-email": {
    title: "Cómo comprimir un PDF para enviarlo por correo (gratis, sin subirlo)",
    description:
      "¿Tu correo rebota porque el PDF pesa demasiado? Aquí tienes cómo reducir un PDF por debajo del límite de 10–25 MB gratis, en tu navegador y sin subir el archivo a ningún sitio.",
    h1: "Cómo comprimir un PDF para enviarlo por correo",
    excerpt:
      "Reduce un PDF grande por debajo del límite de correo de 10–25 MB, gratis y sin subirlo a ningún sitio.",
    intro:
      "La mayoría de los proveedores de correo rechazan los archivos adjuntos que superan cierto tamaño: Gmail te limita a 25 MB, Outlook a 20 MB y muchos servidores corporativos a solo 10 MB. Un contrato escaneado o un informe lleno de imágenes puede superar ese límite con facilidad. La buena noticia: puedes reducir casi cualquier PDF por debajo del límite en unos segundos, gratis y sin enviar tu documento al servidor de un desconocido.",
    sections: [
      {
        heading: "Por qué los PDF acaban pesando tanto",
        body: [
          "Los PDF se hinchan por una razón principal: las imágenes. Un documento que es casi todo texto suele ser diminuto, unos cientos de kilobytes. Pero en cuanto escaneas páginas, pegas capturas de pantalla o exportas desde una herramienta de diseño, cada página se convierte en una imagen de alta resolución y el tamaño del archivo se multiplica rápidamente.",
          "Por eso la compresión más eficaz funciona volviendo a codificar esas imágenes a una resolución más razonable. Los PDF solo de texto ya son compactos, así que no esperes milagros ahí: el gran ahorro viene de los escaneos y de los documentos con muchas fotos.",
        ],
      },
      {
        heading: "Comprime tu PDF en el navegador (paso a paso)",
        list: [
          "Abre la herramienta gratuita Comprimir PDF: no se sube nada, se ejecuta en tu dispositivo.",
          "Arrastra el PDF que necesitas enviar por correo.",
          "Elige un nivel de compresión: 'fuerte' para el archivo más pequeño, 'equilibrado' para un buen punto intermedio.",
          "Descarga el resultado y compara el nuevo tamaño con el límite de tu correo (muestra el antes y el después).",
        ],
      },
      {
        heading: "Si sigue siendo demasiado grande",
        body: [
          "Dos alternativas fiables: divide el PDF en partes y envíalas en correos separados, o elimina las páginas que en realidad no necesitas antes de comprimir. Ambas conservan la calidad intacta en lugar de aplastar más todo el documento.",
          "Para documentos que vas a compartir a menudo, la solución a largo plazo más limpia es guardar el archivo en el almacenamiento en la nube y enviar un enlace en lugar del adjunto: sin límite de tamaño, y el destinatario siempre recibe la versión más reciente.",
        ],
      },
      {
        heading: "Una nota sobre la privacidad",
        body: [
          "Muchas webs de 'comprimir PDF' funcionan subiendo tu archivo a sus servidores, procesándolo allí y devolviéndotelo. Para una factura, un contrato o un formulario médico, eso es un problema real de privacidad. La herramienta de arriba hace todo localmente en tu navegador usando el procesamiento de tu propio dispositivo: el archivo nunca sale de tu ordenador.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es el tamaño máximo de un archivo adjunto de correo?",
        a: "Gmail permite 25 MB, Outlook.com 20 MB y muchos servidores de correo del trabajo limitan a 10 MB. Procura quedar por debajo del límite más bajo que pueda tener tu destinatario.",
      },
      {
        q: "¿Comprimir arruinará la calidad?",
        a: "En escaneos y PDF con muchas imágenes el cambio suele apenas notarse con calidad 'equilibrada'. El texto sigue siendo legible; solo se vuelven a codificar las imágenes.",
      },
      {
        q: "¿Es seguro comprimir PDF confidenciales online?",
        a: "Solo si la herramienta procesa el archivo en tu navegador. La herramienta Comprimir PDF de aquí nunca sube tu documento, así que los archivos confidenciales se quedan en tu dispositivo.",
      },
    ],
  },
  "merge-pdf-without-uploading": {
    title: "Cómo combinar archivos PDF sin subirlos",
    description:
      "Combina varios PDF en un solo documento sin subir nada a un servidor. Una forma gratuita, privada y en el navegador de unir PDF en cualquier ordenador.",
    h1: "Cómo combinar archivos PDF sin subirlos",
    excerpt:
      "Combina varios PDF en un solo archivo de forma privada: la unión ocurre en tu navegador, no en un servidor.",
    intro:
      "Combinar PDF es una de las tareas más comunes con documentos: unir una factura a un recibo, juntar páginas escaneadas o ensamblar un informe a partir de varias exportaciones. La mayoría de los combinadores online suben tus archivos para hacerlo. Si tus documentos son sensibles —y los PDF suelen serlo—, aquí tienes cómo combinarlos sin que nada salga de tu ordenador.",
    sections: [
      {
        heading: "Por qué importa el 'sin subir nada'",
        body: [
          "Cuando una web combina tus PDF, el enfoque tradicional envía cada archivo a sus servidores, los une allí y devuelve el resultado. Tus documentos quedan en la máquina de otra persona, aunque sea brevemente, y estás confiando en sus políticas de retención y seguridad.",
          "Los navegadores modernos son lo bastante potentes como para hacer todo el trabajo localmente. Una herramienta diseñada así lee tus archivos en la memoria del navegador, los combina en tu propio dispositivo y te entrega el PDF terminado directamente: sin viaje al servidor, sin subidas.",
        ],
      },
      {
        heading: "Combina tus PDF (paso a paso)",
        list: [
          "Abre la herramienta gratuita Combinar PDF: se ejecuta por completo en tu navegador.",
          "Añade dos o más archivos PDF arrastrándolos.",
          "Arrastra los archivos hasta el orden exacto en que quieres combinarlos.",
          "Haz clic en Combinar y descarga tu único documento combinado.",
        ],
      },
      {
        heading: "Consejos para un resultado limpio",
        body: [
          "El orden importa: organiza los archivos antes de combinar para no tener que rehacerlo. Si solo necesitas algunas páginas de un archivo, recórtalo antes con una herramienta de dividir u organizar y luego combina la parte más pequeña.",
          "Combinar copia cada página tal cual, así que el texto sigue siendo seleccionable y la calidad de imagen se conserva exactamente: no estás aplanando ni volviendo a renderizar nada.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Hay un límite de cuántos PDF puedo combinar?",
        a: "No hay límite del servidor porque no se sube nada. El límite práctico es la memoria de tu dispositivo y el tamaño total de los archivos.",
      },
      {
        q: "¿Combinar cambiará la calidad o hará que el texto no se pueda seleccionar?",
        a: "No. Las páginas se copian al nuevo documento sin cambios, así que el texto sigue siendo seleccionable y las imágenes mantienen su resolución original.",
      },
      {
        q: "¿Funciona en Mac, Windows o Chromebook?",
        a: "Sí. Como se ejecuta en el navegador, funciona en cualquier sistema operativo con un navegador moderno, sin instalar nada.",
      },
    ],
  },
  "convert-heic-to-jpg-on-windows": {
    title: "Cómo convertir HEIC a JPG en Windows (gratis)",
    description:
      "¿Windows no abre las fotos HEIC de tu iPhone? Convierte HEIC a JPG gratis en tu navegador: sin software que instalar y sin que tus fotos se suban a ningún sitio.",
    h1: "Cómo convertir HEIC a JPG en Windows",
    excerpt:
      "Abre las fotos HEIC del iPhone en Windows convirtiéndolas a JPG: gratis, sin instalar nada y sin subirlas.",
    intro:
      "Los iPhone guardan las fotos en HEIC, un formato que mantiene una calidad alta usando menos espacio. El problema: Windows, el software antiguo y muchas webs todavía no pueden abrir archivos HEIC. Convertirlos a JPG lo soluciona al instante, y puedes hacerlo gratis en tu navegador sin instalar nada ni entregar tus fotos a una web.",
    sections: [
      {
        heading: "Por qué tus fotos del iPhone son HEIC",
        body: [
          "Desde iOS 11, Apple usa HEIC (High Efficiency Image Container) por defecto porque almacena la misma calidad de imagen en aproximadamente la mitad del tamaño de archivo que JPG. Es estupendo en tu teléfono, pero la compatibilidad en otros sitios sigue siendo irregular, por eso una foto que se ve bien en tu iPhone se niega a abrirse en un PC con Windows o a subirse a un formulario web antiguo.",
          "JPG, en cambio, se abre literalmente en todas partes. Convertir es la forma más rápida de hacer que tus fotos sean utilizables en cualquier lugar.",
        ],
      },
      {
        heading: "Convierte HEIC a JPG (paso a paso)",
        list: [
          "Abre la herramienta gratuita HEIC a JPG en tu navegador en el PC con Windows.",
          "Arrastra una o varias fotos .heic.",
          "Deja que la herramienta las decodifique y las convierta a JPG en tu dispositivo.",
          "Descarga los JPG, ya abribles en Fotos, Office y cualquier web.",
        ],
      },
      {
        heading: "Evita que las fotos nuevas se guarden como HEIC (opcional)",
        body: [
          "Si prefieres no convertir cada vez, puedes hacer que tu iPhone capture directamente en JPG: abre Ajustes → Cámara → Formatos y elige 'Más compatible'. A partir de entonces, las fotos nuevas serán JPG. Tu biblioteca HEIC existente sigue necesitando conversión, pero las nuevas tomas no.",
        ],
      },
      {
        heading: "Mantén tus fotos privadas",
        body: [
          "Las fotos son algo personal, así que conviene saber que muchos conversores de HEIC suben tus imágenes a sus servidores. La herramienta de aquí decodifica y convierte todo en tu navegador: tus fotos nunca salen del ordenador, algo que importa cuando estás convirtiendo un carrete entero.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Perderé calidad al convertir de HEIC a JPG?",
        a: "Hay un pequeño cambio porque JPG es un formato con pérdida, pero es visualmente insignificante en fotos del día a día, y a cambio ganas compatibilidad en todas partes.",
      },
      {
        q: "¿Necesito instalar software en Windows?",
        a: "No. La conversión se ejecuta en tu navegador, así que no hay nada que descargar ni instalar.",
      },
      {
        q: "¿Por qué a veces falla la conversión de HEIC?",
        a: "HEIC no se puede decodificar de forma nativa en todos los navegadores. La herramienta usa un decodificador con el mejor esfuerzo posible; si un archivo no se convierte, probar con otro navegador suele ayudar.",
      },
    ],
  },
  "convert-pdf-to-editable-word": {
    title: "Cómo convertir un PDF en un documento Word editable (gratis)",
    description:
      "¿Necesitas editar el texto de un PDF? Aquí tienes cómo convertir un PDF en un archivo Word (.docx) editable gratis en tu navegador, y qué esperar del resultado.",
    h1: "Cómo convertir un PDF en un documento Word editable",
    excerpt:
      "Extrae el texto de un PDF a un .docx editable: gratis, en tu navegador y con expectativas realistas.",
    intro:
      "Los PDF están diseñados para verse igual en todas partes, que es justo por lo que resultan incómodos de editar. Si necesitas cambiar la redacción de un PDF —corregir una errata, actualizar una cifra, reutilizar un párrafo—, lo habitual es convertirlo primero en un documento Word editable. Aquí tienes cómo hacerlo gratis en tu navegador, además de una mirada honesta a lo que se convierte bien y lo que no.",
    sections: [
      {
        heading: "Qué puede y qué no puede hacer 'PDF a Word'",
        body: [
          "Conviene fijar las expectativas de entrada. Un PDF almacena el texto como glifos posicionados, no como párrafos que fluyen, así que ninguna herramienta gratuita puede reconstruir a la perfección un diseño complejo. Lo que un buen conversor hace bien es extraer las palabras a un .docx editable con el que puedes trabajar: el texto se traspasa limpiamente para que puedas editarlo.",
          "Lo que no siempre sobrevive: los diseños a varias columnas, las fuentes exactas, las imágenes incrustadas y las tablas intrincadas. Si tu PDF es sobre todo prosa, obtendrás un resultado excelente. Si es un folleto muy diseñado, espera tener que reformatear algo.",
        ],
      },
      {
        heading: "Convierte PDF a Word (paso a paso)",
        list: [
          "Abre la herramienta gratuita PDF a Word: extrae el texto localmente en tu navegador.",
          "Arrastra tu PDF.",
          "Haz clic en Convertir; el texto se extrae y se crea un .docx en tu dispositivo.",
          "Descarga el .docx y ábrelo en Word, Google Docs o Pages para editarlo.",
        ],
      },
      {
        heading: "¿Y si el PDF es un escaneo?",
        body: [
          "Si tu PDF es una imagen escaneada de una página, no hay texto real dentro que extraer: es una foto. En ese caso, pásalo primero por OCR (reconocimiento óptico de caracteres) para convertir la imagen en texto reconocible y luego conviértelo. Nuestra herramienta de OCR también hace esto en el navegador.",
        ],
      },
      {
        heading: "Editar sin convertir",
        body: [
          "A veces solo necesitas corregir unas pocas palabras y no quieres un documento Word completo. En ese caso, una herramienta de 'editar texto del PDF' en el navegador te permite extraer el texto, cambiarlo y reconstruir un PDF de texto limpio: práctico para correcciones rápidas.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿El archivo Word se verá exactamente igual que mi PDF?",
        a: "No exactamente. El texto se convierte bien para que puedas editarlo, pero los diseños complejos, las columnas y las imágenes no se reproducen a la perfección. Es ideal cuando lo que necesitas sobre todo es recuperar las palabras.",
      },
      {
        q: "¿Se suben mis archivos durante la conversión?",
        a: "No. La extracción y el .docx se producen por completo en tu navegador, así que el documento nunca sale de tu dispositivo.",
      },
      {
        q: "¿Puedo convertir un PDF escaneado a Word?",
        a: "Pásalo primero por OCR para reconocer el texto y luego conviértelo. Un escaneo por sí solo no tiene texto extraíble: es una imagen.",
      },
    ],
  },
  "reduce-image-size-without-losing-quality": {
    title: "Cómo reducir el tamaño de archivo de una imagen sin perder calidad (gratis)",
    description:
      "Reduce imágenes JPG, PNG y WebP para webs más rápidas y subidas más ligeras, sin una caída evidente de calidad. Gratis y privado, directamente en tu navegador.",
    h1: "Cómo reducir el tamaño de archivo de una imagen sin perder calidad",
    excerpt:
      "Haz las imágenes más pequeñas para la web y las subidas manteniéndolas nítidas: gratis y en el navegador.",
    intro:
      "Los archivos de imagen grandes ralentizan las webs, recargan el correo y chocan con los límites de subida. El truco está en reducir el tamaño de archivo sin una caída visible de calidad, y la mayoría de las veces eso es del todo posible, porque las imágenes llevan mucha más información de la que el ojo realmente necesita. Aquí tienes cómo hacerlo gratis en tu navegador.",
    sections: [
      {
        heading: "Comprimir vs. redimensionar: conoce la diferencia",
        body: [
          "Estos dos se confunden constantemente. Comprimir reduce el tamaño de archivo almacenando la imagen de forma más eficiente mientras mantiene el mismo ancho y alto. Redimensionar cambia las dimensiones reales en píxeles. Para la mayoría de los problemas de 'mi imagen pesa demasiado', el primer paso correcto es comprimir; redimensiona solo cuando la imagen también sea más grande en pantalla de lo necesario.",
          "A menudo los mejores resultados vienen de hacer ambas cosas: redimensiona una foto de 6000 píxeles de ancho hasta los 1600 píxeles que tu web realmente muestra y luego comprímela. El ahorro puede ser enorme.",
        ],
      },
      {
        heading: "Reduce el tamaño de archivo (paso a paso)",
        list: [
          "Abre la herramienta gratuita Comprimir imagen en tu navegador.",
          "Arrastra una imagen JPG, PNG o WebP.",
          "Baja el control de calidad mientras observas el tamaño de salida estimado: un 70–80% suele ser invisible para el ojo.",
          "Descarga la imagen más pequeña y compara el tamaño antes y después.",
        ],
      },
      {
        heading: "Elige el formato adecuado",
        body: [
          "La elección de formato importa. JPG es lo mejor para fotografías. PNG es lo mejor para gráficos con bordes nítidos o transparencia, pero no tiene pérdida y suele ser grande: convertir una foto de PNG a JPG o WebP puede reducir drásticamente el tamaño. WebP suele superar a ambos con la misma calidad, si todos los dispositivos que necesitan la imagen lo admiten.",
        ],
      },
      {
        heading: "Por qué hacerlo en el navegador",
        body: [
          "Subir imágenes a una web de compresión es lento para archivos grandes y significa que tus fotos pasan por el servidor de otra persona. Una herramienta en el navegador comprime al instante en tu propio dispositivo: más rápido, y tus imágenes se mantienen privadas.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto puedo comprimir antes de que la calidad se resienta?",
        a: "Para fotos, una calidad del 70–80% suele ser indistinguible del original a la vez que reduce el tamaño de forma sustancial. Baja más para miniaturas, donde el detalle importa menos.",
      },
      {
        q: "¿Comprimir cambia las dimensiones de la imagen?",
        a: "No. La compresión mantiene el mismo ancho y alto; solo almacena la imagen de forma más eficiente. Usa una herramienta de redimensionar si además quieres dimensiones más pequeñas.",
      },
      {
        q: "¿Qué formato da el archivo más pequeño?",
        a: "Para fotos, WebP suele ser el más pequeño, luego JPG. PNG conviene reservarlo para gráficos y transparencia, donde brilla a pesar de sus tamaños mayores.",
      },
    ],
  },
  "split-pdf-extract-pages": {
    title: "Cómo dividir un PDF o extraer páginas concretas (gratis)",
    description:
      "Extrae páginas o rangos de páginas concretos de un PDF a un archivo nuevo: gratis, privado y en tu navegador. Una guía sencilla para dividir y extraer páginas de PDF.",
    h1: "Cómo dividir un PDF o extraer páginas concretas",
    excerpt:
      "Extrae solo las páginas que necesitas de un PDF a un archivo nuevo: gratis y por completo en tu navegador.",
    intro:
      "No todos los PDF necesitan compartirse enteros. Quizá solo quieres las páginas 3 a 5 de un informe largo, o necesitas sacar una única página firmada de un contrato. Dividir un PDF te permite extraer exactamente las páginas que necesitas a un archivo nuevo, y puedes hacerlo gratis en tu navegador, sin subir el original a ningún sitio.",
    sections: [
      {
        heading: "Dividir vs. organizar",
        body: [
          "Hay dos tareas relacionadas. Dividir (o extraer) saca un conjunto de páginas a un PDF nuevo, dejando tu original intacto. Organizar reordena y elimina páginas dentro de un documento. Si tu objetivo es 'solo quiero estas páginas concretas como su propio archivo', dividir es lo que buscas.",
        ],
      },
      {
        heading: "Extrae páginas (paso a paso)",
        list: [
          "Abre la herramienta gratuita Dividir PDF en tu navegador.",
          "Arrastra el PDF del que quieres sacar páginas.",
          "Introduce las páginas o rangos que quieres conservar, por ejemplo 1-3, 5, 8-10.",
          "Haz clic en Dividir y descarga el nuevo PDF que contiene solo esas páginas.",
        ],
      },
      {
        heading: "La sintaxis de rangos, explicada",
        body: [
          "Los rangos usan comas y guiones. '1-3' significa de la página uno a la tres; un solo número como '5' toma solo esa página; y puedes combinarlos: '1-3, 5, 8-10'. Las páginas se exportan en el orden en que las indicas, así que puedes reordenar mientras extraes.",
          "¿Quieres una sola página? Solo introduce su número por sí solo, por ejemplo '4', para exportar un PDF de una sola página.",
        ],
      },
      {
        heading: "Privado por diseño",
        body: [
          "La división ocurre por completo en tu navegador usando el procesamiento de tu propio dispositivo, así que un contrato o informe confidencial nunca se sube. Cuando terminas, el archivo original queda sin cambios: simplemente has creado un PDF nuevo y más pequeño junto a él.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué formato de rango debo usar?",
        a: "Usa comas y guiones, como 1-3, 5, 8-10. Las páginas se exportan en el orden en que las indiques.",
      },
      {
        q: "¿Puedo extraer una sola página?",
        a: "Sí: introduce solo ese número de página (por ejemplo, 4) para exportar un PDF de una sola página.",
      },
      {
        q: "¿Dividir cambia mi archivo original?",
        a: "No. Se crea un PDF nuevo con las páginas que elegiste; tu documento original queda intacto.",
      },
    ],
  },
};

export default guides;
