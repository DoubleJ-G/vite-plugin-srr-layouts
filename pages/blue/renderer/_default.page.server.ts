import { createServerPage } from '../../../renderer/createServerPage';
export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];
import BlueLayout from '../../../layouts/BlueLayout.vue';

const render = createServerPage({
  layout: BlueLayout,
});
