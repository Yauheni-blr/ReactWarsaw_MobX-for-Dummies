import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx'


import PersonState from './store/PersonState';
import EventCardState from './store/EventCardState';

import App from './components/App';

useStrict(true)

const store = {
  person: PersonState,
  card: EventCardState,
}

render(
  <Provider { ...store }>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;

    render(
      <Provider { ...store }>
        <AppContainer>
          <App />
        </AppContainer>
      </Provider>,
      document.getElementById('root')
    )
  })
}
