/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "cusin-terracotta": "#9e422e",
              "on-primary-container": "#ffcec4",
              "tertiary-fixed-dim": "#d4c4af",
              "primary-fixed-dim": "#ffb4a4",
              "on-tertiary-fixed": "#221a0d",
              "on-secondary-fixed-variant": "#2d4e2f",
              "on-tertiary-container": "#e7d7c1",
              "secondary-container": "#c5edc3",
              "on-secondary-fixed": "#002107",
              "surface-container-lowest": "#ffffff",
              "error-container": "#ffdad6",
              "surface-container-highest": "#d5e5f1",
              "surface": "#f5faff",
              "inverse-primary": "#ffb4a4",
              "surface-bright": "#f5faff",
              "on-tertiary-fixed-variant": "#504535",
              "inverse-surface": "#23323c",
              "surface-tint": "#9d422e",
              "on-tertiary": "#ffffff",
              "surface-container-high": "#daeaf7",
              "outline-variant": "#dcc0bb",
              "tertiary-fixed": "#f1e0ca",
              "on-secondary": "#ffffff",
              "surface-variant": "#d5e5f1",
              "on-error": "#ffffff",
              "on-primary-fixed-variant": "#7e2b19",
              "on-background": "#0e1d26",
              "primary-container": "#9e422e",
              "outline": "#89726d",
              "background": "#f5faff",
              "on-surface-variant": "#56423e",
              "surface-container": "#e0f0fd",
              "tertiary-container": "#695d4c",
              "surface-container-low": "#e9f5ff",
              "secondary": "#446645",
              "on-secondary-container": "#4a6d4b",
              "primary-fixed": "#ffdad3",
              "tertiary": "#504636",
              "on-primary": "#ffffff",
              "surface-dim": "#ccdce9",
              "on-error-container": "#93000a",
              "primary": "#7f2b19",
              "error": "#ba1a1a",
              "secondary-fixed": "#c5edc3",
              "secondary-fixed-dim": "#aad0a8",
              "on-surface": "#0e1d26",
              "inverse-on-surface": "#e4f3ff",
              "on-primary-fixed": "#3d0500"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "fontFamily": {
              "lora": ["Lora", "serif"],
              "figtree": ["Figtree", "sans-serif"],
              "headline": [
                      "Newsreader"
              ],
              "body": [
                      "Plus Jakarta Sans"
              ],
              "label": [
                      "Plus Jakarta Sans"
              ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
