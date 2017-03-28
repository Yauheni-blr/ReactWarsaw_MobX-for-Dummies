import React from 'react'
import { observer, inject } from 'mobx-react'

const classNames = {
  CARD: 'app__event-card',
  CARD_BOX: 'app__event-card_box',
  CARD_BOX_HEADER: 'app__event-card__box-header',
  CARD_BOX_BODY: 'app__event-card__box-body',
  CARD_BOX_FOOTER: 'app__event-card__box-footer'
}

export const EventCard =
  inject('card', 'person')(observer(
    (props, { card, person }) =>
      <div className={classNames.CARD}>
        <h1>Preview:</h1>
        <div className={classNames.CARD_BOX}>
          <div className={classNames.CARD_BOX_HEADER}>
            <h2>{props.card.eventName}</h2>
          </div>
          <div className={classNames.CARD_BOX_BODY}>
            <h4>{props.person.fullName}</h4>
            <h4>{props.card.getTopic}</h4>
            <h4>{props.card.getDescription}</h4>
          </div>
          <div className={classNames.CARD_BOX_FOOTER}>
            <h2>{props.card.date}</h2>
          </div>
        </div>
      </div>
  ))
