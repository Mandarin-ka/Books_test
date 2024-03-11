export interface IContext {
  theme?: string | null;
  setTheme?: ((elem: 'dark' | 'light') => void) | null;
}
