import { observable, action, computed } from 'mobx'

class EventCardState {
  @observable eventName
  @observable topic
  @observable description
  @observable date

  constructor() {
    this.eventName = ''
    this.topic = ''
    this.description = ''
    this.date = ''
  }

  @action changeEventName(val) {
    this.eventName = val
  }

  @action changeTopic(val) {
    this.topic = val
  }

  @action changeDescription(val) {
    this.description = val
  }

  @action changeDate(val) {
    this.date = val
  }

  @computed get getTopic() {
    if (this.topic.length > 0)
      return `Topic: ${this.topic}`
  }

  @computed get getDescription() {
    if (this.description.length > 0)
      return `Description: ${this.description}`
  }

  @computed get getDate() {
    if (this.date.length > 0)
      return `Date: ${this.date}`
  }
}

export default new EventCardState()
