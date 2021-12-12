import { createSSRApp, defineComponent, h } from 'vue';
import PageShell from './PageShell.vue';
import { setPageContext } from './usePageContext';
import type { PageContext } from './types';
import BaseLayout from '../layouts/BaseLayout.vue';
export { createAppWithLayout };

function createAppWithLayout(pageContext: PageContext, layout = BaseLayout) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(
        layout,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
