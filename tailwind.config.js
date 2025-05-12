/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true, // căn giữa
        padding: '1rem', // padding hai bên
        screens: {
          sm: '576px', // 576px
          md: '768px', // 768px
          lg: '1024px', // 1024px
          xl: '1280px', // 1280px
          '2xl': '1400px' // tùy chỉnh max-width cho từng breakpoint
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        1: 'var(--shadow-1)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
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
        jump: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, 30px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: 0.6 },
          '70%': { transform: 'scale(1.00)', opacity: 0.9 },
          '100%': { transform: 'scale(0.95)', opacity: 0.6 }
        },
        ripple: {
          '0%': {
            transform: 'scale(0.2, 0.2)',
            opacity: 0.6
          },
          '50%': {
            opacity: 0.9
          },
          '100%': {
            transform: 'scale(1, 1)',
            opacity: 0
          }
        },
        glow: {
          '0%': {
            boxShadow: '0 0 0px rgba(168, 85, 247, 0.4)'
          },
          '100%': {
            boxShadow: '0 0 0px rgba(168, 85, 247, 0.4)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)'
          }
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        jump: 'jump 5s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
        ripple: 'ripple 2.5s ease-out infinite',
        glow: 'glow 3s ease-out infinite',
        scrollX: 'scrollX 60s linear infinite'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
}
