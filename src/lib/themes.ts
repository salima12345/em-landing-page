// Définition des pages avec leur thème
export const pageThemes: Record<string, 'dark' | 'light'> = {
    '/': 'dark',
    '/about': 'light',
    '/contact': 'dark',
    // Ajoutez d'autres pages selon vos besoins
  };
  
  export const getPageTheme = (pathname: string): 'dark' | 'light' => {
    return pageThemes[pathname] || 'light'; // Par défaut light
  };