import React from 'react'
import 'babel-polyfill'
import 'whatwg-fetch' // Fetch polyfill
import Promise from 'promise-polyfill' // Promise polyfill
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import './index.css'
import TaskListApp from './components/TaskListApp'
import registerServiceWorker from './registerServiceWorker'

if (!window.Promise) {
  window.Promise = Promise;
}

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <TaskListApp />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
