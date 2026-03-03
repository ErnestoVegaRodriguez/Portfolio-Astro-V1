export const languages = {
    en: 'en English',
    es: 'es Español',
  };
  
  export const showDefaultLang = true;
  export const defaultLang = 'en';
  
  export const routes = {
    // en: {
    //   'blog': 'articles',
    // },
    // es: {
    //   'blog': 'blog', // add translations if needed
    // },
  }

  export const ui = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.portfolio': 'Portfolio',
      'footer.copyright': 'Copyright © <span id="currentYear"></span> All rights reserved.',
      'portfolio.subDesc': 'Technologies i used:',
      'portfolio.externalButton': 'Check out'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.experience': 'Experiencia',
        'nav.portfolio': 'Portafolio',
        'footer.copyright': 'Derechos de autor © <span id="currentYear"></span> Todos los derechos reservados.',
        'portfolio.subDesc': 'Tecnologías que usé:',
        'portfolio.externalButton': 'Ver'
    },
  } as const;