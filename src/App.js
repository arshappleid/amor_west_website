

import React, { Component } from 'react';
import { Route, Routes , Link } from "react-router-dom";

// import all the pages Here
import Main from './components/Main_page';
import Ticket_page from './components/Ticket_page';

function App() {
  return (
	  <div>
		  <Routes>
			  		<Route exact path="/"  element={<Main/>} />
					<Route exact path="/tickets" element={<Ticket_page/>} />	
				</Routes>

		</div>
  );
}

export default App;