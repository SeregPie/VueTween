import {isFunction} from '@vue/shared';

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
			let toComputedProperty = (value => {
				let {
					get,
					duration,
					...options
				} = Object.entries(value).reduce((object, [key, value]) => {
					if (isFunction(value)) {
						value = value.bind(this);
					}
					object[key] = value;
					return object;
				}, {});
				let r = tweened(get, duration, options);
				return {
					get() {
						return r.value;
					},
					set(value) {
						r.value = value;
					},
				};
			});
			Object.entries(tweenedProperties).forEach(([key, value]) => {
				computedProperties[key] = toComputedProperty(value);
			});
		}
	},
};