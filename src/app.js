import React from 'react';
import ReactDOM from 'react-dom';
import MessageContainer from './components/MessageContainer';

const App = () => {
  return (
    <div>
      <MessageContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
