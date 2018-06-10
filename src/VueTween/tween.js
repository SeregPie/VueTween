import Object_isObject from '/utils/Object/isObject';
import Object_mapValues from '/utils/Object/mapValues';

let tween = function(endValue, startValue, t) {
	if (Array.isArray(endValue) && Array.isArray(startValue)) {
		return endValue.map((endValue, i) =>
			tween(endValue, startValue[i], t)
		);
	}
	if (Object_isObject(endValue) && Object_isObject(startValue)) {
		return Object_mapValues(endValue, (endValue, k) =>
			tween(endValue, startValue[k], t)
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
