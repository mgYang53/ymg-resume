import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,700',
        mono: 'JetBrains Mono'
      }
    })
  ]
})