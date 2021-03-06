import npm from "rollup-plugin-node-resolve";

export default {
  entry: "index-small.js",
  format: "umd",
  moduleName: "d3",
  plugins: [npm({jsnext: true})],
  dest: "build/d3-small.js"
};

