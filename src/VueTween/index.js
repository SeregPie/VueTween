import Function_cast from '/utils/Function/cast';
import initAnimation from '/utils/initAnimation';

import tween from './tween';

let prefix = 'tweened_';
let prefixStart = prefix + 'start_';
let prefixFrame = prefix + 'frame_';

export default {
	install(Vue) {
		Vue.config.optionMergeStrategies.tweened = function(toValue, fromValue) {
			return {...fromValue, ...toValue};
		};
		Vue.mixin(this);
	},

	data() {
		let {$options} = this;
		let data = {};
		let {tweened} = $options;
		if (tweened) {
			let computed = {};
			Object.entries(tweened).forEach(([key, {
				get: getValue,
				duration: getDuration,
			}]) => {
				getDuration = Function_cast(getDuration);
				let value;
				let startValue;
				let endValue;
				let startTime;
				let duration;
				let startTweening;
				computed[prefixStart + key] = function() {
					if (startTweening) {
						startValue = value;
						endValue = getValue.call(this);
						startTime = Date.now();
						duration = getDuration.call(this);
						startTweening();
					} else {
						startTweening = initAnimation(() => {
							if (this._isDestroyed) {
								return false;
							}
							let elapsedTime = Date.now() - startTime;
							if (elapsedTime < duration) {
								let t = elapsedTime / duration;
								value = tween(endValue, startValue, t);
								this[prefixFrame + key] = {};
							} else {
								value = endValue;
								this[prefixFrame + key] = {};
								return false;
							}
						});
						value = getValue.call(this);
					}
				};
				data[prefixFrame + key] = {};
				computed[key] = function() {
					this[prefixStart + key];
					this[prefixFrame + key];
					return value;
				};
			});
			Object.assign($options.computed, computed);
		}
		return data;
	},

	computed: {},
};
