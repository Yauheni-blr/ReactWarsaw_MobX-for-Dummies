import axios from 'axios'

import { observable, action, computed } from 'mobx'

class AppState {
  @observable amount
  @observable rates

  constructor() {
    this.amount = 0
    this.rates = {}
  }

  @action changeAmount(val) {
    this.amount = val
  }

  @action fetchRates(val) {
    axios
      .get(val)
      .then(res => this.rates = res.data.rates)
  }

  calcResult(item) {
    return computed(() => (this.amount * this.rates[item]).toFixed(3)).get()
  }
}

export default new AppState()
