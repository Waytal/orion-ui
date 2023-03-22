import { App, Plugin } from 'vue';
import { upperFirst } from 'lodash-es';
import OrionPage from './src/OrionPage.vue';
import OrionPageSetupService from './src/OrionPageSetupService';

export const OrionPagePlugin: Plugin = {
	install (app: App, prefix: string = 'o') {
		app.component(`${upperFirst(prefix)}Page`, OrionPage);
	},
};

export { OrionPage, OrionPageSetupService };
