export enum ActionTypes {
  changeValue = 'counter/changeValue',
  reset = 'counter/reset',
  setAmount = 'settings/setAmount',
  toggleLimit = 'settings/toggleLimit',
  setlimitValue = 'settings/setlimitValue',
}

export type ChangeValueType = {
  type: ActionTypes.changeValue,
  payload: number,
}

export type ResetType = {
  type: ActionTypes.reset,
}

export type SetAmountType = {
  type: ActionTypes.setAmount,
  payload: number
}

export type ToggleLimitType = {
  type: ActionTypes.toggleLimit,
  payload: boolean,
}

export type SetLimitValueType = {
  type: ActionTypes.setlimitValue,
  payload: number,
}

//enumeration of all action types
export type Actions =
| ChangeValueType
| ResetType
| SetAmountType
| ToggleLimitType
| SetLimitValueType
