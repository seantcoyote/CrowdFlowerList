import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskListApp from './components/TaskListApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TaskListApp />, document.getElementById('root'));
registerServiceWorker();
