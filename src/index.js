import {isVue2} from 'vue-demi';

import install from './install';
import mixin from './mixin';
import tweened from './tweened';

export {
	install,
	mixin,
	tweened,
};

let plugin = {install};

export default plugin;

if (isVue2) {
	globalThis?.window?.Vue?.use(plugin);
}