
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import Store from './Store';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider store={Store}>
    <App />
    </Provider>
    </HashRouter>,
)
