import React, { Suspense } from 'react'
import {BrowserRouter as Router, Route, Switch ,Redirect, Link, Routes, Navigate} from 'react-router-dom'
// import {BrowserRouter as Router, Route, Switch ,Redirect, Link, Routes, Navigate} from 'react-router-dom'

import NotFound from './components/NotFound'
import './App.scss'
import Header from './components/Header'

const Photo = React.lazy(() => import('./features/Photo'))
const App = () => {
  return (
    <div className="photo-app">
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        {/* <ul>
          <li><Link to='/photos'>Go to on Page</Link></li>
          <li><Link to='/photos/add'>Go to add new photo page</Link></li>
          <li><Link to='/photo/123'>go to edit photo page</Link></li>
        </ul> */}
        <Header/>
        <Switch>
          <Redirect exact from='/' to='/photos' />
          <Route path='/photos' component={Photo}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </Suspense>
  </div>
  )
}

export default App