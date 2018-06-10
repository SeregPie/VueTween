import buble from 'rollup-plugin-buble';
import path from 'path';
import resolve from '@seregpie/rollup-plugin-resolve';
import {uglify} from 'rollup-plugin-uglify';

import {main} from './package.json';

export default {
	input: 'src/index.js',
	output: {
		file: main,
		format: 'umd',
		name: path.basename(main, path.extname(main)),
	},
	plugins: [
		resolve(),
		buble({objectAssign: 'Object.assign'}),
		uglify(),
	],
};
