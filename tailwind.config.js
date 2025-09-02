/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Modern blue
        "primary-light": "#3B82F6", // Light blue
        "primary-dark": "#1E40AF", // Dark blue
        accent: "#10B981", // Green for success/active states
        background: "#0F172A", // Dark slate
        "background-light": "#1E293B", // Lighter slate
        text: "#F8FAFC", // Almost white
        "text-muted": "#CBD5E1", // Muted text
        secondary: "#64748B", // Slate gray
        warning: "#F59E0B", // Amber for warnings
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}