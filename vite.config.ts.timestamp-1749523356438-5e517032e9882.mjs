// vite.config.ts
import path2 from "node:path";
import process2 from "node:process";
import { loadEnv } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5.31.6/node_modules/vite/dist/node/index.js";
import viewport from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/postcss-mobile-forever@4.1.5_postcss@5.2.18/node_modules/postcss-mobile-forever/index.js";
import autoprefixer from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/autoprefixer@10.4.20_postcss@5.2.18/node_modules/autoprefixer/lib/autoprefixer.js";

// build/vite/index.ts
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import { unheadVueComposablesImports } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/@unhead+vue@1.10.0_vue@3.4.38_typescript@5.5.4_/node_modules/@unhead/vue/dist/index.mjs";
import legacy from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.2_terser@5.31.6_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5.31.6_/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import vue from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser_g2xivdmipmzr6e7l4bye7j5xn4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/unocss@0.62.2_postcss@5.2.18_rollup@4.21.1_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5.31.6_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/unplugin-auto-import@0.18.2_@vueuse+core@11.0.3_vue@3.4.38_typescript@5.5.4___rollup@4.21.1/node_modules/unplugin-auto-import/dist/vite.js";
import { VantResolver } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.6_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Components from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.6_rollup@4.21.1_vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import { VueRouterAutoImports } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/unplugin-vue-router@0.10.7_rollup@4.21.1_vue-router@4.4.3_vue@3.4.38_typescript@5.5.4___vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/unplugin-vue-router@0.10.7_rollup@4.21.1_vue-router@4.4.3_vue@3.4.38_typescript@5.5.4___vue@3.4.38_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/vite.js";
import mockDevServerPlugin from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite-plugin-mock-dev-server@1.7.1_esbuild@0.23.1_rollup@4.21.1_vite@5.4.2_@types+node@22.5.1__myoo5ilcdxceqdxnzdfharfklu/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import { VitePWA } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite-plugin-pwa@0.20.1_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5_l7wepmjdpmyp6n7txiz2lcf3im/node_modules/vite-plugin-pwa/dist/index.js";
import Sitemap from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite-plugin-sitemap@0.7.1/node_modules/vite-plugin-sitemap/dist/index.js";
import VueDevTools from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.9_rollup@4.21.1_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-em_fd2d2mpphfcg46rf6foz6xbbmi/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import VueI18nPlugin from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.21.1_vue-i18n@9.14.0_vue@3.4.38_typescript@5.5.4__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { createSvgIconsPlugin } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5.31.6_/node_modules/vite-plugin-svg-icons/dist/index.mjs";

// build/vite/vconsole.ts
import path from "node:path";
import { viteVConsole } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite-plugin-vconsole@2.1.1/node_modules/vite-plugin-vconsole/dist/main.mjs";
function createViteVConsole() {
  return viteVConsole({
    entry: [path.resolve("src/main.ts")],
    enabled: false,
    config: {
      maxLogNumber: 1e3,
      theme: "light"
    },
    // https://github.com/vadxq/vite-plugin-vconsole/issues/21
    dynamicConfig: {
      theme: `document.documentElement.classList.contains('dark') ? 'dark' : 'light'`
    },
    eventListener: `
      const targetElement = document.querySelector('html'); // \u62E9\u8981\u76D1\u542C\u7684\u5143\u7D20
      const observerOptions = {
        attributes: true, // \u76D1\u542C\u5C5E\u6027\u53D8\u5316
        attributeFilter: ['class'] // \u53EA\u76D1\u542Cclass\u5C5E\u6027\u53D8\u5316
      };

      // \u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u89C2\u5BDF\u5230\u7684\u53D8\u5316
      function handleAttributeChange(mutationsList) {
        for(let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (window && window.vConsole) {
              window.vConsole.dynamicChange.value = new Date().getTime();
            }
          }
        }
      }

      // \u521B\u5EFA\u89C2\u5BDF\u8005\u5B9E\u4F8B\u5E76\u4F20\u5165\u56DE\u8C03\u51FD\u6570
      const observer = new MutationObserver(handleAttributeChange);

      // \u5F00\u59CB\u89C2\u5BDF\u76EE\u6807\u5143\u7D20
      observer.observe(targetElement, observerOptions);

      // \u5F53\u4E0D\u518D\u9700\u8981\u89C2\u5BDF\u65F6\uFF0C\u505C\u6B62\u89C2\u5BDF
      // observer.disconnect();
    `
  });
}

