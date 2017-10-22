import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import './index.css';
import TaskListApp from './components/TaskListApp';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
      <TaskListApp />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
