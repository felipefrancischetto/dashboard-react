import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Segment, Menu, Grid } from 'semantic-ui-react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Dashboard from './scenes/dashboard/components/Dashboard'

import NewEmployee from './scenes/employee//components/NewEmployee'
import ManageEmployee from './scenes/employee//components/ManageEmployee'
import DetailsEmployee from './scenes/employee//components/DetailsEmployee'

import NewCustomer from './scenes/customer/components/NewCustomer'
import ManageCustomer from './scenes/customer/components/ManageCustomer'
import DetailsCustomer from './scenes/customer/components/DetailsCustomer'

import NewAttendance from './scenes/attendance/components/NewAttendance'
import ManageAttendance from './scenes/attendance/components/ManageAttendance'
import DetailsAttendance from './scenes/attendance/components/DetailsAttendance'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar/>
          <Segment style={{padding:'50px'}}>

            <Route exact path='/' component={Dashboard}/>

            <Route exact path='/attendance/new' component={NewAttendance}/>
            <Route exact path='/attendance/manage' component={ManageAttendance}/>
            <Route exact path='/attendance/details' component={DetailsAttendance}/>

            <Route exact path='/employee/new' component={NewEmployee}/>
            <Route exact path='/employee/manage' component={ManageEmployee}/>
            <Route exact path='/employee/details' component={DetailsEmployee}/>

            <Route exact path='/customer/new' component={NewCustomer}/>
            <Route exact path='/customer/manage' component={ManageCustomer}/>
            <Route exact path='/customer/details' component={DetailsCustomer}/>

          </Segment>
          <Footer/>
        </div>
      </Router>
    )
  }
}

