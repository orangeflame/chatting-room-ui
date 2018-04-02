const withTs = require("@zeit/next-typescript");
module.exports = withTs({
  webpack(config, options) {
    config.resolve.modules.push(__dirname);
    return config;
  },
});
