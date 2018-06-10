(function() {

	new Vue({
		el: '#App',

		data: {
			input: {
				color: (function() {
					var min = 0;
					var max = 255;
					var value = tinycolor.random().toRgb();
					return {
						r: {
							value: value.r,
							min: min,
							max: max,
						},
						g: {
							value: value.g,
							min: min,
							max: max,
						},
						b: {
							value: value.b,
							min: min,
							max: max,
						},
					};
				})(),
				duration: {
					values: [0, 1, 5, 10],
					valueIndex: 1,
				},
			},
		},

		computed: {
			colorObject: function() {
				var input = this.input;

				var r = input.color.r.value;
				var g = input.color.g.value;
				var b = input.color.b.value;
				var color = {r: r, g: g, b: b};
				return color;
			},

			duration: function() {
				var input = this.input;

				var values = input.duration.values;
				var valueIndex = input.duration.valueIndex;
				var value = values[valueIndex];
				var duration = value * 1000;
				return duration;
			},

			animatedColor: function() {
				var colorObject = this.animatedColorObject;

				return tinycolor(colorObject).toHexString();
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
