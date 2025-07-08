import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animationDelay: {
  			'0': '0ms',
  			'75': '75ms',
  			'150': '150ms',
  			'225': '225ms',
  			'300': '300ms'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'celebration-glow': {
  				'0%, 100%': { opacity: '0.2' },
  				'50%': { opacity: '0.6' }
  			},
  			'gradient-shift': {
  				'0%, 100%': { transform: 'translateX(-50%) translateY(-50%)' },
  				'50%': { transform: 'translateX(-45%) translateY(-45%)' }
  			},
  			'cell-entrance': {
  				'0%': { opacity: '0', transform: 'scale(0.8) rotate(5deg)' },
  				'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
  			},
  			'bounce-in': {
  				'0%': { transform: 'scale(0.3)', opacity: '0' },
  				'50%': { transform: 'scale(1.1)', opacity: '0.8' },
  				'100%': { transform: 'scale(1)', opacity: '1' }
  			},
  			'symbol-enter': {
  				'0%': { transform: 'scale(0) rotate(180deg)', opacity: '0' },
  				'60%': { transform: 'scale(1.2) rotate(-10deg)', opacity: '0.8' },
  				'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
  			},
  			'symbol-glow': {
  				'0%, 100%': { textShadow: '0 0 5px currentColor' },
  				'50%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'celebration-glow': 'celebration-glow 1s ease-in-out infinite',
  			'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
  			'cell-entrance': 'cell-entrance 0.5s ease-out',
  			'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  			'symbol-enter': 'symbol-enter 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  			'symbol-glow': 'symbol-glow 1s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

export default config 