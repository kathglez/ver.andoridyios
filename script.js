let currentIndex = 0;
let timelineData = [];

function loadTimeline(type) {

    if(type === "android") {
        timelineData = [
            { title:"Android 1.0", year:"2008", desc:"fue la primera versión comercial del sistema operativo, estableciendo las bases del ecosistema Android. Introdujo la barra de notificaciones desplegable, sincronización con Gmail, Google Maps, YouTube, calendario y contactos, además del Android Market, que permitía descargar aplicaciones aunque de forma limitada. Su interfaz era sencilla y dependía de botones físicos en los dispositivos, y la seguridad era mínima, sin permisos por aplicación ni cifrado. El rendimiento estaba limitado por el hardware de la época, y la conectividad se restringía principalmente a 3G y Wi-Fi básico.", img:"imagenes/version1.0.png" },
            { title:"Android 1.5 Cupcake", year:"2009", desc:"Comenzaron a introducirse características innovadoras como el teclado en pantalla y la capacidad de subir videos a YouTube directamente desde el dispositivo. Tambien introducción de la Android Market (más tarde renombrado como Google Play Store), el primer paso hacia la distribución masiva de aplicaciones.", img:"imagenes/version1.5.png" },
            { title:"Android 2.0 Eclair", year:"2009", desc:"añadió soporte para múltiples cuentas de correo y navegación GPS paso a paso mediante Google Maps Navigation. También mejoró la cámara con flash, zoom digital y balance de blancos, y permitió fondos animados para la interfaz. El sistema se volvió más estable y rápido, la conectividad fue mejorada y se sentaron las bases para aplicaciones más complejas, aunque la seguridad seguía siendo limitada.", img:"imagenes/version2.0.png" },
            { title:"Android 3.0 Honeycomb", year:"2011", desc:"fue diseñado exclusivamente para tablets, introduciendo la interfaz Holo, una barra inferior con botones virtuales y una experiencia de multitarea más eficiente. Se optimizó para procesadores multinúcleo y gráficos acelerados por hardware, lo que permitió un rendimiento fluido en pantallas grandes. La seguridad permaneció básica, pero la compatibilidad con hardware avanzado y tablets modernas fue un gran avance.", img:"imagenes/version3.0.png" },
            { title:"Android 4.0 Ice Cream Sandwich", year:"2011", desc:"unificó la experiencia entre smartphones y tablets, ofreciendo desbloqueo facial, cierre de aplicaciones recientes mediante deslizamiento, administración de datos móviles y una interfaz más limpia y minimalista. Mejoró la integración con redes sociales y optimizó la respuesta táctil y la cámara, mientras que la conectividad se expandió a Wi-Fi más estable y redes móviles. Esta versión sentó las bases de la interacción moderna en Android.", img:"imagenes/version4.0.png" },
            { title:"Android 4.4 KitKat", year:"2013", desc:"se centró en la optimización del rendimiento y la eficiencia energética, lo que permitió que Android funcionara mejor en dispositivos de gama baja. Se introdujo la pantalla transparente en la barra de estado, lo que dio a la interfaz un aspecto más moderno. Google Now se convirtió en una característica más integrada, proporcionando información contextual en la pantalla de inicio. Además, mejoró la capacidad de gestionar las aplicaciones en segundo plano, ayudando a ahorrar batería y mejorar la fluidez del sistema.", img:"imagenes/version4.4.png" },
            { title:"Android 5.0 Lollipop", year:"2014", desc:"representó un rediseño completo con Material Design, incorporando colores vivos y animaciones fluidas. Añadió soporte para procesadores de 64 bits, notificaciones interactivas en la pantalla de bloqueo, perfiles múltiples, cifrado por defecto y mejoras en la duración de la batería mediante Project Volta. También mejoró el sonido y la conectividad, ofreciendo un rendimiento más estable y consistente para smartphones y tablets de gama media-alta.", img:"imagenes/version5.0.png" },
            { title:"Android 6.0 Marshmallow", year:"2015", desc:"introdujo permisos individuales para aplicaciones, modo Doze para ahorro de energía, soporte nativo para huellas digitales y USB-C, así como almacenamiento adoptable mediante tarjetas microSD. Mejoró significativamente la seguridad con autenticación biométrica y optimizó la gestión de memoria y batería, aumentando la compatibilidad con aplicaciones modernas.", img:"imagenes/version6.0.png" },
            { title:"Android 7.0 Nougat", year:"2016", desc:"añadió multitarea avanzada mediante pantalla dividida, respuesta rápida desde notificaciones y soporte de gráficos Vulkan para un rendimiento visual mejorado. Introdujo actualizaciones A/B más seguras, ahorro de datos y compatibilidad con dispositivos VR básicos, ofreciendo una experiencia más eficiente y segura en smartphones y tablets.", img:"imagenes/version7.0.png" },
            { title:"Android 8.0 Oreo", year:"2017", desc:"optimizó el arranque del sistema, limitó aplicaciones en segundo plano para mejorar la duración de la batería y añadió funciones como Picture-in-Picture, canales de notificación y autocompletado inteligente. Refuerzo de seguridad mediante Google Play Protect, iconos adaptativos y compatibilidad ampliada con Wi-Fi y Bluetooth hicieron de esta versión una de las más estables y seguras hasta el momento.", img:"imagenes/version8.0.png" },
            { title:"Android 9.0 Pie", year:"2018", desc:"integró inteligencia artificial para batería y brillo adaptativos, navegación por gestos, y herramientas de Bienestar Digital para controlar el tiempo de uso del dispositivo. Mejoró la seguridad biométrica, la compatibilidad con pantallas notch y la conectividad general, optimizando la experiencia de usuario y el rendimiento energético.", img:"imagenes/version9.0.png" },
            { title:"Android 10", year:"2019", desc:"eliminó los nombres de postres públicamente y añadió modo oscuro global, control más estricto de permisos de ubicación en segundo plano, soporte para 5G y teléfonos plegables, mejoras en privacidad de almacenamiento y compatibilidad con hardware y aplicaciones modernos. La experiencia de multitarea y la eficiencia energética fueron ampliamente optimizadas.", img:"imagenes/version10.png" },
            { title:"Android 11", year:"2020", desc:"introdujo burbujas de conversación, grabador de pantalla nativo, permisos temporales de un solo uso y control centralizado de dispositivos inteligentes. Mejoró la seguridad de almacenamiento, la compatibilidad con IoT y la experiencia de multitarea, consolidándose como un sistema seguro y eficiente para la vida diaria conectada..", img:"imagenes/version11.png" },
            { title:"Android 12", year:"2021", desc:"presentó Material You con colores dinámicos personalizados según el fondo de pantalla, animaciones más suaves y un panel de privacidad con indicadores de cámara y micrófono. Optimizado para tablets y pantallas grandes, mejoró la eficiencia energética y la experiencia del usuario, consolidando la personalización como un elemento central del sistema.", img:"imagenes/version12.png"},
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
