import { defineConfig, globalIgnores } from "eslint/config";

import nextTypeScript from "eslint-config-next/typescript";
import nextWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextWebVitals,
  ...nextTypeScript,
  {
    files: ["src/app/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{ group: ["@/data/*"], message: "Read content through @/lib/content; pass props to client components." }],
      }],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

