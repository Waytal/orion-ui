import { App, Plugin } from 'vue';
import { upperFirst } from 'lodash-es';
import OrionDateWeek from './src/OrionDateWeek.vue';
import OrionDateWeekSetupService from './src/OrionDateWeekSetupService';

export const OrionDateWeekPlugin: Plugin = {
	install (app: App, prefix: string = 'o') {
		app.component(`${upperFirst(prefix)}DateWeek`, OrionDateWeek);
	},
};

export { OrionDateWeek, OrionDateWeekSetupService };
