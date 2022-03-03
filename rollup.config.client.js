import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/client/index.ts',
  output: {
    name: 'nodecg-twitchie-graphics',
    dir: './lib',
    format: 'esm',
    sourcemap: true,
  },
  external: ['immer', 'zustand', 'zustand/vanilla', 'zustand/middleware', 'nodecg-twitchie'],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'lib/',
      rootDir: 'src/client',
      module: 'es6',
    }),
  ],
}
