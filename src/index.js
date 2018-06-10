import VueTween from './VueTween';

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueTween);
}

export default VueTween;
