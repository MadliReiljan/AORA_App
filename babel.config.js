module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",  // Nativewind plugin
      [
        'module-resolver',  // Module resolver plugin
        {
          alias: {
            '@/': './src/',  // Alias for the 'src' folder
            '@components': './src/components',  // Alias for 'components'
            '@lib': './src/lib'  // Alias for 'lib'
          },
        },
      ],
    ],
  };
};

