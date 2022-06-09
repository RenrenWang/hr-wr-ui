import { name } from "./package.json";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import postcss from "rollup-plugin-postcss";
export const file = (type) => `dist/index.${type}.js`;

const overrides = {
  compilerOptions: {
    noUnusedParameters: true,
    noUnusedLocals: true,
    strictNullChecks: true,
    moduleResolution: "node",
    declaration: true,
    allowSyntheticDefaultImports: true,
  },
  useTsconfigDeclarationDir: true,
};
export default {
  input: "src/index.ts",
  output: [
    {
      name,
      file: file("umd"),
      format: "umd",
      globals: {
        react: "React",
      },
    },
    {
      file: file("esm"),
      format: "es",
      sourcemap: "inline",
      globals: {
        react: "React",
      },
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    postcss({
      extract: true,
      namedExports: true,
      minimize: true,
      modules: true,
      extensions: [".less", ".css"],
    }), // 处理css、less 文件
    eslint({
      exclude: ["node_modules"],
    }),
    typescript({
      tsconfigOverride: overrides,
    }),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".less"], //允许我们加载第三方模块
    }),
    commonjs(), // 转换为ES6版本
  ],
};
