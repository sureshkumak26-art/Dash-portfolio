import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#07090b", mint: "#9dffcf" } } },
  plugins: []
};
export default config;
