// const plugins = [];
// if (env.prod) {
//   plugins.push('react-refresh/babel');
// } // React hot reloading необходим только в  режиме разработки

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],

  // plugins,
};
