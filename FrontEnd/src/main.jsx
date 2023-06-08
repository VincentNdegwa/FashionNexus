// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

const rootContainer = document.createElement("div");
document.body.appendChild(rootContainer);

ReactDOM.createRoot(rootContainer).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
