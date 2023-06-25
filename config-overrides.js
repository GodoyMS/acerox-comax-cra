const { aliasWebpack, aliasJest } = require('react-app-alias');

const aliasMap = {
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@hooks': 'src/hooks',
  '@data': 'src/data',
  '@screens': 'src/screens',
  '@utils': 'src/utils',
  '@redux': 'src/redux',
  '@root': 'src'
};

const options = {
  alias: aliasMap
};

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);