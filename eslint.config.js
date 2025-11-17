import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import neverthrowPlugin from "@bufferings/eslint-plugin-neverthrow";

const options = {
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.config.*"],
      },
      tsconfigRootDir: import.meta.dirname,
    },
  },
};

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  neverthrowPlugin.configs.recommended,
  options
);
