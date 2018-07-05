import Object_isObject from '../Object/isObject';
import Object_mapValues from '../Object/mapValues';

let Lang_clone = function(value) {
	if (Array.isArray(value)) {
		return value.map(Lang_clone);
	}
	if (Object_isObject(value)) {
		return Object_mapValues(value, Lang_clone);
	}
	return value;
};

export default Lang_clone;
