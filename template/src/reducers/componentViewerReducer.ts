import { Action } from "@actions/action"
import { ComponentAction } from "@actions/componentAction"
import { Goal } from "@services/component/goal"

export function componentViewerReducer(state : Goal[] = [], action: Action) {
  switch (action.type) {
    case ComponentAction.ADD_ENTRIES:
      return action.payload.goals
    case ComponentAction.ADD_ENTRY:
      return [
        ...state,
        {
          goal: action.payload.goal
        }
      ]
    case ComponentAction.REMOVE_ENTRY:
      return state.filter((goal) =>
        goal !== action.payload.goal
      )
    case ComponentAction.UPDATE_ENTRY:
      return [
        ...state,
        {
          goal: action.payload.goal
        }
      ]
    default:
      return state
  }
}
