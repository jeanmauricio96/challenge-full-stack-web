import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#d9d9d9",
        secondary: "#C0C0C0",
        accent: "#82B1FF",
        error: "#800000",
        info: "#48D1CC",
        success: "#32CD32",
        warning: "#F08080",
      },
    },
    icons: {
      iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
  },
});
