import Object_isObject from './Object/isObject';
import Object_mapValues from './Object/mapValues';

let tween = function(endValue, startValue, t) {
	if (Array.isArray(endValue) && Array.isArray(startValue)) {
		return endValue.map((endValue, index) =>
			tween(endValue, startValue[index], t)
		);
	}
	if (Object_isObject(endValue) && Object_isObject(startValue)) {
		return Object_mapValues(endValue, (endValue, key) =>
			tween(endValue, startValue[key], t)
		);
	}
	if (Number.isFinite(endValue) && Number.isFinite(startValue)) {
		let value = startValue + (endValue - startValue) * t;
		if (Number.isInteger(endValue) && Number.isInteger(startValue)) {
			value = Math.round(value);
		}
		return value;
	}
	return endValue;
};

export default tween;
