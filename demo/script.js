(function() {

	var computed = vueCompositionApi.computed;
	var ref = vueCompositionApi.ref;
	var tweened = VueTween.tweened;

	new Vue({
		el: '#app',
		vuetify: new Vuetify(),
		setup: function() {
			var durationItems = [
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
			];
			var durationLabels = durationItems.map(function(item) {
				return item.label;
			});
			var durationValues = durationItems.map(function(item) {
				return item.value;
			});
			var durationIndexRef = ref(1);
			var durationRef = computed(function() {
				var durationIndex = durationIndexRef.value;
				return durationValues[durationIndex];
			});
			var colorObjectRef = ref(tinycolor.random().toRgb());
			var animatedColorObjectRef = tweened(colorObjectRef, durationRef);
			return {
				animatedColorObject: animatedColorObjectRef,
				colorObject: colorObjectRef,
				duration: durationRef,
				durationIndex: durationIndexRef,
				durationLabels: durationLabels,
			};
		},
		data: {
			colorItems: [
				{
					color: '#f00',
					key: 'r',
					label: 'red',
				},
				{
					color: '#0f0',
					key: 'g',
					label: 'green',
				},
				{
					color: '#00f',
					key: 'b',
					label: 'blue',
				},
			],
		},
		computed: {
			animatedColor: function() {
				return tinycolor(this.animatedColorObject).toHexString();
			},
		},
	});

})();
