import babel from 'rollup-plugin-babel';
import entries from 'rollup-plugin-multi-entry';

let babelConfig = {
  babelrc: false,
  presets: [
    ['env', { modules: false }],
  ],
  plugins: ['external-helpers'],
};

export default {
  input: 'modules/*.js',
  output: {
    file: 'build/redux-suspense.js',
    format: 'cjs',
  },
  plugins: [entries(), babel(babelConfig)],
  external: ['react', 'react-redux'],
};
