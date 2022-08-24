import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main_page';
import App from "./App";
import './index.css'
import { BrowserRouter as Router} from "react-router-dom";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Main from './Components/Main';

//const element1 = React.createElement('h1', null, 'Ashmeets Weeding')



//ReactDOM.render(element1, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);