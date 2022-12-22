import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import "normalize.css"
import './index.css';
import App from './App';
import { TodoContextProvider } from './contexts/todo_context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter >
      <TodoContextProvider>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </TodoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);