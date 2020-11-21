import { ComponentAction } from "@actions/componentAction"
import { Action } from "@actions/action"
import { Goal } from "@services/component/goal"

export function addGoals(goals: Goal[]): Action {
  return {
    type: ComponentAction.ADD_ENTRIES,
    payload: {
      goals
    }
  } as const
}

export function addGoal(goal: Goal): Action {
  return {
    type: ComponentAction.ADD_ENTRY,
    payload: {
      goal
    }
  } as const
}

export function removeGoal(goal: Goal): Action {
  return {
    type: ComponentAction.REMOVE_ENTRY,
    payload: {
      goal
    }
  } as const
}

export function updateGoal(goal: Goal): Action {
  return {
    type: ComponentAction.UPDATE_ENTRY,
    payload: {
      goal
    }
  } as const
}
