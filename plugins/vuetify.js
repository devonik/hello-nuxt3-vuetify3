import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // Vue 3 has no way to automatically detect if SSR is used. See https://next.vuetifyjs.com/en/getting-started/installation/#ssr
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
