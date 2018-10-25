(function() {

	new Vue({
		el: '#app',

		data: {
			colorObject: tinycolor.random().toRgb(),
			durationIndex: 1,
			durationValues: [0, 1000, 5000, 10000],
		},

		computed: {
			animatedColor: function() {
				return tinycolor(this.animatedColorObject).toHexString();
			},

			duration: function() {
				return this.durationValues[this.durationIndex];
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
