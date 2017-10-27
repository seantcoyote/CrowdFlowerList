import React from 'react';
import ReactDOM from 'react-dom';
import StatusAlert from './StatusAlert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusAlert />, div);
});
