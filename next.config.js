const withTs = require("@zeit/next-typescript");
module.exports = withTs({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: "svg-inline-loader",
    });
    config.resolve.modules.push(__dirname);
    return config;
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
});
