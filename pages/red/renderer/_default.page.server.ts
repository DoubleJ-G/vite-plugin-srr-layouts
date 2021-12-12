import { createServerPage } from '../../../renderer/createServerPage';
export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];
import RedLayout from '../../../layouts/RedLayout.vue';

const render = createServerPage({
  layout: RedLayout,
});
