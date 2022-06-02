import rollupConfig, { file, name } from "./rollup.config";
export default {
  ...rollupConfig,
  output: {
    name,
    file: file("umd"), //输出文件的路径以及文件名
    format: "umd", // 输出文件的格式  iife 是自调用函数
  },
};
