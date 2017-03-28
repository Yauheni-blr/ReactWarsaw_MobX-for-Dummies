import React from 'react'

import { observer, inject } from 'mobx-react'

const classNames = {
  FORM: 'app__event-form'
}

export const EventForm = inject('card', 'person')(observer((props, { card }) =>
  <div className={classNames.FORM}>
    <span>PersonState:</span>
    <ul style={{ listStyle: 'none' }}>
      <li>
        <span>FirstName: </span>
        <br/>
        <input
          type="text"
          value={props.person.firstName || ''}
          onChange={(e) => props.person.changeFirstName(e.target.value)}
        />
      </li>
      <li>
        <span>LastName: </span>
        <br/>
        <input
          type="text"
          value={props.person.lastName || ''}
          onChange={(e) => props.person.changeLastName(e.target.value)}
        />
      </li>
    </ul>
    <br/><br/>
    <span>EventCardState:</span>
    <ul style={{ listStyle: 'none' }}>
      <li>
        <span>EventName: </span>
        <br/>
        <input
          type="text"
          value={props.card.eventName || ''}
          onChange={(e) => props.card.changeEventName(e.target.value)}
        />
      </li>
      <li>
        <span>Topic: </span>
        <br/>
        <input
          type="text"
          value={props.card.topic || ''}
          onChange={(e) => props.card.changeTopic(e.target.value)}
        />
      </li>
      <li>
        <span>Date: </span>
        <br/>
        <input
          type="text"
          value={props.card.date || ''}
          onChange={(e) => props.card.changeDate(e.target.value)}
        />
      </li>
      <li>
        <span>Description: </span>
        <br/>
        <textarea
          type="text"
          value={props.card.description || ''}
          onChange={(e) => props.card.changeDescription(e.target.value)}
          rows="4"
          cols="50"
        />
      </li>
    </ul>
  </div> 
))