const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.BASE_URL,
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  lintOnSave: process.env.NODE_ENV !== "production",
});
