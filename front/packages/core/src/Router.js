import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthenticationScene from './scenes/AuthenticationScene'

function RouterWrapper() {

  return (
    <Router>
      <Switch>
        <Route path="/authentication">
          <AuthenticationScene />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouterWrapper
