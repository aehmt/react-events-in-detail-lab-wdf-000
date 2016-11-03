const React = require('react');
const ReactDOM = require('react-dom');

const CoordinatesButton = require('./components/CoordinatesButton');
const DelayedButton = require('./components/DelayedButton');
const findCoordinates = (xy) => { console.log(xy) }
const delay = Math.floor((Math.random() * 1000) + 1);

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={findCoordinates}/>
    <DelayedButton onDelayedClick={findCoordinates} delay={delay} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
