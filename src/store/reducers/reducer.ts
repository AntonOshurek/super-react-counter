import { Actions } from "../../types/actions-types";
import { ActionTypes } from "../../types/actions-types";
import { StateType } from "../../types/state-types";
import { initialState } from "../initial-states/initial-state";

const reducer = (state: StateType = initialState, action: Actions): StateType => {
  switch (action.type) {
    case ActionTypes.changeValue:
      return {...state, value: action.payload};
    case ActionTypes.reset:
      return {...state, value: 0}
    case ActionTypes.setAmount:
      return {...state, amount: action.payload}
    case ActionTypes.toggleLimit:
      return {...state, limit: action.payload}
    case ActionTypes.setlimitValue:
      return {...state, limitValue: action.payload}
    default:
      return state;
  }
};

export { reducer };
