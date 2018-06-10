export default function(callback) {
	let idle = true;
	let run = function() {
		requestAnimationFrame(() => {
			if (callback() === false) {
				idle = true;
			} else {
				run();
			}
		});
	};
	return function() {
		if (idle) {
			idle = false;
			run();
		}
	};
}
