import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './core/store/theme/ThemeProvider';
import { BrowserRouter, Router } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
