import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './Context/UserContext';
import { LanguageProvider } from './Context/LanguageContext';
import { QuestionProvider } from './Context/QuestionContext';
import { AnswerProvider } from './Context/AnswerContext';
//localStorage.clear();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LanguageProvider>
          <QuestionProvider>
            <AnswerProvider>
              <App />
            </AnswerProvider>
          </QuestionProvider>
        </LanguageProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
