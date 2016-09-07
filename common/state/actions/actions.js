import * as contextActions from './contextActions';
import * as localizationActions from './localizationActions';
import * as windowActions from './windowActions';

const actions = {
	context: {...contextActions},
	localization: {...localizationActions},
	window: {...windowActions},
};

export default actions;