(function() {

	new Vue({
		el: '#app',
		vuetify: new Vuetify(),
		data: {
			colorObject: tinycolor.random().toRgb(),
			durationIndex: 1,
			durationItems: [
				{
					label: '0s',
					value: 0,
				},
				{
					label: '1s',
					value: 1000,
				},
				{
					label: '5s',
					value: 5000,
				},
			],
		},
		computed: {
			animatedColor: function() {
				return tinycolor(this.animatedColorObject).toHexString();
			},
			duration: function() {
				return this.durationValues[this.durationIndex];
			},
			durationLabels: function() {
				return this.durationItems.map(function(item) {
					return item.label;
				});
			},
			durationValues: function() {
				return this.durationItems.map(function(item) {
					return item.value;
				});
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
