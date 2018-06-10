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
			},
		},

		computed: {
			colorObject: function() {
				var color = this.input.color;

				var r = color.r.value;
				var g = color.g.value;
				var b = color.b.value;
				return {r: r, g: g, b: b};
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
				duration: 1000,
			},
		},
	});

})();
