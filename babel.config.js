const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        utils: './src/lib/utils',
        configs: './src/lib/configs',
        components: './src/lib/components',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...commonPlugins],
};
