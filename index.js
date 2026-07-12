/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

// ==================== CONFIGURACIÓN DE TRADUCCIONES ====================
const translations = {
  es: {
    nav_work: "Trabajos",
    nav_clients: "Clientes",
    nav_about: "Sobre Mí",
    nav_contact: "Contacto",
    header_subtitle: "Web Developer",
    header_contact_btn: "Contacto",
    work_title: "Trabajos",
    visit_site: "Visitar Sitio",
    clients_title: "Clientes",
    about_title: "Sobre Mí",
    about_text: "Soy Mathias Coronel, Desarrollador Full-Stack especializado en el ecosistema PHP con más de 5 años de experiencia. Mi expertise se centra en Laravel, donde diseño arquitecturas MVC robustas y escalables para aplicaciones web complejas, garantizando un código limpio, mantenible y una lógica de negocio eficiente.<br><br>Complemento mi desarrollo backend con Laravel Livewire para crear interfaces dinámicas, reactivas y de una sola página (SPA) sin la complejidad de un framework JavaScript externo, lo que me permite ser altamente productivo y mantener la coherencia en todo el stack. Esta combinación me permite abordar proyectos de principio a fin, desde la API y la base de datos hasta la experiencia de usuario final.<br><br>Además, cuento con experiencia en el desarrollo y personalización de tiendas online con Shopify, así como en la creación y gestión de sitios web con WordPress, lo que me permite ofrecer soluciones flexibles adaptadas a distintas necesidades, ya sea e-commerce, sitios corporativos o proyectos a medida.<br><br>Mi filosofía se basa en la entrega de software bien estructurado, seguro y enfocado en el rendimiento. Fuera del código, canalizo mi creatividad y lógica desarrollando videojuegos como pasatiempo, una pasión que refuerza mi pensamiento sistémico y mi capacidad para resolver problemas de forma innovadora.",
    contact_title: "Contáctame",
    contact_text: "¿Buscas un sitio web rápido y fácil de usar para representar tu producto o negocio? ¿O buscas algún tipo de asesoramiento? ¿O quieres hacer alguna pregunta? En cualquier caso, no dudes en ponerte en contacto conmigo. Haré todo lo posible por responderte. La forma más rápida de contactar conmigo es por correo electrónico.",
    contact_btn: "Enviar Correo",
    footer_text: "&copy; 2025 - diseñado y desarrollado por <b>Mathias Coronel</b>.",
    button_es: "Español",
    button_en: "English"
  },
  en: {
    nav_work: "Work",
    nav_clients: "Clients",
    nav_about: "About Me",
    nav_contact: "Contact",
    header_subtitle: "Web Developer",
    header_contact_btn: "Contact",
    work_title: "Work",
    visit_site: "Visit Site",
    clients_title: "Clients",
    about_title: "About Me",
    about_text: "I'm Mathias Coronel, a Full-Stack Developer specialized in the PHP ecosystem with over 5 years of experience. My expertise is centered on Laravel, where I design robust, scalable MVC architectures for complex web applications, ensuring clean, maintainable code and efficient business logic.<br><br>I complement my backend development with Laravel Livewire to build dynamic, reactive single-page interfaces (SPA) without the complexity of an external JavaScript framework, which allows me to be highly productive while keeping consistency across the whole stack. This combination lets me handle projects end to end, from the API and database to the final user experience.<br><br>I also have experience developing and customizing online stores with Shopify, as well as building and managing websites with WordPress, which allows me to offer flexible solutions tailored to different needs, whether e-commerce, corporate sites, or custom projects.<br><br>My philosophy is based on delivering well-structured, secure, and performance-focused software. Outside of code, I channel my creativity and logic into game development as a hobby, a passion that strengthens my systems thinking and my ability to solve problems in innovative ways.",
    contact_title: "Contact Me",
    contact_text: "Are you looking for a fast and user-friendly website to represent your product or business? Or are you looking for some kind of advice? Or do you want to ask a question? In any case, feel free to contact me. I'll do my best to get back to you. The fastest way to reach me is by email.",
    contact_btn: "Send Email",
    footer_text: "&copy; 2025 - designed & developed by <b>Mathias Coronel</b>.",
    button_es: "Spanish",
    button_en: "English"
  }
};

