const config = {
  development: {
    database: 'trouva_dev',
  },
  test: {
    database: 'trouva_test',
  },
}

function getEnv(env) {
  return config[env];
}

module.exports.getEnv = getEnv;
