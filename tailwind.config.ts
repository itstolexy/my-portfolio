import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "tola-blue": "#0B154B",
        "tola-white": "#F6FAFD",
        "tola-orange": "#F28C28",
        body: "hsl(217, 18%, 14%)",
        "tola-green": "hsl(166, 100%, 34%)",
        cyan_dark: "hsla(166, 100%, 34%, 0.4)",
        github: "#EA4C89",
        instagram: "#d62976 ",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
    },
  },
  plugins: [],
};
export default config;
