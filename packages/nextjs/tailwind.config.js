/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#B8C4D9",
          "primary-content": "#0c45ad",
          secondary: "#FFBD9E",
          "secondary-content": "#0c45ad",
          accent: "#5D9BCF",
          "accent-content": "#1e3242",
          neutral: "#5D9BCF",
          "neutral-content": "#F0FCFF",
          "base-100": "#EBEEF2",
          "base-200": "#D8E1F2",
          "base-300": "#B8C4D9",
          "base-content": "#5D9BCF",
          info: "#1e3242",
          success: "#0c45ad",
          warning: "#ff702e",
          error: "#A61E1E",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#0c45ad",
          "primary-content": "#e9e6e9",
          secondary: "#0c45ad",
          "secondary-content": "#e9e6e9",
          accent: "#FFBD9E",
          "accent-content": "#ff702e",
          neutral: "#e9e6e9",
          "neutral-content": "#4C7FA8",
          "base-100": "#4C7FA8",
          "base-200": "#1e3242",
          "base-300": "#0E171F",
          "base-content": "#E9FBFF",
          info: "#4C7FA8",
          success: "#0c45ad",
          warning: "#ff702e",
          error: "#A61E1E",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--s))",
          },
        },
      },
      {
        exampleUi: {
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#FF6644",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#f3f3f3",
          "neutral-content": "#212638",
          "base-100": "#ffffff",
          "base-200": "#f1f1f1",
          "base-300": "#d0d0d0",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-space-grotesk, animate-grow)
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        grow: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.1, 1.1)" },
        },
      },
      animation: {
        grow: "grow 5s linear infinite",
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        zoom: "zoom 1s ease infinite",
      },
    },
  },
};
