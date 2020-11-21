import { ComponentAction } from "@actions/componentAction"
import { Payload } from "@actions/payload"

export interface Action {
  type: ComponentAction
  payload: Payload
}
