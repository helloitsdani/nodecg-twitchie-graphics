import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: {
    name: 'nodecg-twitchie-graphics',
    file: './graphics/index.js',
    format: 'esm',
    sourcemap: true,
  },
  external: ['nodecg-twitchie'],
  plugins: [typescript()],
}
