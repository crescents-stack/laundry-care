/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        shop: {
          50: "#F3ECFD",
          100: "#DAC4F8",
          200: "#C9A8F4",
          300: "#B080F0",
          400: "#A167ED",
          500: "#8941E8",
          600: "#7D3BD3",
          700: "#612EA5",
          800: "#4B2480",
          900: "#3A1B61",
        },
        rider: {
          50: "#FCECE9",
          100: "#F4C4BA",
          200: "#EFA898",
          300: "#E88069",
          400: "#E3684C",
          500: "#DC421F",
          600: "#C83C1C",
          700: "#9C2F16",
          800: "#792411",
          900: "#5C1C0D",
        },
        user: {
          50: "#E7F3FD",
          100: "#B4DBF8",
          200: "#8FCAF4",
          300: "#5CB1F0",
          400: "#3DA2ED",
          500: "#0C8BE8",
          600: "#0B7ED3",
          700: "#0963A5",
          800: "#074C80",
          900: "#053A61",
        },
        admin: {
          50: "#E7F5EE",
          100: "#B6E1CA",
          200: "#92D2B0",
          300: "#60BE8C",
          400: "#41B176",
          500: "#129E54",
          600: "#10904C",
          700: "#0D703C",
          800: "#0A572E",
          900: "#084223",
        },
        success: {
          50: "#EEFBF1",
          100: "#C9F2D2",
          200: "#AFEBBC",
          300: "#8BE29E",
          400: "#75DD8B",
          500: "#52D46E",
          600: "#4BC164",
          700: "#3A974E",
          800: "#2D753D",
          900: "#22592E",
        },
        error: {
          50: "#FDECEC",
          100: "#F8C4C4",
          200: "#F4A8A8",
          300: "#F08080",
          400: "#ED6767",
          500: "#E84141",
          600: "#D33B3B",
          700: "#A52E2E",
          800: "#802424",
          900: "#611B1B",
        },
        body: {
          50: "#E8E6EC",
          100: "#B8B0C3",
          200: "#958AA5",
          300: "#65547C",
          400: "#473363",
          500: "#19003C",
          600: "#170037",
          700: "#12002B",
          800: "#0E0021",
          900: "#0B0019",
        },
        lighter: {
          50: "#FCFCFD",
          100: "#F6F5F8",
          200: "#F2F0F4",
          300: "#ECE9F0",
          400: "#E9E5ED",
          500: "#E3DEE8",
          600: "#CFCAD3",
          700: "#A19EA5",
          800: "#7D7A80",
          900: "#5F5D61",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
