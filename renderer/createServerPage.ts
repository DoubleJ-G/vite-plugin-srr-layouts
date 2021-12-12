import { renderToString } from '@vue/server-renderer';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import { createAppWithLayout } from './app';
import logoUrl from './logo.svg';
import type { PageContext } from './types';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';

interface CreatePageServerOptions {
  layout?: any;
}

// Creates a factory function that can be re-used across multiple renderers
export const createServerPage = (options: CreatePageServerOptions) =>
  async function render(pageContext: PageContextBuiltIn & PageContext) {
    const app = createAppWithLayout(pageContext, options.layout);
    const appHtml = await renderToString(app);

    // See https://vite-plugin-ssr.com/html-head
    const { documentProps } = pageContext;
    const title = (documentProps && documentProps.title) || 'Vite SSR app';
    const desc =
      (documentProps && documentProps.description) ||
      'App using Vite + vite-plugin-ssr';

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;

    return {
      documentHtml,
      pageContext: {
        // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
      },
    };
  };
