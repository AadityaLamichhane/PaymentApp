import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      }, 
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  components:{
    "sidebar-toggle-icon": {
      display: "inline-block",
      width: "1.5rem",
      height: "1.5rem",
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
      transform: "rotate(90deg)",
      },
    },
  },
  plugins: [],
};
export default config;
