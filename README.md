# Vite Plugin SSR Layouts

This repository is an example of how to make layouts with Vue in vite-plugin-ssr.

The main changes from the base project is moving renderer logic to `createClientPage.ts` and `createServerPage.ts` to make it easier to re-use and wrapping a helper function around them to pass different options.
