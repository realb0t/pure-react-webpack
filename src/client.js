import ReactDOM from 'react-dom';
import BaseComponent from './components/Base'

window.render = function() {
  ReactDOM.render(
    <BaseComponent />,
    document.getElementById('content')
  );
}