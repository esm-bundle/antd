import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: require.resolve("antd"),
    output: {
      file: `${dir}/index.js`,
      sourcemap: true,
      format,
    },
    plugins: [
      resolve(),
      commonjs(),
      replace({
        values: {
          "process.env.NODE_ENV": JSON.stringify("development"),
        },
      }),
      terser(),
    ],
  };
}

export default [createConfig("module"), createConfig("system")];
