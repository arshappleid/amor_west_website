import React,{ Component } from 'react'
import { Link } from "react-router-dom";

const instagram = 'https://www.instagram.com/amorwest/';

class Header extends Component {
	render() {
		return (
			<div className="topheader" id="topHeader">
				<div>
					<h2>Amor West , UBCO's biggest party frat. </h2>
					<span>
						<a href={instagram}>Follow us on Instagram.</a>
						<Link to = "tickets"><p>Tickets</p></Link>
					</span>
				</div>
			</div>
		)
	}
}
 
export default Header