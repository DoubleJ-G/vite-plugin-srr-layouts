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

    // Use a pages exported layout if there is one
    let layout = options.layout;
    if (pageContext.Page.layout) {
      layout = pageContext.Page.layout;
    }

    const app = createAppWithLayout(pageContext, layout);
    app.mount('#app');
  };
