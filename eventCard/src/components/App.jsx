import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'


import { EventForm } from './EventForm/EventForm'
import { EventCard } from './EventCard/EventCard'

const classNames = {
  APP: 'app'
}

class App extends Component {
  render() {
    return (
      <div className={classNames.APP}>
        <EventForm />
        <EventCard />
        <DevTools />
      </div>
    )
  }
}

export default App
