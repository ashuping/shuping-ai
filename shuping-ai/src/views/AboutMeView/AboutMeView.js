/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import { Menu } from 'react-feather';

import '../View.css';

function AboutMeView(){
    return <div className="view">
        {/* <div className="view-sidebar">
            <div className="view-sidebar-image">
                <img 
                    style={{width: "80%"}}
                    src="/Headshot.jpg"
                    alt="A picture of Alexis"
                />
            </div>
            <div className="view-sidebar-vspace" />
            <div className="view-sidebar-content">
                <h1>Contact Me</h1>
                <table>
                    <tr><th>E-mail</th><td>sites@shuping.ai</td></tr>
                    <tr><th></th><td>alexis.shuping@northwestern.edu</td></tr>
                    <tr><th>Tel</th><td>(352) 559-9699</td></tr>
                </table>
            </div>
        </div> */}
        <div className="view-col-spacer" />
        <div className="view-main-content">
            <h1>About Me</h1>

            <img 
                style={{float: "right", maxWidth: "20%", margin: "2em"}}
                src="/Headshot.jpg"
                alt="A headshot of Alexis, standing in a forested area."
            />

            <p>
                Hello! My name is Alexis Maya-Isabelle Shuping, and my pronouns
                are she/her and they/them. I am a Ph.D. student at Northwestern
                University, studying in the <a
                href="http://kamoamoa.eecs.northwestern.edu/" target="_blank"
                rel="noopener">Ka Moamoa lab</a> under <a
                href="https://josiahhester.com/cv/" target="_blank" rel="noopener">
                Dr. Josiah Hester.</a>
            </p>

            <p>
                The fundamental goal of my research is to use technology to do
                the most good for people, and in particular, for the
                marginalized communities that the STEM fields and the people who
                control them have failed and exploited throughout history. As
                such, I focus my research on applications that have potential
                for a direct positive impact on marginalized communities.
            </p>

            <p>
                My current research areas include:
            </p>

            <ul>
                <li>Intermittent and Batteryless Systems</li>
                <li>Energy Harvesting</li>
                <li>Robust and Long-Lasting Electronics</li>
            </ul>

            <h2>Current Projects</h2>
            <h3>Robust and Self-Powered Riverbed Sensing Platform</h3>
            <p>
                I was born and raised in Florida, a state with some of the most
                beautiful and diverse waterways in the world. I have a deep
                respect for the vibrant and unique wetland ecosystems that are
                under constant threat from anthropogenic pollution and climate
                change.
            </p>
            <p>
                In order to help with the vital task of protecting these
                waterways, I am researching methods for harvesting energy from
                flowing water and using that energy to power a sensor platform.
                This sensor platform would be able to provide vital data to
                environmental scientists and regulators, empowering them to do
                the work they need to do in order to keep our wetland ecosystems
                healthy and clean.
            </p>
            <p>
                Another goal of this project is to ensure the long-term 
                robustness of the sensor platform, even in a harsh environment.
                Unfortunately, it is far too common for electronic devices to be
                designed without any consideration of longevity - or worse
                still, designed specifically with the intention that they should
                fail quickly, thus forcing the consumer to throw the device away
                and purchase a new one. This cycle has led to a growing e-waste
                problem.
            </p>
            <p>
                Contributing to this e-waste problem would run contrary to the
                ethics of this project - as such, the sensor platform will be
                designed to last as long as possible. 
            </p>
        </div>
        <div className="view-col-spacer" />
    </div>
}

export default AboutMeView;