// ==================== CREAR BOTÓN DE IDIOMA (si no existe) ====================
function createLanguageButton() {
  if (document.getElementById('lang-toggle')) return;

  const btn = document.createElement('button');
  btn.id = 'lang-toggle';
  btn.textContent = 'English'; // texto inicial
  // Estilos básicos para que flote arriba a la derecha
  btn.style.position = 'fixed';
  btn.style.top = '20px';
  btn.style.right = '20px';
  btn.style.padding = '10px 20px';
  btn.style.backgroundColor = '#333';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.borderRadius = '5px';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '16px';
  btn.style.zIndex = '1000';
  btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  btn.style.transition = 'background 0.3s';
  btn.style.fontFamily = 'inherit';

  // Efecto hover
  btn.addEventListener('mouseenter', () => btn.style.backgroundColor = '#555');
  btn.addEventListener('mouseleave', () => btn.style.backgroundColor = '#333');

  document.body.appendChild(btn);
}

// ==================== ASIGNAR data-i18n A LOS ELEMENTOS TRADUCIBLES ====================
function initTranslationAttributes() {
  // Nav
  const navLinks = document.querySelectorAll('.nav__link');
  const navKeys = ['nav_work', 'nav_clients', 'nav_about', 'nav_contact'];
  navLinks.forEach((link, index) => {
    if (index < navKeys.length) link.setAttribute('data-i18n', navKeys[index]);
  });

  // Header: subtítulo y botón
  const headerSubtitle = document.querySelector('.header__text p');
  if (headerSubtitle) headerSubtitle.setAttribute('data-i18n', 'header_subtitle');

  const headerBtn = document.querySelector('.header__text .btn');
  if (headerBtn) headerBtn.setAttribute('data-i18n', 'header_contact_btn');

  // Work título
  const workTitle = document.querySelector('#work h2');
  if (workTitle) workTitle.setAttribute('data-i18n', 'work_title');

  // Botones "Visitar Sitio" (todos)
  const visitButtons = document.querySelectorAll('.work__links .link__text');
  visitButtons.forEach((btn, i) => {
    btn.setAttribute('data-i18n', 'visit_site');
    // Podrías diferenciarlos si es necesario, pero todos usan la misma clave
  });

  // Clients título
  const clientsTitle = document.querySelector('#clients h2');
  if (clientsTitle) clientsTitle.setAttribute('data-i18n', 'clients_title');

  // About título
  const aboutTitle = document.querySelector('#about h2');
  if (aboutTitle) aboutTitle.setAttribute('data-i18n', 'about_title');

  // About párrafo (el único dentro de .about__text)
  const aboutText = document.querySelector('.about__text p');
  if (aboutText) aboutText.setAttribute('data-i18n', 'about_text');

  // Contact título
  const contactTitle = document.querySelector('#contact h2');
  if (contactTitle) contactTitle.setAttribute('data-i18n', 'contact_title');

  // Contact párrafo
  const contactText = document.querySelector('.contact__info p');
  if (contactText) contactText.setAttribute('data-i18n', 'contact_text');

  // Contact botón
  const contactBtn = document.querySelector('.contact__info .btn');
  if (contactBtn) contactBtn.setAttribute('data-i18n', 'contact_btn');

  // Footer párrafo (con HTML)
  const footerP = document.querySelector('.footer p');
  if (footerP) footerP.setAttribute('data-i18n', 'footer_text');
}

// ==================== CAMBIAR IDIOMA ====================
let currentLang = localStorage.getItem('preferredLang') || 'es';

function changeLanguage(lang) {
  // Actualizar textos de elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      // Si la clave es about_text o footer_text, usar innerHTML (contienen <br> o <b>)
      if (key === 'about_text' || key === 'footer_text') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Actualizar texto del botón de idioma
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'es' ? translations[lang].button_en : translations[lang].button_es;
  }

  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
}

// ==================== INICIALIZAR ====================
function initLanguageSwitcher() {
  createLanguageButton();
  initTranslationAttributes();

  // Establecer idioma inicial (español por defecto)
  changeLanguage(currentLang);

  // Evento del botón
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      changeLanguage(newLang);
    });
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}


const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
