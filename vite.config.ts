import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import SVGLoader from 'vite-svg-loader'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: +env.VITE_PORT,
      host: env.VITE_HOST,
    },

    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`,
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/index.scss" as *;`,
        },
      },
    },

    plugins: [
      vue(),
      SVGLoader({
        svgo: false,
      }),
      Pages({
        dirs: [{ dir: 'src/modules', baseRoute: '' }],
        exclude: ['**/components/*.vue'],
      }),
      Layouts({
        defaultLayout: 'default',
        exclude: ['src/layouts/components/*.vue'],
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: false,
          }),
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
      }),
      ElementPlus({
        useSource: true,
        defaultLocale: 'vi',
      }),
      Icons({
        autoInstall: true,
      }),
      VitePluginFonts({
        google: {
          families: [{ name: 'Manrope', styles: 'wght@400;600;700' }],
        },
      }),
      Inspect(),
    ],
  }
})
