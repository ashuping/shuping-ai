import React from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'

import './Header.css';

function Header({menu_open, set_menu_open}){
	return <div className="header">
		<div className="header-topbar">
			<div className="header-topbar-name">
				Alexis Maya-Isabelle Shuping
			</div>
		</div>
		<div className="header-menubar">
			<div 
				className="lmenu"
				onClick={() => {set_menu_open(!menu_open)}}
			>
				<div className="lmenu-menu"><Menu /></div>
			</div>
			<div className="qlinks">
				<Link className="qlinks-item" to="/about"><div className="qlinks-item-inner">
					About Me
				</div></Link>

				<div className="qlinks-item qlinks-flex-space" />

				<Link className="qlinks-item" to="/publications"><div className="qlinks-item-inner">
					My Publications
				</div></Link>

				<div className="qlinks-item qlinks-flex-space" />
				
				<Link className="qlinks-item" to="/contact"><div className="qlinks-item-inner">
					Contact
				</div></Link>

				<div className="qlinks-item qlinks-flex-space" />
				
				<Link className="qlinks-item" to="/blog"><div className="qlinks-item-inner">
					Blog
				</div></Link>
			</div>
			<div className="menubar-end" />
		</div>
	</div>
}

export default Header