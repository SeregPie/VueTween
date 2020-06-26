import {
	computed,
	unref,
} from '@vue/composition-api';
import {isFunction} from '@vue/shared';

export default function(value, duration, easing) {
	let toGetter = (v => (() => unref(isFunction(v) ? v() : v)));
	let getValue = toGetter(value);
	let getDuration = toGetter(duration);
	return computed(() => {
		return getValue();
	});
}
