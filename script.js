let currentIndex = 0;
let timelineData = [];

function loadTimeline(type) {

    if(type === "android") {
        timelineData = [
            { title:"Android 1.0 version API 1", year:"2008", desc:"fue la primera versión comercial del sistema operativo, estableciendo las bases del ecosistema Android. Introdujo la barra de notificaciones desplegable, sincronización con Gmail, Google Maps, YouTube, calendario y contactos, además del Android Market, que permitía descargar aplicaciones aunque de forma limitada. Su interfaz era sencilla y dependía de botones físicos en los dispositivos, y la seguridad era mínima, sin permisos por aplicación ni cifrado. El rendimiento estaba limitado por el hardware de la época, y la conectividad se restringía principalmente a 3G y Wi-Fi básico.", img:"imagenes/version1.0.png" },
            { title:"Android 1.5 Cupcake version API 3", year:"2009", desc:"Comenzaron a introducirse características innovadoras como el teclado en pantalla y la capacidad de subir videos a YouTube directamente desde el dispositivo. Tambien introducción de la Android Market (más tarde renombrado como Google Play Store), el primer paso hacia la distribución masiva de aplicaciones.", img:"imagenes/version1.5.png" },
            { title:"Android 2.0 Eclair version API 5", year:"2009", desc:"añadió soporte para múltiples cuentas de correo y navegación GPS paso a paso mediante Google Maps Navigation. También mejoró la cámara con flash, zoom digital y balance de blancos, y permitió fondos animados para la interfaz. El sistema se volvió más estable y rápido, la conectividad fue mejorada y se sentaron las bases para aplicaciones más complejas, aunque la seguridad seguía siendo limitada.", img:"imagenes/version2.0.png" },
            { title:"Android 3.0 Honeycomb version API 11", year:"2011", desc:"fue diseñado exclusivamente para tablets, introduciendo la interfaz Holo, una barra inferior con botones virtuales y una experiencia de multitarea más eficiente. Se optimizó para procesadores multinúcleo y gráficos acelerados por hardware, lo que permitió un rendimiento fluido en pantallas grandes. La seguridad permaneció básica, pero la compatibilidad con hardware avanzado y tablets modernas fue un gran avance.", img:"imagenes/version3.0.png" },
            { title:"Android 4.0 Ice Cream Sandwich version API 14 15", year:"2011", desc:"unificó la experiencia entre smartphones y tablets, ofreciendo desbloqueo facial, cierre de aplicaciones recientes mediante deslizamiento, administración de datos móviles y una interfaz más limpia y minimalista. Mejoró la integración con redes sociales y optimizó la respuesta táctil y la cámara, mientras que la conectividad se expandió a Wi-Fi más estable y redes móviles. Esta versión sentó las bases de la interacción moderna en Android.", img:"imagenes/version4.0.png" },
            { title:"Android 4.4 KitKat version API 19 20", year:"2013", desc:"se centró en la optimización del rendimiento y la eficiencia energética, lo que permitió que Android funcionara mejor en dispositivos de gama baja. Se introdujo la pantalla transparente en la barra de estado, lo que dio a la interfaz un aspecto más moderno. Google Now se convirtió en una característica más integrada, proporcionando información contextual en la pantalla de inicio. Además, mejoró la capacidad de gestionar las aplicaciones en segundo plano, ayudando a ahorrar batería y mejorar la fluidez del sistema.", img:"imagenes/version4.4.png" },
            { title:"Android 5.0 Lollipop version API 21 22", year:"2014", desc:"representó un rediseño completo con Material Design, incorporando colores vivos y animaciones fluidas. Añadió soporte para procesadores de 64 bits, notificaciones interactivas en la pantalla de bloqueo, perfiles múltiples, cifrado por defecto y mejoras en la duración de la batería mediante Project Volta. También mejoró el sonido y la conectividad, ofreciendo un rendimiento más estable y consistente para smartphones y tablets de gama media-alta.", img:"imagenes/version5.0.png" },
            { title:"Android 6.0 Marshmallow version API 23", year:"2015", desc:"introdujo permisos individuales para aplicaciones, modo Doze para ahorro de energía, soporte nativo para huellas digitales y USB-C, así como almacenamiento adoptable mediante tarjetas microSD. Mejoró significativamente la seguridad con autenticación biométrica y optimizó la gestión de memoria y batería, aumentando la compatibilidad con aplicaciones modernas.", img:"imagenes/version6.0.png" },
            { title:"Android 7.0 Nougat version API 24 25", year:"2016", desc:"añadió multitarea avanzada mediante pantalla dividida, respuesta rápida desde notificaciones y soporte de gráficos Vulkan para un rendimiento visual mejorado. Introdujo actualizaciones A/B más seguras, ahorro de datos y compatibilidad con dispositivos VR básicos, ofreciendo una experiencia más eficiente y segura en smartphones y tablets.", img:"imagenes/version7.0.png" },
            { title:"Android 8.0 Oreo version API 26 27", year:"2017", desc:"optimizó el arranque del sistema, limitó aplicaciones en segundo plano para mejorar la duración de la batería y añadió funciones como Picture-in-Picture, canales de notificación y autocompletado inteligente. Refuerzo de seguridad mediante Google Play Protect, iconos adaptativos y compatibilidad ampliada con Wi-Fi y Bluetooth hicieron de esta versión una de las más estables y seguras hasta el momento.", img:"imagenes/version8.0.png" },
            { title:"Android 9.0 Pie version API 28", year:"2018", desc:"integró inteligencia artificial para batería y brillo adaptativos, navegación por gestos, y herramientas de Bienestar Digital para controlar el tiempo de uso del dispositivo. Mejoró la seguridad biométrica, la compatibilidad con pantallas notch y la conectividad general, optimizando la experiencia de usuario y el rendimiento energético.", img:"imagenes/version9.0.png" },
            { title:"Android 10 version API 29", year:"2019", desc:"eliminó los nombres de postres públicamente y añadió modo oscuro global, control más estricto de permisos de ubicación en segundo plano, soporte para 5G y teléfonos plegables, mejoras en privacidad de almacenamiento y compatibilidad con hardware y aplicaciones modernos. La experiencia de multitarea y la eficiencia energética fueron ampliamente optimizadas.", img:"imagenes/version10.png" },
            { title:"Android 11 version API 30", year:"2020", desc:"introdujo burbujas de conversación, grabador de pantalla nativo, permisos temporales de un solo uso y control centralizado de dispositivos inteligentes. Mejoró la seguridad de almacenamiento, la compatibilidad con IoT y la experiencia de multitarea, consolidándose como un sistema seguro y eficiente para la vida diaria conectada..", img:"imagenes/version11.png" },
            { title:"Android 12 version API 31", year:"2021", desc:"presentó Material You con colores dinámicos personalizados según el fondo de pantalla, animaciones más suaves y un panel de privacidad con indicadores de cámara y micrófono. Optimizado para tablets y pantallas grandes, mejoró la eficiencia energética y la experiencia del usuario, consolidando la personalización como un elemento central del sistema.", img:"imagenes/version12.png"},
            { title:"Android 13 version API 33", year:"2022", desc:"permitió establecer idioma por aplicación, control más detallado de notificaciones y permisos específicos para fotos y videos. Mejoró la compatibilidad con audio Bluetooth LE y optimizó el rendimiento en tablets y pantallas grandes, reforzando la seguridad y la privacidad de los usuarios.", img:"imagenes/version13.png" },
            { title:"Android 14 version API 34", year:"2023", desc:"mejora aún más la experiencia del usuario con características como una mayor duración de la batería, medidas de seguridad mejoradas y opciones de personalizaciónampliadas. También ofrece capacidades avanzadas de multitarea, una gestión de recursos más eficiente y una mejor integración con dispositivos portátiles y sistemas de hogar inteligente.", img:"imagenes/version14.png" },
            { title:"Android 15 version API 35", year:"2024", desc:"potenció la multitarea en dispositivos plegables y tablets, ofreció notificaciones inteligentes, mayor control sobre procesos en segundo plano y optimización de batería y memoria. La privacidad y la seguridad se reforzaron, consolidando Android como un sistema eficiente para productividad y entretenimiento.", img:"imagenes/version15.png" },
            { title:"Android 16 version API 36", year:"2025", desc:"integra funciones avanzadas de inteligencia artificial a nivel sistema, optimizando la gestión de recursos, la multitarea y el rendimiento en dispositivos modernos, incluyendo plegables y tablets. La seguridad contra malware y exploits es más estricta, mientras que la experiencia de usuario es altamente personalizable, fluida y eficiente.", img:"imagenes/version16.png" }

        ];
    }

    if(type === "ios") {
        timelineData = [
            { title:"iOS 15", year:"2021", desc:"Se centró en mejorar la comunicación y la productividad. Introdujo mejoras importantes en FaceTime como audio espacial, modo retrato en videollamadas y enlaces para unirse desde otros dispositivos. Añadió “Focus” para gestionar notificaciones según la actividad del usuario, rediseñó las notificaciones con nuevos resúmenes inteligentes y mejoró Safari con una barra de direcciones rediseñada. También incorporó Live Text, que permite reconocer texto en fotos mediante inteligencia artificial, y mejoras en Mapas con visualización 3D más detallada.", img:"imagenes/ios15.png" },
            { title:"iOS 16", year:"2022", desc:"Destacó por la gran personalización de la pantalla de bloqueo, permitiendo cambiar fuentes, widgets y fondos con profundidad dinámica. Se mejoró Mensajes con la posibilidad de editar o deshacer el envío de mensajes, y Mail permitió programar y cancelar correos. Se añadió la función de Biblioteca Compartida en Fotos y mejoras importantes en privacidad y seguridad, incluyendo Passkeys como alternativa más segura a las contraseñas tradicionales.", img:"imagenes/ios16.png" },
            { title:"iOS 17", year:"2023", desc:"Se enfocó en comunicación y personalización. Introdujo “Contact Posters” para personalizar cómo aparece tu perfil al llamar a otros usuarios, NameDrop para compartir contactos acercando dispositivos, y mejoras en AirDrop. FaceTime permitió dejar mensajes en video si alguien no responde. También se añadieron widgets interactivos, mejoras en autocorrección con IA y una nueva app llamada Diario (Journal) orientada al bienestar personal.", img:"imagenes/ios17.png" },
            { title:"iOS 18", year:"2024", desc:"Se centró en inteligencia artificial y mayor personalización. Permitió organizar libremente los iconos en la pantalla de inicio, personalizar el Centro de Control y mejorar el control sobre apps predeterminadas. Integró funciones avanzadas de IA para edición de texto, organización automática y mejoras en Siri. También reforzó la privacidad y optimizó el rendimiento en dispositivos más recientes", img:"imagenes/ios18.png" },
            { title:"iOS 26", year:"2025", desc:"trae un diseño completamente renovado denominado Liquid Glass, con menús, botones, iconos y widgets translúcidos que reflejan y refractan elementos del fondo para dar mayor profundidad y dinamismo a la experiencia visual. Esta versión también incorpora Apple Intelligence de forma integrada en todo el sistema para tareas como traducción en tiempo real dentro de Mensajes, FaceTime y Teléfono, opciones de comunicación como encuestas y fondos personalizados en chats, funciones avanzadas en CarPlay, mejoras en Apple Music como AutoMix, y una nueva app Preview para editar PDFs e imágenes directamente en iPhone", img:"imagenes/ios26.png" }
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
