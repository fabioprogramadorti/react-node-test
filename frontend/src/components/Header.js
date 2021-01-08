import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
const Header = () => {
	return (
		<nav>  
			<ul className="menu">  
				<li className="item">
					<Link to='/'>Home</Link>
				</li>  
			</ul>  
		</nav>
	)
}

export default Header