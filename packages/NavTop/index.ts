import { App, Plugin } from 'vue';
import { upperFirst } from 'lodash-es';
import OrionNavTop from './src/OrionNavTop.vue';
import OrionNavTopSetupService from './src/OrionNavTopSetupService';

export const OrionNavTopPlugin: Plugin = {
	install (app: App, prefix: string = 'o') {
		app.component(`${upperFirst(prefix)}NavTop`, OrionNavTop);
	},
};

export { OrionNavTop, OrionNavTopSetupService };
