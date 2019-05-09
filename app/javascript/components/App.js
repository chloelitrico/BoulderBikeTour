import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
    render (){
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
            </div>
        )
    }
}

export default App