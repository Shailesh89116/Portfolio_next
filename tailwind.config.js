/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    fontFamily: {
      mont: ['var(--font-mont)', ...fontFamily.sans],
    },
    colors:{
      dark: "#1b1b1b",
    light: "#f5f5f5",
    primary: "#B63E96", // 240,86,199
    primaryDark: "#58E6D9", // 80,230,217
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    }
  },
}
export const plugins = []
