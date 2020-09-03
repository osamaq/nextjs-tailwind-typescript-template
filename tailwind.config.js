module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      primary: "var(--color-bg-primary)",
      btn: "var(--color-bg-btn)",
      "btn-hover": "var(--color-bg-btn-hover)",
      "link-underline": "var(--color-link-underline)",
      "link-underline-hover": "var(--color-link-underline-hover)",
    },
    textColor: {
      display: "var(--color-text-display)",
      body: "var(--color-text-body)",
      white: "var(--color-text-white)",
      secondary: "var(--color-text-secondary)",
      btn: "var(--color-text-btn)",
      link: "var(--color-link-text)",
      "link-hover": "var(--color-link-hover)",
    },
    spacing: {
      5: "0.5rem",
      7: "0.7rem",
      8: "0.8rem",
      10: "1rem",
      15: "1.5rem",
      18: "1.8rem",
      22: "2.2rem",
      28: "2.8rem",
      32: "3.2rem",
      35: "3.5rem",
      40: "4rem",
      44: "4.4rem",
      48: "4.8rem",
      50: "5rem",
      54: "5.4rem",
      65: "6.5rem",
      86: "8.6rem",
      117: "11.7rem",
      149: "14.9rem",
      246: "24.6rem",
      426: "42.6rem",
      504: "50.4rem",
    },
    fontSize: {
      sm: "1.4rem",
      base: "1.8rem",
      lg: "2.4rem",
      xl: "3.6rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    letterSpacing: {
      display: "0rem",
      body: "-0.101rem",
    },
    lineHeight: {
      display: "2.4rem",
      body: "2.4rem",
    },
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      boxShadow: {
        octocatBtn: "0px 0px 15px rgba(44, 62, 80, 0.1)",
      },
      borderRadius: {
        btn: "0.3rem",
      },
      minWidth: {
        3.8: "3.8rem",
        5.8: "5.7rem",
      },
      minHeight: {
        3.8: "3.8rem",
        5.8: "5.7rem",
      },
      scale: {
        "-1": "-1",
      },
      gradientColorStops: {
        lightBlue: "#81A4F5",
        blue: "#5183F5",
      },
    },
  },
  variants: {},
  plugins: [],
}
