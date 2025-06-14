import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles.css'
import { Provider } from 'react-redux';
import { store } from './store/index.store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}><App /></Provider>
)
