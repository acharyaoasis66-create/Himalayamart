import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: { "2xl": "1400px" },
        },
        extend: {
            colors: {
                // Nepali flag-inspired palette
                "himalaya-saffron": "#FF6B35",
                "himalaya-blue": "#003893",
                "himalaya-crimson": "#DC143C",
                "himalaya-gold": "#F4C430",
                "himalaya-snow": "#F8F9FA",
                "himalaya-earth": "#8B4513",
                "himalaya-sky": "#87CEEB",
                "prayer-red": "#CC0000",
                "prayer-yellow": "#FFD700",
                "prayer-blue": "#0000CC",
                "prayer-green": "#006400",
                "prayer-white": "#FFFFFF",
                // shadcn/ui system colors
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
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            fontFamily: {
                sans: ["Inter", "Noto Sans Devanagari", "sans-serif"],
                devanagari: ["Noto Sans Devanagari", "sans-serif"],
            },
            backgroundImage: {
                "himalaya-gradient":
                    "linear-gradient(135deg, #003893 0%, #DC143C 40%, #FF6B35 100%)",
                "hero-gradient":
                    "linear-gradient(180deg, #003893 0%, #1a5cb5 30%, #FF6B35 70%, #F4C430 100%)",
                "card-gradient":
                    "linear-gradient(135deg, rgba(0,56,147,0.05) 0%, rgba(255,107,53,0.05) 100%)",
                "mountain-gradient":
                    "linear-gradient(to bottom, #87CEEB 0%, #E0F0FF 40%, #FFFFFF 100%)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "prayer-flag": {
                    "0%, 100%": { transform: "skewX(0deg)" },
                    "25%": { transform: "skewX(5deg)" },
                    "75%": { transform: "skewX(-5deg)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                "slide-in": {
                    from: { transform: "translateX(-100%)", opacity: "0" },
                    to: { transform: "translateX(0)", opacity: "1" },
                },
                "fade-up": {
                    from: { transform: "translateY(20px)", opacity: "0" },
                    to: { transform: "translateY(0)", opacity: "1" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "prayer-flag": "prayer-flag 2s ease-in-out infinite",
                float: "float 3s ease-in-out infinite",
                shimmer: "shimmer 2s linear infinite",
                "slide-in": "slide-in 0.3s ease-out",
                "fade-up": "fade-up 0.5s ease-out",
            },
        },
    },
    plugins: [animate],
};

export default config;
