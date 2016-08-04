import { WINDOW_RESIZE } from './../actions/actionsTypes';

const matchFourColumns = () => {
  const mq = window.matchMedia('(max-width: 480px)');
  return mq.matches;
};
const matchEightColumns = () => {
  const mqs = window.matchMedia('(min-width: 481px)');
  const mqe = window.matchMedia('(max-width: 840px)');
  return mqs.matches && mqe.matches;
};
const matchTwelveColumns = () => {
  const mq = window.matchMedia('(min-width: 841px)');
  return mq.matches;
};

export default function windowReducer(state = {
  fourColumn: matchFourColumns(),
  eightColumn: matchEightColumns(),
  twelveColumn: matchTwelveColumns()
}, action) {
  switch (action.type) {
    case WINDOW_RESIZE: {
      return {
        fourColumn: matchFourColumns(),
        eightColumn: matchEightColumns(),
        twelveColumn: matchTwelveColumns()
      };
    } default: {
      return state;
    }
  }
}
