import type { Messages } from "./en";
import type { DeepPartial } from "./types";

const es: DeepPartial<Messages> = {
  nav: {
    pdf: "PDF",
    image: "Imagen",
    convert: "Convertir",
    language: "Idioma",
  },
  footer: {
    tagline: "Herramientas de archivos privadas, en el navegador",
    home: "Inicio",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
  },
  home: {
    title: "Herramientas de archivos gratis y privadas",
    subtitle:
      "Convierte, comprime y combina PDF e imágenes, directamente en tu navegador. No se sube nada. Tus archivos nunca salen de tu dispositivo.",
    badge: "🔒 100% en el navegador · Sin registro · Sin almacenamiento de archivos",
    toolsCount: "{count} herramientas y subiendo.",
  },
  categories: {
    pdf: "Herramientas PDF",
    image: "Herramientas de imagen",
    convert: "Convertir",
  },
  tool: {
    trust: "100% en tu navegador · los archivos nunca se suben · sin registro",
    home: "Inicio",
    howItWorks: "Cómo funciona",
    faq: "Preguntas frecuentes",
    related: "Herramientas relacionadas",
    privateHeading: "100% privado",
    privateBody:
      "Todo se ejecuta en tu navegador usando el procesamiento de tu propio dispositivo. Sin subidas, sin almacenamiento, sin registro.",
  },
  privacyNote:
    "Tus archivos se procesan en tu navegador y nunca salen de tu dispositivo.",
  widgets: {
    dropTitleMulti: "Arrastra y suelta archivos aquí",
    dropTitleSingle: "Arrastra y suelta un archivo aquí",
    browse: "o haz clic para examinar",
    remove: "Quitar",
    moveUp: "Subir",
    moveDown: "Bajar",
    working: "Procesando…",
    loadingTool: "Cargando herramienta…",
    ready: "Tu archivo está listo",
    download: "Descargar",
    startOver: "Empezar de nuevo",
    was: "era",
    smaller: "más pequeño",
    larger: "más grande",
    dismiss: "Descartar",
    bestEffort: "Conversión aproximada:",
    comingSoonBanner: "Esta herramienta está en desarrollo y aún no está disponible.",
    betaConversion: "🚧 Beta: esta conversión estará disponible pronto.",
    emailDemo: "Aún estamos creando esta. Déjanos tu correo y te avisaremos en cuanto esté lista.",
    emailPlaceholder: "you@example.com",
    notifyMe: "Avísame",
    notifyThanks: "¡Gracias! Nos pondremos en contacto. (Esto es una demostración de la interfaz y no se almacena.)",
  },
  affiliate: {
    disclosure: "Algunos enlaces de esta página son enlaces de afiliados. Si compras a través de ellos, podemos ganar una comisión, sin coste adicional para ti.",
    ctaHeading: "¿Necesitas una conversión perfecta cada vez?",
    ctaBody: "Esta herramienta en el navegador es gratuita y hace lo posible por dar buenos resultados. Para resultados perfectos en archivos complejos o grandes, una aplicación de escritorio dedicada puede ofrecer más.",
    ctaButton: "Ver herramienta recomendada",
  },
  consent: {
    message: "Usamos cookies para analíticas y, en el futuro, para publicidad. Puedes aceptar o rechazar las cookies no esenciales.",
    accept: "Aceptar",
    reject: "Rechazar",
    learnMore: "Política de privacidad",
  },
  suggest: {
    prompt: "¿Ver este sitio en {lang}?",
    accept: "Cambiar a {lang}",
    dismiss: "No, gracias",
  },
  notFound: {
    title: "Página no encontrada",
    body: "Esa herramienta o página no existe (todavía).",
    cta: "Volver a todas las herramientas",
  },
  legal: {
    privacy: {
      title: "Política de privacidad",
      updated: "Última actualización: junio de 2026",
      sections: [
        {
          heading: "La versión corta",
          body: "Tus archivos se procesan en tu navegador y nunca salen de tu dispositivo. No los subimos, no los almacenamos y no podemos verlos.",
        },
        {
          heading: "Cómo funciona el procesamiento de archivos",
          body: "Todas las herramientas de FileTools se ejecutan por completo como JavaScript del lado del cliente. Cuando seleccionas un archivo, se carga en la memoria de tu navegador, se procesa en tu propio dispositivo y se te ofrece de vuelta como descarga. Ningún dato de los archivos se transmite nunca a un servidor.",
        },
        {
          heading: "Analítica y cookies",
          body: "Podemos usar analíticas agregadas y respetuosas con la privacidad para entender qué herramientas son populares. No vendemos datos personales. Si en el futuro se añade publicidad, esta política se actualizará para describirla con claridad.",
        },
        {
          heading: "Contacto",
          body: "¿Tienes dudas sobre la privacidad? Consulta nuestra página de contacto.",
        },
      ],
    },
    terms: {
      title: "Términos del servicio",
      updated: "Última actualización: junio de 2026",
      sections: [
        {
          heading: "Aceptación",
          body: "Al usar FileTools aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.",
        },
        {
          heading: "El servicio",
          body: "FileTools ofrece utilidades gratuitas y basadas en el navegador para trabajar con archivos PDF e imágenes. Todo el procesamiento ocurre en tu dispositivo. El servicio se ofrece \"tal cual\", sin garantías de ningún tipo.",
        },
        {
          heading: "Tu responsabilidad",
          body: "Eres responsable de los archivos que procesas y de mantener tus propias copias de seguridad. Como el procesamiento ocurre localmente, no somos responsables de ninguna pérdida de datos, y siempre deberías conservar una copia de tus archivos originales.",
        },
        {
          heading: "Uso aceptable",
          body: "No uses FileTools para procesar contenido sobre el que no tengas derechos, ni de ninguna forma que infrinja la ley.",
        },
        {
          heading: "Limitación de responsabilidad",
          body: "En la máxima medida permitida por la ley, FileTools y sus autores no se hacen responsables de ningún daño derivado del uso, o de la imposibilidad de uso, del servicio.",
        },
        {
          heading: "Cambios",
          body: "Podemos actualizar estos términos de vez en cuando. El uso continuado del sitio significa que aceptas los términos vigentes.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      intro:
        "¿Encontraste un error, tienes una sugerencia o quieres una herramienta nueva? Nos encantaría saber de ti.",
      emailHeading: "Correo electrónico",
      emailBody: "Escríbenos a hello@filetools.example.com.",
      filesHeading: "Una nota sobre los archivos",
      filesBody:
        "Por favor, no nos envíes tus archivos por correo. Todas las herramientas se ejecutan por completo en tu navegador, así que no podemos acceder a ellos ni los necesitamos para ayudarte.",
    },
  },
};

export default es;
