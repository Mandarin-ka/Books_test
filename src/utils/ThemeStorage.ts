//=====================save themes after reloading

export const setThemeToLS = (theme: 'dark' | 'light'): void => {
  localStorage.setItem('theme', theme);
};

export const getThemeFromLS = (): 'dark' | 'light' => {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
};
