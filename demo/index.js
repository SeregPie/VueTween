(function() {

	new Vue({
		el: '#app',

		data: {
			colorObject: tinycolor.random().toRgb(),
			durationValues: [0, 1000, 5000, 10000],
			durationValueIndex: 1,
		},

		computed: {
			duration: function() {
				return this.durationValues[this.durationValueIndex];
			},

			animatedColor: function() {
				return tinycolor(this.animatedColorObject).toHexString();
			},
		},

		tweened: {
			animatedColorObject: {
				get: function() {
					return this.colorObject;
				},
				duration: function() {
					return this.duration;
				},
			},
		},
	});

})();
