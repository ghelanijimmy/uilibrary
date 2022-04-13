const deps = require("./package.json").dependencies;
module.exports = {
  name: "uiLibrary",
  filename: "remoteEntry.js",
  exposes: {
    "./Components": "./src/components/Button/Button.js",
  },
  shared: [
    {
      react: {
        singleton: true,
        eager: true,
        requiredVersion: deps["react"],
      },
      "react-dom": {
        singleton: true,
        eager: true,
        requiredVersion: deps["react-dom"],
      },
    },
  ],
};
