import entries from 'rollup-plugin-multi-entry';

export default {
  input: 'modules/*.js',
  output: {
    file: 'build/async-structure.js',
    format: 'cjs',
  },
  plugins: [entries()],
  external: ['react', 'react-redux'],
};
