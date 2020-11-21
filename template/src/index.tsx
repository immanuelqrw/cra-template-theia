import { ComponentPage } from "@layouts/ComponentPage"
import { configureStore } from "@stores/componentStore"
import { createBrowserHistory } from "history"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Route, Router, Switch } from "react-router-dom"

const rootElement = document.getElementById("root")
const hist = createBrowserHistory()
const componentStore = configureStore()

ReactDOM.render(
  <Provider store={componentStore}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={ComponentPage} />
      </Switch>
    </Router>
  </Provider>,
  rootElement
)
