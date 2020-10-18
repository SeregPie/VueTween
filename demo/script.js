(function() {

	new Vue({
		el: '#App',
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
					countAnimatedFormatted() {
						return Number(this.countAnimated).toLocaleString('en');
					},
				},
				tweened: {
					countAnimated: {
						get() {
							return this.count;
						},
						duration: 1000,
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
					colorAnimatedFormatted() {
						return chroma(this.colorAnimated).hex();
					},
				},
				tweened: {
					colorAnimated: {
						get() {
							return this.color;
						},
						duration: 2000,
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
				tweened: {
					positionAnimated: {
						get() {
							return this.position;
						},
						duration: 2000,
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
