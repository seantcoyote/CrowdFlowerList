import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {StyleRoot} from 'radium'
import configureStore from './configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TaskListApp from './components/TaskListApp'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <StyleRoot> {/* For Radium */}
        <TaskListApp />
      </StyleRoot>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
