"use strict";
const _ = require("lodash");

if (typeof process.env.NODE_ENV === "undefined") {
  process.env.NODE_ENV = "staging";
}
// All configurations will extend these options
// ============================================
let all = {
  env: process.env.NODE_ENV,
  port: 4444,
};
// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.extendWith(
  all,
  require("./" + process.env.NODE_ENV + ".js") || {});