// build/vite/index.ts
var __vite_injected_original_import_meta_url = "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/build/vite/index.ts";
function createVitePlugins() {
  return [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue"],
      routesFolder: "src/pages",
      dts: "src/typed-router.d.ts"
    }),
    vue(),
    // https://github.com/jbaubree/vite-plugin-sitemap
    Sitemap(),
    // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    mockDevServerPlugin(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts"
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/
      ],
      imports: [
        "vue",
        "vitest",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          "vue-router/auto": ["useLink"],
          "@/utils/i18n": ["i18n", "locale"],
          "vue-i18n": ["useI18n"]
        },
        unheadVueComposablesImports
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables"
      ]
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18nPlugin({
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "../../src/locales/**")
    }),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
    // https://github.com/vadxq/vite-plugin-vconsole
    createViteVConsole(),
    // https://github.com/vuejs/devtools-next
    VueDevTools(),
    // 使用 svg 图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["/mm-read.png", "safari-pinned-tab.svg"],
      manifest: {
        name: "MM-Read",
        short_name: "MM-Read",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ];
}

// build/vite/optimize.ts
var include = [
  "axios",
  "store",
  "echarts",
  "lodash-es",
  "resize-detector",
  "store/plugins/expire",
  "vant/es/cell-group/style/index",
  "vant/es/popup/style/index",
  "vant/es/picker/style/index",
  "vant/es/cell/style/index",
  "vant/es/switch/style/index",
  "vant/es/space/style/index",
  "vant/es/button/style/index",
  "vant/es/empty/style/index",
  "vant/es/icon/style/index",
  "vant/es/stepper/style/index"
];
var exclude = [
  "@iconify-json/carbon"
];

