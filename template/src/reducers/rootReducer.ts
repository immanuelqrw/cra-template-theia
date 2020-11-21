import { componentViewerReducer } from "@reducers/componentViewerReducer"
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
  goals: componentViewerReducer
})
