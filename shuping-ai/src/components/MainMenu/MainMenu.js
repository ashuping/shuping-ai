import React from 'react';

import { Link } from 'react-router-dom';

function MainMenu({menu_open, set_menu_open}){

    const main_menu_sidebar = 
    <div className="main-menu-sidebar">
        <div className="main-menu-list">
            <Link to="/about" className="main-menu-item">About Me</Link>
            <Link to="/publications" className="main-menu-item">My Publications</Link>
            <Link to="/contact" className="main-menu-item">Contact Me</Link>
            <Link to="/blog" className="main-menu-item">Blog</Link>
            <div className="main-menu-item main-menu-item-nolink">External Links</div>

            {/* "noreferrer" makes it difficult for sites we link
            to to understand where the traffic is coming from. "noopener"
            fixes the reverse-tabnapping attack on all modern browsers.
            thus, we don't include "noreferrer".
            */}
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a className="main-menu-item main-menu-item-h2" rel="noopener" href="https://github.com/ashuping" target="_blank">
                Github
            </a>

            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a className="main-menu-item main-menu-item-h2" rel="noopener" href="https://linkedin.com/in/aishuping" target="_blank">
                Linkedin
            </a>
        </div>
    </div>

    if(menu_open){
        return <div className="main-menu">
        </div>
    }
}