module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      '@babel/preset-env',
      {
        modules: false,
        forceAllTransforms: true,
        useBuiltIns: false,
        targets: {
          browsers: [
            '> 2%',
            'last 2 versions'
          ]
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-object-assign'
  ],
};