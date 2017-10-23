import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import './index.css'
import TaskListApp from './components/TaskListApp'
import registerServiceWorker from './registerServiceWorker'

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
