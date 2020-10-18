import {isFunction} from '@vue/shared';

import mapValues from './mapValues';
import tweened from './tweened';

export default {
	computed: {},
	beforeCreate() {
		let {$options} = this;
		let {
			computed: computedProperties,
			tweened: tweenedProperties,
		} = $options;
		if (tweenedProperties) {
			Object.assign(computedProperties, mapValues(tweenedProperties, v => {
				let {
					get,
					duration,
					...options
				} = mapValues(v, v => isFunction(v) ? v.bind(this) : v);
				let r = tweened(get, duration, options);
				return {
					get() {
						return r.value;
					},
					set(v) {
						r.value = v;
					},
				};
			}));
		}
	},
};