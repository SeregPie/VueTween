import Function_cast from '/utils/Function/cast';
import Function_identity from '/utils/Function/identity';
import Lang_clone from '/utils/Lang/clone';
import prepareAnimationLoop from '/utils/prepareAnimationLoop';
import tween from '/utils/tween';

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
		let {
			computed,
			tweened,
		} = $options;
		if (tweened) {
			Object.entries(tweened).forEach(([key, {
				get: getValue,
				duration: getDuration,
				easing = Function_identity,
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
						endValue = Lang_clone(getValue.call(this));
						startTime = Date.now();
						duration = getDuration.call(this);
						startTweening();
					} else {
						startTweening = prepareAnimationLoop(() => {
							if (this._isDestroyed) {
								return false;
							}
							let elapsedTime = Date.now() - startTime;
							if (elapsedTime < duration) {
								let t = easing(elapsedTime / duration);
								value = tween(endValue, startValue, t);
								this[prefixFrame + key] = {};
							} else {
								value = endValue;
								this[prefixFrame + key] = {};
								return false;
							}
						});
						value = Lang_clone(getValue.call(this));
					}
				};
				data[prefixFrame + key] = {};
				computed[key] = function() {
					this[prefixStart + key];
					this[prefixFrame + key];
					return value;
				};
			});
		}
		return data;
	},

	computed: {},
};
