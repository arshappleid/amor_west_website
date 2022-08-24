import React, { Component } from 'react'

import Main1 from './main_page_components/Page_1';
import Header from './main_page_components/Header';


class Main extends Component {
	render() {
		return <div styles={"background:rgb(231,180,32)"}>
			<Header/><p></p>	
			<Main1 /><p></p>			
		</div>
	}
}

export default Main