export default function(callback, delay) {
	let idle = true;
	let run = (() => {
		requestAnimationFrame(() => {
			if (callback() === false) {
				idle = true;
			} else {
				setTimeout(run, delay);
			}
		});
	});
	return (() => {
		if (idle) {
			idle = false;
			run();
		}
	});
}
