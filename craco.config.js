const cracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.json',
      },
    },
    {
      plugin: 'babel-plugin-jsx-remove-data-test-id',
      options: {
        attributes: 'selenium-id',
      },
    },
  ],
};
