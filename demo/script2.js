(function() {

	var computed = VueCompositionAPI.computed;
	var ref = VueCompositionAPI.ref;
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
					label: '2s',
					value: 2000,
				},
				{
					label: '4s',
					value: 4000,
				},
				{
					label: '8s',
					value: 8000,
				},
			];
			var durationLabels = durationItems.map(function(item) {
				return item.label;
			});
			var durationValues = durationItems.map(function(item) {
				return item.value;
			});
			var durationIndex = ref(1);
			var duration = computed(function() {
				return durationValues[durationIndex.value];
			});
			var durationLabel = computed(function() {
				return durationLabels[durationIndex.value];
			});
			var colorString = ref(tinycolor.random().toHexString());
			var colorObject = computed(function() {
				return tinycolor(colorString.value).toRgb();
			});
			var animatedColorObject = tweened(colorObject, duration);
			var animatedColorString = computed(function() {
				return tinycolor(animatedColorObject.value).toHexString();
			});
			return {
				animatedColor: animatedColorString,
				color: colorString,
				durationIndex: durationIndex,
				durationLabel: durationLabel,
				durationValues: durationValues,
			};
		},
	});

})();
