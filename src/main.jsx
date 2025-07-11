import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ui/ErrorBoundary.jsx'
import './styles/globals.css'

console.log('Subash Portfolio: main.jsx starting to load...');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

console.log('Subash Portfolio: main.jsx render complete');
