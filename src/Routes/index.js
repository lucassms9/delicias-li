import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/loja">
                    <Shop />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
