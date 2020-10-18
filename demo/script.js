(function() {

	new Vue({
		el: '#app',
		vuetify: new Vuetify(),
		data() {
			let exampleItems = [
				{
					component: 'MyExample1',
					name: 'example 1',
				},
				{
					component: 'MyExample2',
					name: 'example 2',
				},
				{
					component: 'MyExample3',
					name: 'example 3',
				},
			];
			return {
				exampleItems,
				exampleIndex: 0,
			};
		},
		components: {
			MyExample1: {
				data() {
					return {
						count: 0,
						countDelta: 100,
					};
				},
				computed: {
					countAnimated() {
						return this.count;
					},
					countAnimatedFormatted() {
						return Number(this.countAnimated).toLocaleString('en');
					},
				},
				methods: {
					incCount() {
						this.count += this.countDelta;
					},
					decCount() {
						this.count -= this.countDelta;
					},
				},
				template: '#MyExample1',
			},
			MyExample2: {
				data() {
					return {
						color: (([r, g, b]) => ({r, g, b}))(chroma.random().rgb()),
					};
				},
				computed: {
					colorAnimated() {
						return this.color;
					},
					colorAnimatedFormatted() {
						return chroma(this.colorAnimated).hex();
					},
				},
				template: '#MyExample2',
			},
			MyExample3: {
				data() {
					return {
						position: [1/2, 1/2],
					};
				},
				computed: {
					positionAnimated() {
						return this.position;
					},
				},
				methods: {
					onClickToSetPosition(event) {
						let rect = event.target.getBoundingClientRect();
						this.position = [
							Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1),
							Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1),
						];
					},
				},
				template: '#MyExample3',
			},
		},
	});

})();
