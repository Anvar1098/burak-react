import React from "react";
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";  // malumotlar bunkeri
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";  // 
import { ThemeProvider } from "@mui/material/styles"; // 
import theme from "./app/MaterialTheme";
import "./css/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const container = document.getElementById('root')!;  // Real DOM
const root = createRoot(container);

// Global Integration: REDUX, MUI, ReactRouterDom
root.render(                                          // Virtual DOM uchun integratsiya
  <React.StrictMode>
    <Provider store={store}>    
      <ThemeProvider theme={theme}>   
        <CssBaseline />
        <Router>   
        <App/>   
        </Router>
      </ThemeProvider> 
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// REACT => library, reconsulation process (Virtual DOM bilan Real DOM ni qushib beradi)
// REACT => Virtual Domda ishlaydi
// Real DOM => bu browserda bizga namoyon bop turgan jami obyektlar
// Virtual DOM => bu eskiz yani virtualno yaratilishi Real DOMni, (Real DOM ni virtuali yani eskizi)
// Virtual DOM bilan Real DOM ishlashi tavofut virtual dan realga kuchiriladi
// REACT => Component-Based Declorative Single Page Application
// Component-Based => React componentlaridan tashkil topgan
// Declorative => kop xususiyatli yani pageni ayni bir qismi bilan operatsiya bajaradi (mantiqdan kelib chiqib)
// Single Page Application => butun bir boshli page
// MUI => Screen component, Sectional component, Common component
// Screen component => header va footer orasi
// Sectional component => container based 
// Common component => reusable, boshka qismladi ishlatamiz

/* <Provider store={store}>     REDUX butun loyihaga integratsiya buldi
      <ThemeProvider theme={theme}>  MUI butun loyihaga integratsiya buldi 
        <CssBaseline />
        <Router>   Router butun loyihaga integratsiya buldi 
        <App/>   Loyiha  */
