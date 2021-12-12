import { getPage } from 'vite-plugin-ssr/client';
import { createAppWithLayout } from './app';
import type { PageContext } from './types';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client';

interface CreatePageClientOptions {
  layout?: any;
}

// Creates a factory function that can be re-used across multiple renderers
export const createClientPage = (options: CreatePageClientOptions) =>
  async function hydrate() {
    // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
    // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
    const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
    const app = createAppWithLayout(pageContext, options.layout);
    app.mount('#app');
  };
