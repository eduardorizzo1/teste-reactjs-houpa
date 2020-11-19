import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

import Purchase from '../pages/Purchase'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/purchase" component={Purchase} />
  </Switch>
)

export default Routes
