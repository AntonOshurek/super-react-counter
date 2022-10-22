import type { ResetType, SetAmountType, ToggleLimitType, SetLimitValueType, ChangeValueType } from "../../types/actions-types";
import { ActionTypes } from "../../types/actions-types";

export const changeValueAction = (newValue: number): ChangeValueType => {
  return {
    type: ActionTypes.changeValue,
    payload: newValue,
  }
}

export const resetCountAction = (): ResetType => {
  return {
    type: ActionTypes.reset
  }
}

export const setAmountAction = (count: number): SetAmountType => {
  return {
    type: ActionTypes.setAmount,
    payload: count
  }
}

export const toggleLimitAction = (limit: boolean): ToggleLimitType => {
  return {
    type: ActionTypes.toggleLimit,
    payload: limit
  }
}

export const setLimitValueAction = (limit: number): SetLimitValueType => {
  return {
    type: ActionTypes.setlimitValue,
    payload: limit
  }
}
