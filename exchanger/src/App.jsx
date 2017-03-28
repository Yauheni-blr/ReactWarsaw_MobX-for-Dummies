import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const url = 'http://api.fixer.io/latest?base=pln'

@observer
class App extends Component {
  componentDidMount() {
    this.props.store.fetchRates(url)
  }

  render() {
    return (
      <div>
        {
          Object.keys(this.props.store.rates).length
            ? <div>
                <input
                  value={this.props.store.amount ? this.props.store.amount : ''}
                  onChange={(e) => this.props.store.changeAmount(e.target.value)}
                /> PLN

                <table>
                  <thead>
                    <tr>
                      <th>Currency</th>
                      <th>Rate</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Object.keys(this.props.store.rates)
                        .map((item, i) =>
                          <tr key={i}>
                            <td>{ item }</td>
                            <td>{ this.props.store.rates[item] }</td>
                            <td>{ this.props.store.calcResult(item) }</td>
                          </tr>
                        )
                    }
                  </tbody>
                </table>
              </div>
            : <p>loading . . .</p>
        }
      </div>
    )
  }
};

export default App;
