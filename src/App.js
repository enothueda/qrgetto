import React from 'react';

import QRCodeReader from './components/qr-reader/qr-reader.component';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <QRCodeReader />
    </div>
  );
}

export default App;
