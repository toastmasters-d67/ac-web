import { defineConfig } from "vite";
// @ts-expect-error TS(2307): Cannot find module 'path' or its corresponding typ... Remove this comment to see the full error message
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import envCompatible from "vite-plugin-env-compatible";
import { createHtmlPlugin } from "vite-plugin-html";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  resolve: {
    alias: {
      "/^~/": "",
      // @ts-expect-error TS(2304): Cannot find name '__dirname'.
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  plugins: [
    vue(),
    vueJsx(),
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "ac",
        },
      },
    }),
    VueI18nPlugin({
      // @ts-expect-error TS(2304): Cannot find name '__dirname'.
      include: [path.resolve(__dirname, "./src/locales/**")],
      strictMessage: false,
    }),
  ],
  build: { assetsInlineLimit: 8192 },
});
