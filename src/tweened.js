import {
	computed,
	isRef,
} from 'vue-demi';
import {isFunction} from '@vue/shared';

export default function(value, duration) {
	let toGetter = (value => {
		if (isFunction(value)) {
			return value;
		}
		if (isRef(value)) {
			return (() => value.value);
		}
		return (() => value);
	});
	let getValue = toGetter(value);
	let getDuration = toGetter(duration);
	return computed(() => {
		return getValue();
	});
}
