import { createServerPage } from './createServerPage';
export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

const render = createServerPage();
