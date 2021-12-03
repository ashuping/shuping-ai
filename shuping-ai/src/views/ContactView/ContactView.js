/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { Phone, Mail, GitHub, Gitlab, Linkedin } from 'react-feather';

import '../View.css';
import './ContactView.css';

function ContactView(){
    return <div className="view">
        <div className="view-col-spacer" />
        <div className="view-main-content">
            <h1>Contact Me</h1>
            <div className="contact-list">
                <div className="contact-method">
                    <div className="cm-icon"><Phone /></div>
                    <div className="cm-text">Telephone</div>
                    <div className="cm-value">(352) 559-9699</div>
                </div>
                <div className="contact-method">
                    <div className="cm-icon"><Mail /></div>
                    <div className="cm-text">Personal E-Mail</div>
                    <div className="cm-value">alexis@shuping.ai</div>
                </div>
                <div className="contact-method">
                    <div className="cm-icon"><Mail /></div>
                    <div className="cm-text">NU E-Mail</div>
                    <div className="cm-value">alexis.shuping@northwestern.edu</div>
                </div>
                <div className="contact-method">
                    <div className="cm-icon"><GitHub /></div>
                    <div className="cm-text">Github</div>
                    <div className="cm-value"><a href="https://github.com/ashuping" target="_blank" rel="noopener">ashuping</a></div>
                </div>
                <div className="contact-method">
                    <div className="cm-icon"><Gitlab /></div>
                    <div className="cm-text">Gitlab</div>
                    <div className="cm-value"><a href="https://gitlab.com/aishuping" target="_blank" rel="noopener">aishuping</a></div>
                </div>
                <div className="contact-method">
                    <div className="cm-icon"><Linkedin /></div>
                    <div className="cm-text">Linkedin</div>
                    <div className="cm-value"><a href=" https://linkedin.com/in/aishuping" target="_blank" rel="noopener">aishuping</a></div>
                </div>
            </div>
        </div>
        <div className="view-col-spacer" />
    </div>
}

export default ContactView;