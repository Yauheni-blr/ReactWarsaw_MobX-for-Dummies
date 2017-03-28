import { observable, action, computed, autorun, whyRun } from 'mobx'

class PersonState {
  @observable firstName
  @observable lastName

  constructor() {
    this.firstName = ''
    this.lastName  = ''
  }

  @action changeFirstName(val) {
    this.firstName = val
  }

  @action changeLastName(val) {
    this.lastName = val
  }

  @computed get fullName() {
    if ([this.firstName, this.lastName].some(item => item.length > 0))
      return `Speaker: ${this.firstName} ${this.lastName}`
  }
}

export default new PersonState()
