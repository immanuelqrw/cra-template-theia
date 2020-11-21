import { rootReducer } from "@reducers/rootReducer"
import { ComponentState } from "@services/component/componentState"
import { createStore, Store } from "redux"

export function configureStore(): Store<ComponentState> {
  return createStore(
    rootReducer,
    undefined
  )
}
