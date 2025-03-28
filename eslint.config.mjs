import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    ignores: ["dist/*"], 
    rules: {
      semi: "error",
      "prefer-const": "error"
    } 
  },
  tseslint.configs.recommended,
]);