// vite.config.ts
var __vite_injected_original_dirname = "D:\\\u524D\u7AEF\u9879\u76EE\\test\\mars-ai";
var vite_config_default = ({ mode }) => {
  const root = process2.cwd();
  const env = loadEnv(mode, root);
  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(),
    server: {
      host: true,
      port: 3e3,
      proxy: {
        "/api": {
          target: "",
          ws: false,
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        "~@": path2.join(__vite_injected_original_dirname, "./src"),
        "@": path2.join(__vite_injected_original_dirname, "./src"),
        "~": path2.join(__vite_injected_original_dirname, "./src/assets")
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          // https://github.com/wswmsword/postcss-mobile-forever
          viewport({
            appSelector: "#app",
            viewportWidth: 375,
            maxDisplayWidth: 1024,
            rootContainingBlockSelectorList: [
              // 'van-tabbar',
              // 'van-popup',
            ]
          })
        ]
      }
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048
    },
    optimizeDeps: { include, exclude }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9pbmRleC50cyIsICJidWlsZC92aXRlL3Zjb25zb2xlLnRzIiwgImJ1aWxkL3ZpdGUvb3B0aW1pemUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTUlODklOEQlRTclQUIlQUYlRTklQTElQjklRTclOUIlQUUvdGVzdC9tYXJzLWFpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdmlld3BvcnQgZnJvbSAncG9zdGNzcy1tb2JpbGUtZm9yZXZlcidcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3ZpdGUnXG5pbXBvcnQgeyBleGNsdWRlLCBpbmNsdWRlIH0gZnJvbSAnLi9idWlsZC92aXRlL29wdGltaXplJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpXG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBlbnYuVklURV9BUFBfUFVCTElDX1BBVEgsXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnMoKSxcblxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogdHJ1ZSxcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6ICcnLFxuICAgICAgICAgIHdzOiBmYWxzZSxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnfkAnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgJ0AnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgJ34nOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjc3M6IHtcbiAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIGF1dG9wcmVmaXhlcigpLFxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93c3dtc3dvcmQvcG9zdGNzcy1tb2JpbGUtZm9yZXZlclxuICAgICAgICAgIHZpZXdwb3J0KHtcbiAgICAgICAgICAgIGFwcFNlbGVjdG9yOiAnI2FwcCcsXG4gICAgICAgICAgICB2aWV3cG9ydFdpZHRoOiAzNzUsXG4gICAgICAgICAgICBtYXhEaXNwbGF5V2lkdGg6IDEwMjQsXG4gICAgICAgICAgICByb290Q29udGFpbmluZ0Jsb2NrU2VsZWN0b3JMaXN0OiBbXG4gICAgICAgICAgICAgIC8vICd2YW4tdGFiYmFyJyxcbiAgICAgICAgICAgICAgLy8gJ3Zhbi1wb3B1cCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgYnVpbGQ6IHtcbiAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwNDgsXG4gICAgfSxcblxuICAgIG9wdGltaXplRGVwczogeyBpbmNsdWRlLCBleGNsdWRlIH0sXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXHRlc3RcXFxcbWFycy1haVxcXFxidWlsZFxcXFx2aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXFxcXGJ1aWxkXFxcXHZpdGVcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNSU4OSU4RCVFNyVBQiVBRiVFOSVBMSVCOSVFNyU5QiVBRS90ZXN0L21hcnMtYWkvYnVpbGQvdml0ZS9pbmRleC50c1wiO2ltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXG5pbXBvcnQgeyB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMgfSBmcm9tICdAdW5oZWFkL3Z1ZSdcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCBtb2NrRGV2U2VydmVyUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlcidcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgU2l0ZW1hcCBmcm9tICd2aXRlLXBsdWdpbi1zaXRlbWFwJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBWdWVJMThuUGx1Z2luIGZyb20gJ0BpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGUnXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcbmltcG9ydCB7IGNyZWF0ZVZpdGVWQ29uc29sZSB9IGZyb20gJy4vdmNvbnNvbGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXRlUGx1Z2lucygpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgIFZ1ZVJvdXRlcih7XG4gICAgICBleHRlbnNpb25zOiBbJy52dWUnXSxcbiAgICAgIHJvdXRlc0ZvbGRlcjogJ3NyYy9wYWdlcycsXG4gICAgICBkdHM6ICdzcmMvdHlwZWQtcm91dGVyLmQudHMnLFxuICAgIH0pLFxuXG4gICAgdnVlKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vamJhdWJyZWUvdml0ZS1wbHVnaW4tc2l0ZW1hcFxuICAgIFNpdGVtYXAoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZW5nemhhbmJvL3ZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlclxuICAgIG1vY2tEZXZTZXJ2ZXJQbHVnaW4oKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcbiAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sXG4gICAgICAgIC9cXC52dWUkLyxcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sXG4gICAgICBdLFxuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3ZpdGVzdCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgICAnQC91dGlscy9pMThuJzogWydpMThuJywgJ2xvY2FsZSddLFxuICAgICAgICAgICd2dWUtaTE4bic6IFsndXNlSTE4biddLFxuICAgICAgICB9LFxuICAgICAgICB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMsXG4gICAgICBdLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJ3NyYy9jb21wb3NhYmxlcycsXG4gICAgICBdLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4blxuICAgIFZ1ZUkxOG5QbHVnaW4oe1xuICAgICAgLy8gbG9jYWxlIG1lc3NhZ2VzIHJlc291cmNlIHByZS1jb21waWxlIG9wdGlvblxuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuLi8uLi9zcmMvbG9jYWxlcy8qKicpLFxuICAgIH0pLFxuXG4gICAgbGVnYWN5KHtcbiAgICAgIHRhcmdldHM6IFsnZGVmYXVsdHMnLCAnbm90IElFIDExJ10sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXG4gICAgLy8gc2VlIHVuby5jb25maWcudHMgZm9yIGNvbmZpZ1xuICAgIFVub0NTUygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhZHhxL3ZpdGUtcGx1Z2luLXZjb25zb2xlXG4gICAgY3JlYXRlVml0ZVZDb25zb2xlKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvZGV2dG9vbHMtbmV4dFxuICAgIFZ1ZURldlRvb2xzKCksXG5cbiAgICAvLyBcdTRGN0ZcdTc1Mjggc3ZnIFx1NTZGRVx1NjgwN1xuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJy9tbS1yZWFkLnBuZycsICdzYWZhcmktcGlubmVkLXRhYi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdNTS1SZWFkJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ01NLVJlYWQnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVxcXFx0ZXN0XFxcXG1hcnMtYWlcXFxcYnVpbGRcXFxcdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXHRlc3RcXFxcbWFycy1haVxcXFxidWlsZFxcXFx2aXRlXFxcXHZjb25zb2xlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTUlODklOEQlRTclQUIlQUYlRTklQTElQjklRTclOUIlQUUvdGVzdC9tYXJzLWFpL2J1aWxkL3ZpdGUvdmNvbnNvbGUudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IHZpdGVWQ29uc29sZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXZjb25zb2xlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVWQ29uc29sZSgpIHtcclxuICByZXR1cm4gdml0ZVZDb25zb2xlKHtcclxuICAgIGVudHJ5OiBbcGF0aC5yZXNvbHZlKCdzcmMvbWFpbi50cycpXSxcclxuICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgIG1heExvZ051bWJlcjogMTAwMCxcclxuICAgICAgdGhlbWU6ICdsaWdodCcsXHJcbiAgICB9LFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhZHhxL3ZpdGUtcGx1Z2luLXZjb25zb2xlL2lzc3Vlcy8yMVxyXG4gICAgZHluYW1pY0NvbmZpZzoge1xyXG4gICAgICB0aGVtZTogYGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKSA/ICdkYXJrJyA6ICdsaWdodCdgLFxyXG4gICAgfSxcclxuICAgIGV2ZW50TGlzdGVuZXI6IGBcclxuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTsgLy8gXHU2MkU5XHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1MTQzXHU3RDIwXHJcbiAgICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHtcclxuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLCAvLyBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUzRDhcdTUzMTZcclxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSAvLyBcdTUzRUFcdTc2RDFcdTU0MkNjbGFzc1x1NUM1RVx1NjAyN1x1NTNEOFx1NTMxNlxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gXHU1QjlBXHU0RTQ5XHU1NkRFXHU4QzAzXHU1MUZEXHU2NTcwXHU2NzY1XHU1OTA0XHU3NDA2XHU4OUMyXHU1QkRGXHU1MjMwXHU3Njg0XHU1M0Q4XHU1MzE2XHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZUNoYW5nZShtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgICAgZm9yKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XHJcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cudkNvbnNvbGUpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cudkNvbnNvbGUuZHluYW1pY0NoYW5nZS52YWx1ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBcdTUyMUJcdTVFRkFcdTg5QzJcdTVCREZcdTgwMDVcdTVCOUVcdTRGOEJcdTVFNzZcdTRGMjBcdTUxNjVcdTU2REVcdThDMDNcdTUxRkRcdTY1NzBcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UpO1xyXG5cclxuICAgICAgLy8gXHU1RjAwXHU1OUNCXHU4OUMyXHU1QkRGXHU3NkVFXHU2ODA3XHU1MTQzXHU3RDIwXHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcclxuXHJcbiAgICAgIC8vIFx1NUY1M1x1NEUwRFx1NTE4RFx1OTcwMFx1ODk4MVx1ODlDMlx1NUJERlx1NjVGNlx1RkYwQ1x1NTA1Q1x1NkI2Mlx1ODlDMlx1NUJERlxyXG4gICAgICAvLyBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICBgLFxyXG4gIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXFxcXGJ1aWxkXFxcXHZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVxcXFx0ZXN0XFxcXG1hcnMtYWlcXFxcYnVpbGRcXFxcdml0ZVxcXFxvcHRpbWl6ZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU1JTg5JThEJUU3JUFCJUFGJUU5JUExJUI5JUU3JTlCJUFFL3Rlc3QvbWFycy1haS9idWlsZC92aXRlL29wdGltaXplLnRzXCI7Y29uc3QgaW5jbHVkZSA9IFtcclxuICAnYXhpb3MnLFxyXG4gICdzdG9yZScsXHJcbiAgJ2VjaGFydHMnLFxyXG4gICdsb2Rhc2gtZXMnLFxyXG4gICdyZXNpemUtZGV0ZWN0b3InLFxyXG4gICdzdG9yZS9wbHVnaW5zL2V4cGlyZScsXHJcbiAgJ3ZhbnQvZXMvY2VsbC1ncm91cC9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvcG9wdXAvc3R5bGUvaW5kZXgnLFxyXG4gICd2YW50L2VzL3BpY2tlci9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvY2VsbC9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvc3dpdGNoL3N0eWxlL2luZGV4JyxcclxuICAndmFudC9lcy9zcGFjZS9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvYnV0dG9uL3N0eWxlL2luZGV4JyxcclxuICAndmFudC9lcy9lbXB0eS9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvaWNvbi9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvc3RlcHBlci9zdHlsZS9pbmRleCcsXHJcbl1cclxuXHJcbmNvbnN0IGV4Y2x1ZGUgPSBbXHJcbiAgJ0BpY29uaWZ5LWpzb24vY2FyYm9uJyxcclxuXVxyXG5cclxuZXhwb3J0IHsgaW5jbHVkZSwgZXhjbHVkZSB9XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1IsT0FBT0EsV0FBVTtBQUN2UyxPQUFPQyxjQUFhO0FBQ3BCLFNBQVMsZUFBZTtBQUV4QixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7OztBQ0xzUixTQUFTLFNBQVMsZUFBZTtBQUNoVixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLGFBQWE7QUFDcEIsU0FBUyxtQ0FBbUM7QUFDNUMsT0FBTyxZQUFZO0FBQ25CLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxlQUFlO0FBQ3RCLE9BQU8seUJBQXlCO0FBQ2hDLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyw0QkFBNEI7OztBQ2pCZ1IsT0FBTyxVQUFVO0FBQ3RVLFNBQVMsb0JBQW9CO0FBRXRCLFNBQVMscUJBQXFCO0FBQ25DLFNBQU8sYUFBYTtBQUFBLElBQ2xCLE9BQU8sQ0FBQyxLQUFLLFFBQVEsYUFBYSxDQUFDO0FBQUEsSUFDbkMsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsT0FBTztBQUFBLElBQ1Q7QUFBQTtBQUFBLElBRUEsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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
