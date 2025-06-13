// vite.config.ts
import path2 from "node:path";
import process from "node:process";
import { loadEnv } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5.31.6/node_modules/vite/dist/node/index.js";
import viewport from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/postcss-mobile-forever@4.1.5_postcss@8.4.41/node_modules/postcss-mobile-forever/index.js";
import autoprefixer from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.41/node_modules/autoprefixer/lib/autoprefixer.js";

// build/vite/index.ts
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { unheadVueComposablesImports } from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/@unhead+vue@1.10.0_vue@3.4.38_typescript@5.5.4_/node_modules/@unhead/vue/dist/index.mjs";
import legacy from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.2_terser@5.31.6_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5.31.6_/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import vue from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser_g2xivdmipmzr6e7l4bye7j5xn4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///D:/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE/test/mars-ai/node_modules/.pnpm/unocss@0.62.2_postcss@8.4.41_rollup@4.21.1_vite@5.4.2_@types+node@22.5.1_less@4.2.0_sass-embedded@1.77.8_terser@5.31.6_/node_modules/unocss/dist/vite.mjs";
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
  const root = process.cwd();
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
            maxDisplayWidth: 600,
            rootContainingBlockSelectorList: [
              "van-tabbar",
              "van-popup"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9pbmRleC50cyIsICJidWlsZC92aXRlL3Zjb25zb2xlLnRzIiwgImJ1aWxkL3ZpdGUvb3B0aW1pemUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTUlODklOEQlRTclQUIlQUYlRTklQTElQjklRTclOUIlQUUvdGVzdC9tYXJzLWFpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXHJcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2aWV3cG9ydCBmcm9tICdwb3N0Y3NzLW1vYmlsZS1mb3JldmVyJ1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcclxuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3ZpdGUnXHJcbmltcG9ydCB7IGV4Y2x1ZGUsIGluY2x1ZGUgfSBmcm9tICcuL2J1aWxkL3ZpdGUvb3B0aW1pemUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xyXG4gIGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYmFzZTogZW52LlZJVEVfQVBQX1BVQkxJQ19QQVRILFxyXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnMoKSxcclxuXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgcG9ydDogMzAwMCxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgIHRhcmdldDogJycsXHJcbiAgICAgICAgICB3czogZmFsc2UsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICd+QCc6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAgICdAJzogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICAgICAgJ34nOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGNzczoge1xyXG4gICAgICBwb3N0Y3NzOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgYXV0b3ByZWZpeGVyKCksXHJcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd3N3bXN3b3JkL3Bvc3Rjc3MtbW9iaWxlLWZvcmV2ZXJcclxuICAgICAgICAgIHZpZXdwb3J0KHtcclxuICAgICAgICAgICAgYXBwU2VsZWN0b3I6ICcjYXBwJyxcclxuICAgICAgICAgICAgdmlld3BvcnRXaWR0aDogMzc1LFxyXG4gICAgICAgICAgICBtYXhEaXNwbGF5V2lkdGg6IDYwMCxcclxuICAgICAgICAgICAgcm9vdENvbnRhaW5pbmdCbG9ja1NlbGVjdG9yTGlzdDogW1xyXG4gICAgICAgICAgICAgICd2YW4tdGFiYmFyJyxcclxuICAgICAgICAgICAgICAndmFuLXBvcHVwJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXHJcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjA0OCxcclxuICAgIH0sXHJcblxyXG4gICAgb3B0aW1pemVEZXBzOiB7IGluY2x1ZGUsIGV4Y2x1ZGUgfSxcclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXFxcXGJ1aWxkXFxcXHZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVxcXFx0ZXN0XFxcXG1hcnMtYWlcXFxcYnVpbGRcXFxcdml0ZVxcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU1JTg5JThEJUU3JUFCJUFGJUU5JUExJUI5JUU3JTlCJUFFL3Rlc3QvbWFycy1haS9idWlsZC92aXRlL2luZGV4LnRzXCI7aW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xyXG5pbXBvcnQgeyB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMgfSBmcm9tICdAdW5oZWFkL3Z1ZSdcclxuaW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXHJcbmltcG9ydCBtb2NrRGV2U2VydmVyUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlcidcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcclxuaW1wb3J0IFNpdGVtYXAgZnJvbSAndml0ZS1wbHVnaW4tc2l0ZW1hcCdcclxuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcclxuaW1wb3J0IHsgY3JlYXRlVml0ZVZDb25zb2xlIH0gZnJvbSAnLi92Y29uc29sZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXRlUGx1Z2lucygpIHtcclxuICByZXR1cm4gW1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcclxuICAgIFZ1ZVJvdXRlcih7XHJcbiAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZSddLFxyXG4gICAgICByb3V0ZXNGb2xkZXI6ICdzcmMvcGFnZXMnLFxyXG4gICAgICBkdHM6ICdzcmMvdHlwZWQtcm91dGVyLmQudHMnLFxyXG4gICAgfSksXHJcblxyXG4gICAgdnVlKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2piYXVicmVlL3ZpdGUtcGx1Z2luLXNpdGVtYXBcclxuICAgIFNpdGVtYXAoKSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGVuZ3poYW5iby92aXRlLXBsdWdpbi1tb2NrLWRldi1zZXJ2ZXJcclxuICAgIG1vY2tEZXZTZXJ2ZXJQbHVnaW4oKSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxyXG4gICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV0sXHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcclxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgL1xcLlt0al1zeD8kLyxcclxuICAgICAgICAvXFwudnVlJC8sXHJcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sXHJcbiAgICAgIF0sXHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICAndml0ZXN0JyxcclxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAndnVlLXJvdXRlci9hdXRvJzogWyd1c2VMaW5rJ10sXHJcbiAgICAgICAgICAnQC91dGlscy9pMThuJzogWydpMThuJywgJ2xvY2FsZSddLFxyXG4gICAgICAgICAgJ3Z1ZS1pMThuJzogWyd1c2VJMThuJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMsXHJcbiAgICAgIF0sXHJcbiAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXHJcbiAgICAgIGRpcnM6IFtcclxuICAgICAgICAnc3JjL2NvbXBvc2FibGVzJyxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdW5wbHVnaW4tdnVlLWkxOG5cclxuICAgIFZ1ZUkxOG5QbHVnaW4oe1xyXG4gICAgICAvLyBsb2NhbGUgbWVzc2FnZXMgcmVzb3VyY2UgcHJlLWNvbXBpbGUgb3B0aW9uXHJcbiAgICAgIGluY2x1ZGU6IHJlc29sdmUoZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnLi4vLi4vc3JjL2xvY2FsZXMvKionKSxcclxuICAgIH0pLFxyXG5cclxuICAgIGxlZ2FjeSh7XHJcbiAgICAgIHRhcmdldHM6IFsnZGVmYXVsdHMnLCAnbm90IElFIDExJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXHJcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXHJcbiAgICBVbm9DU1MoKSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFkeHEvdml0ZS1wbHVnaW4tdmNvbnNvbGVcclxuICAgIGNyZWF0ZVZpdGVWQ29uc29sZSgpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9kZXZ0b29scy1uZXh0XHJcbiAgICBWdWVEZXZUb29scygpLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgaW5jbHVkZUFzc2V0czogWycvbW0tcmVhZC5wbmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ01NLVJlYWQnLFxyXG4gICAgICAgIHNob3J0X25hbWU6ICdNTS1SZWFkJyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXFxcXGJ1aWxkXFxcXHZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NTI0RFx1N0FFRlx1OTg3OVx1NzZFRVxcXFx0ZXN0XFxcXG1hcnMtYWlcXFxcYnVpbGRcXFxcdml0ZVxcXFx2Y29uc29sZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU1JTg5JThEJUU3JUFCJUFGJUU5JUExJUI5JUU3JTlCJUFFL3Rlc3QvbWFycy1haS9idWlsZC92aXRlL3Zjb25zb2xlLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgeyB2aXRlVkNvbnNvbGUgfSBmcm9tICd2aXRlLXBsdWdpbi12Y29uc29sZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXRlVkNvbnNvbGUoKSB7XHJcbiAgcmV0dXJuIHZpdGVWQ29uc29sZSh7XHJcbiAgICBlbnRyeTogW3BhdGgucmVzb2x2ZSgnc3JjL21haW4udHMnKV0sXHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICBtYXhMb2dOdW1iZXI6IDEwMDAsXHJcbiAgICAgIHRoZW1lOiAnbGlnaHQnLFxyXG4gICAgfSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92YWR4cS92aXRlLXBsdWdpbi12Y29uc29sZS9pc3N1ZXMvMjFcclxuICAgIGR5bmFtaWNDb25maWc6IHtcclxuICAgICAgdGhlbWU6IGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykgPyAnZGFyaycgOiAnbGlnaHQnYCxcclxuICAgIH0sXHJcbiAgICBldmVudExpc3RlbmVyOiBgXHJcbiAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7IC8vIFx1NjJFOVx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NTE0M1x1N0QyMFxyXG4gICAgICBjb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSwgLy8gXHU3NkQxXHU1NDJDXHU1QzVFXHU2MDI3XHU1M0Q4XHU1MzE2XHJcbiAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10gLy8gXHU1M0VBXHU3NkQxXHU1NDJDY2xhc3NcdTVDNUVcdTYwMjdcdTUzRDhcdTUzMTZcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIFx1NUI5QVx1NEU0OVx1NTZERVx1OEMwM1x1NTFGRFx1NjU3MFx1Njc2NVx1NTkwNFx1NzQwNlx1ODlDMlx1NUJERlx1NTIzMFx1NzY4NFx1NTNEOFx1NTMxNlxyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UobXV0YXRpb25zTGlzdCkge1xyXG4gICAgICAgIGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xyXG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LnZDb25zb2xlKSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LnZDb25zb2xlLmR5bmFtaWNDaGFuZ2UudmFsdWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gXHU1MjFCXHU1RUZBXHU4OUMyXHU1QkRGXHU4MDA1XHU1QjlFXHU0RjhCXHU1RTc2XHU0RjIwXHU1MTY1XHU1NkRFXHU4QzAzXHU1MUZEXHU2NTcwXHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaGFuZGxlQXR0cmlidXRlQ2hhbmdlKTtcclxuXHJcbiAgICAgIC8vIFx1NUYwMFx1NTlDQlx1ODlDMlx1NUJERlx1NzZFRVx1NjgwN1x1NTE0M1x1N0QyMFxyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldEVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XHJcblxyXG4gICAgICAvLyBcdTVGNTNcdTRFMERcdTUxOERcdTk3MDBcdTg5ODFcdTg5QzJcdTVCREZcdTY1RjZcdUZGMENcdTUwNUNcdTZCNjJcdTg5QzJcdTVCREZcclxuICAgICAgLy8gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgYCxcclxuICB9KVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXFxcXHRlc3RcXFxcbWFycy1haVxcXFxidWlsZFxcXFx2aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTUyNERcdTdBRUZcdTk4NzlcdTc2RUVcXFxcdGVzdFxcXFxtYXJzLWFpXFxcXGJ1aWxkXFxcXHZpdGVcXFxcb3B0aW1pemUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNSU4OSU4RCVFNyVBQiVBRiVFOSVBMSVCOSVFNyU5QiVBRS90ZXN0L21hcnMtYWkvYnVpbGQvdml0ZS9vcHRpbWl6ZS50c1wiO2NvbnN0IGluY2x1ZGUgPSBbXHJcbiAgJ2F4aW9zJyxcclxuICAnc3RvcmUnLFxyXG4gICdlY2hhcnRzJyxcclxuICAnbG9kYXNoLWVzJyxcclxuICAncmVzaXplLWRldGVjdG9yJyxcclxuICAnc3RvcmUvcGx1Z2lucy9leHBpcmUnLFxyXG4gICd2YW50L2VzL2NlbGwtZ3JvdXAvc3R5bGUvaW5kZXgnLFxyXG4gICd2YW50L2VzL3BvcHVwL3N0eWxlL2luZGV4JyxcclxuICAndmFudC9lcy9waWNrZXIvc3R5bGUvaW5kZXgnLFxyXG4gICd2YW50L2VzL2NlbGwvc3R5bGUvaW5kZXgnLFxyXG4gICd2YW50L2VzL3N3aXRjaC9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvc3BhY2Uvc3R5bGUvaW5kZXgnLFxyXG4gICd2YW50L2VzL2J1dHRvbi9zdHlsZS9pbmRleCcsXHJcbiAgJ3ZhbnQvZXMvZW1wdHkvc3R5bGUvaW5kZXgnLFxyXG4gICd2YW50L2VzL2ljb24vc3R5bGUvaW5kZXgnLFxyXG4gICd2YW50L2VzL3N0ZXBwZXIvc3R5bGUvaW5kZXgnLFxyXG5dXHJcblxyXG5jb25zdCBleGNsdWRlID0gW1xyXG4gICdAaWNvbmlmeS1qc29uL2NhcmJvbicsXHJcbl1cclxuXHJcbmV4cG9ydCB7IGluY2x1ZGUsIGV4Y2x1ZGUgfVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNSLE9BQU9BLFdBQVU7QUFDdlMsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsZUFBZTtBQUV4QixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7OztBQ0xzUixTQUFTLFNBQVMsZUFBZTtBQUNoVixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG1DQUFtQztBQUM1QyxPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGVBQWU7QUFDdEIsT0FBTyx5QkFBeUI7QUFDaEMsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLG1CQUFtQjs7O0FDZjJSLE9BQU8sVUFBVTtBQUN0VSxTQUFTLG9CQUFvQjtBQUV0QixTQUFTLHFCQUFxQjtBQUNuQyxTQUFPLGFBQWE7QUFBQSxJQUNsQixPQUFPLENBQUMsS0FBSyxRQUFRLGFBQWEsQ0FBQztBQUFBLElBQ25DLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLE9BQU87QUFBQSxJQUNUO0FBQUE7QUFBQSxJQUVBLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtB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
