/**
 * @constant collection
 * @type {json}
 * @default
 */
const config = {
  development: {
    database: 'trouva_dev',
  },
  test: {
    database: 'trouva_test',
  },
};

/**
 * @function
 * @name getEnv
 * @param {string} env - The variable assigned to process.env.NODE_ENV variable, set to either test or development.
 */
function getEnv(env) {
  return config[env];
}

/**
 * getEnv Module, exports the getEnv function.
 * @module collection
 */
module.exports.getEnv = getEnv;
