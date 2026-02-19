let currentIndex = 0;
let timelineData = [];

function loadTimeline(type) {

    if(type === "android") {
        timelineData = [
            { title:"Android 1.0", year:"2008", desc:"La primera versión de Android. Era básica, pero innovadora en su tiempo. Ofrecía funciones esenciales como la sincronización con servicios de Google (Gmail, Google Calendar, Google Contacts) y la integración de Google Maps. No tenía una tienda de aplicaciones (Google Play Store), y la navegación se basaba en un diseño sencillo sin muchas personalizaciones.", img:"imagenes/version1.0.png" },
            { title:"Android 1.5 Cupcake", year:"2009", desc:"Comenzaron a introducirse características innovadoras como el teclado en pantalla y la capacidad de subir videos a YouTube directamente desde el dispositivo. Tambien introducción de la Android Market (más tarde renombrado como Google Play Store), el primer paso hacia la distribución masiva de aplicaciones.", img:"imagenes/version1.5.png" },
            { title:"Android 2.0 Eclair", year:"2009", desc:"Mejoró la búsqueda y la experiencia de navegación al introducir Google Maps Navigation. También mejoró considerablemente la experiencia del usuario con soporte para múltiples cuentas, mejoras en cámara (flash y zoom digital) y mayor velocidad del sistema.", img:"imagenes/version2.0.png" },
            { title:"Android 3.0 Honeycomb", year:"2011", desc:"Diseñado solo para tablets. Incorporó interfaz Holo más moderna, barra inferior con botones virtuales, mejor administración de multitarea, aceleración gráfica mejorada y soporte optimizado para pantallas grandes.", img:"imagenes/version3.0.png" },
            { title:"Android 4.0 Ice Cream Sandwich", year:"2011", desc:"Unificó teléfonos y tablets en un solo sistema. Añadió desbloqueo facial, control detallado del consumo de datos, cierre de apps recientes con deslizamiento y mejor integración con redes sociales.", img:"imagenes/version4.0.png" },
            { title:"Android 4.4 KitKat", year:"2013", desc:"se centró en la optimización del rendimiento y la eficiencia energética, lo que permitió que Android funcionara mejor en dispositivos de gama baja. Se introdujo la pantalla transparente en la barra de estado, lo que dio a la interfaz un aspecto más moderno. Google Now se convirtió en una característica más integrada, proporcionando información contextual en la pantalla de inicio. Además, mejoró la capacidad de gestionar las aplicaciones en segundo plano, ayudando a ahorrar batería y mejorar la fluidez del sistema.", img:"imagenes/version4.4.png" },
            { title:"Android 5.0 Lollipop", year:"2014", desc:"trajo el rediseño de Material Design, una nueva interfaz de usuario más colorida e intuitiva.", img:"imagenes/version5.0.png" },
            { title:"Android 6.0 Marshmallow", year:"2015", desc:"introdujo mejoras en la gestión de permisos y la duración de la batería.", img:"imagenes/version6.0.png" },
            { title:"Android 7.0 Nougat", year:"2016", desc:"añadió la funcionalidad de pantalla dividida y mejoras en las notificaciones, permitiendo a los usuarios responder directamente desde el panel de notificaciones.", img:"imagenes/version7.0.png" },
            { title:"Android 8.0 Oreo", year:"2017", desc:"mejoró el rendimiento y la seguridad, y añadió características como el modo Picture-in-Picture y los canales de notificación.", img:"imagenes/version8.0.png" },
            { title:"Android 9.0 Pie", year:"2018", desc:"se centró en la inteligencia artificial para optimizar la duración de la batería y las recomendaciones de aplicaciones.", img:"imagenes/version9.0.png" },
            { title:"Android 10", year:"2019", desc:"abandonó los nombres de postres y trajo el modo oscuro a todo el sistema, junto con nuevas opciones de privacidad", img:"imagenes/version10.png" },
            { title:"Android 11", year:"2020", desc:"mejoró la gestión de conversaciones y las herramientas de control de dispositivos conectados.", img:"imagenes/version11.png" },
            { title:"Android 12", year:"2021", desc:"introdujo un rediseño significativo conocido como «Material You», permitiendo una personalización más profunda de la interfaz de usuario.", img:"imagenes/version12.png"},
            { title:"Android 13", year:"2022", desc:"introdujo iconos de aplicaciones personalizables, configuraciones de idioma por aplicación, controles de privacidad mejorados y una funcionalidad mejorada entre dispositivos.", img:"imagenes/version13.png" },
            { title:"Android 14", year:"2023", desc:"mejora aún más la experiencia del usuario con características como una mayor duración de la batería, medidas de seguridad mejoradas y opciones de personalizaciónampliadas. También ofrece capacidades avanzadas de multitarea, una gestión de recursos más eficiente y una mejor integración con dispositivos portátiles y sistemas de hogar inteligente.", img:"imagenes/version14.png" },
            { title:"Android 15", year:"2024", desc:"Mejoras en navegación por gestos, permisos y optimización para tabletas.", img:"imagenes/version15.png" },
            { title:"Android 16", year:"2025", desc:"enfoca sus principales novedades en la integración profunda de inteligencia artificial, mejoras de seguridad y una interfaz renovada Material 3 Expressive", img:"imagenes/version16.png" }

        ];
    }

    if(type === "ios") {
        timelineData = [
            { title:"iOS 15", year:"2021", desc:"Mejoras en FaceTime (SharePlay), notificaciones personalizables y Focus Mode. Introducción de Live Text y más opciones de privacidad.", img:"imagenes/ios15.png" },
            { title:"iOS 16", year:"2022", desc:"Pantalla de bloqueo personalizable, widgets, mejoras en las notificaciones, y iCloud Shared Photo Library para compartir fotos fácilmente.", img:"imagenes/ios16.png" },
            { title:"iOS 17", year:"2023", desc:"Función StandBy para usar el iPhone como pantalla, Contact Posters para personalizar contactos, mejoras en Siri, y más privacidad en las aplicaciones.", img:"imagenes/ios17.png" },
            { title:"iOS 18", year:"2024", desc:"Esperado enfoque en inteligencia artificial, personalización avanzada de funciones y más integración de AR (realidad aumentada)", img:"imagenes/ios18.png" },
            { title:"iOS 26", year:"2025", desc:"introduce un diseño -Liquid Glass- que ofrece una interfaz más integrada y expresiva, junto con mejoras profundas en Apple Intelligence, seguridad y personalización.", img:"imagenes/ios26.png" }
        ];
    }

    createCarousel();
}

function createCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = "";

    timelineData.forEach(item => {

        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
            <img src="${item.img}" width="240" height="340">
            <div class="info-card">
                <h2>${item.title}</h2>
                <p><strong>Año:</strong> ${item.year}</p>
                <p>${item.desc}</p>
            </div>
        `;

        carousel.appendChild(slide);
    });

    updateSlides();
}

function updateSlides() {

    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, index) => {

        slide.classList.remove("active","left","right");

        if(index === currentIndex) {
            slide.classList.add("active");
        }
        else if(index === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add("left");
        }
        else if(index === (currentIndex + 1) % slides.length) {
            slide.classList.add("right");
        }
    });
}

function moveSlide(direction) {

    currentIndex += direction;

    if(currentIndex < 0) currentIndex = timelineData.length - 1;
    if(currentIndex >= timelineData.length) currentIndex = 0;

    updateSlides();
}
