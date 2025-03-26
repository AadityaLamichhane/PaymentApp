import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "./src/**/*.tsx",
    "./src/component/**/*.tsx",
    "./src/component/**/*.jsx"

  ],
  
  presets: [sharedConfig],
};

export default config;
