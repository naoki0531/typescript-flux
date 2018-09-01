module.exports = {
  mode: 'development',
  entry: './src/entry.ts',
  output: {
    path: __dirname,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  }
};