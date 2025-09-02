/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-light": "#3B82F6",
        "primary-dark": "#1E40AF",
        accent: "#10B981",
        background: "#0F172A",
        "background-light": "#1E293B",
        text: "#F8FAFC",
        "text-muted": "#CBD5E1",
        secondary: "#64748B",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};
