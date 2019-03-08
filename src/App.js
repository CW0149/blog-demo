import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import SideMenu from './routes/SideMenu'
import Article from './routes/Article'
import Project from './routes/Project'
import ContentContainer from './components/ContentContainer'

import './App.css'
// add the appropriate line(s) in Step 2a if you are using compiled CSS instead.

class App extends Component {
  componentWillReceiveProps(nextProps) {
    // this.getData()
    console.log('route change')
  }
  render() {
    return (
      [
        <Header key="appheader" />,
        <div id="app-main" key="appmain">
          <Route path="/article" component={Article} exact />
          <Route path="/projects" component={Project} exact />
          <Route path="/article/:name" component={SideMenu}></Route>
        </div>
      ]
    )
  }
}

export default App