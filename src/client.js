import ReactDOM from 'react-dom';
import React from 'react';
import BaseComponent from './components/Base';

window.render = function(elementId) {
  ReactDOM.render(
    //<div className="test">Hello world</div>,
    <BaseComponent />,
    document.getElementById(elementId)
  );
}