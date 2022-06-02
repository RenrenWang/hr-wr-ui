import rollupConfig, { file } from "./rollup.config";
export default {
  ...rollupConfig,
  output: {
    file: file("esm"), //输出文件的路径以及文件名
    format: "es", // 输出文件的格式  iife 是自调用函数
  },
};
