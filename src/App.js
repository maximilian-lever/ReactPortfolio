import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import sectionBg1 from './img/section-bg1.jpg';
import bwSquares from './img/B&W squares.jpg';
import swirls from './img/swirls.jpg';
import sectionBg2 from './img/section-bg2.jpg';
import pwMazeBlack from './img/pw_maze_black_2X.png';
import Max from './img/Max.jpg';
import ShutTheBox from './img/ShutTheBox.png';
import Vaidas from './img/vaidas.png';
import Forex from './img/Forex.png';
import HTML from './img/HTML5-Logo.png';
import CSS from './img/CSS3-logo.png';
import JS from './img/JS-logo.png';
import ReactLogo from './img/React.js_logo-512.png'
import LinkedinLogo from './img/Linkedin-logo-1-550x550-300x300.png';
import GmailLogo from './img/gmail-logo.jpg';
import TelephoneLogo from './img/red-phone-icon-small-png-0.png';
import './bootstrap.min.css';
import './App.css';

// Forex
import './Projects/resources/CSS/ForexAPI v1.01.css'

class App extends Component {
  render() {
    const 
    homeBackground = {
        background: 'url(' + pwMazeBlack + ') left top repeat',
    },
    experienceBackground = {
        background: 'url(' + sectionBg1 + ')',
    },
    skillsBackground = {
        background: 'linear-gradient(to bottom, rgb(255, 255, 255, 0.8), rgb(255, 255, 255, 0.8)),url(' + bwSquares + ')',
    },
    educationBackground = {
        background: 'linear-gradient(to bottom, rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.6)),url(' + swirls + ')',
    },
    letsTalk = {
        background: 'url(' + sectionBg2 + ')',
    },
    contactBackground = {
        background: 'url(' + pwMazeBlack + ')',
    };
    return (
      <Router>
      <div className="App">
        {/* Menu-start */}
        <ul class="menu">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li class="slider"></li>
        </ul>
        {/* Menu-end */}
        {/* Home-section-start */}
        <section class="fullscreen" id="Home" style={homeBackground}>
            <h1 class="text-center font-weight-normal">Maximilian James Lever</h1>
            <h2 class="text-center text-uppercase font-weight-bold animated fadeInUp delay-1s">Front-end Developer</h2>
        </section>
        {/* Home-section-end */}
        {/* About-section-start */}
        <section class="fullscreen" id="About">
                <h2 class="text-center text-uppercase font-weight-bold">About</h2>
                <p class="text-center">
                    Enthusiastic, bright individual with 3 years’ experience in the Gambling and Finance industry 
                    with a keen sense of commitment to high standards and a passion for technology.
                    <br />
                    Focused on working as a Front-end developer to build on existing skills and experience to 
                    further a career in IT.
                </p>
                <img src={Max} alt="Maximilian Lever" />{/* Photo of Max */}
        </section>
        {/* About-section-end */}
        {/* Projects-section-start */}
        <section class="fullscreen" id="Projects">
            <h2 class="text-center text-uppercase font-weight-bold">Projects</h2>
            <div class="text-center row">
                <div class="col">
                    <div class="container">
                        <h3>FOREIGN EXCHANGE</h3>
                        <img id="forexImage" alt="Foreign Exchange" src={Forex} />
                        {/* Trigger the modal with a button */}
                        <span class="btn btn-info btn-lg"><Link to={"/forex"}>Open</Link></span>
                    </div>
                </div>
                <div class="col">
                    <div class="container">
                        <h3>SHUT THE BOX</h3>
                        <img id="SBImage" alt="SHUT THE BOX" src={ShutTheBox} />
                        {/* Trigger the modal with a button */}
                        <span class="btn btn-info btn-lg"><Link to={"/shutTheBox"}>Open</Link></span>
                    </div>
                </div>
                <div class="col">
                    <div class="container">
                        <h3>VAIDAS BICYCLES</h3>
                        <img id="vaidasLogo" alt="VAIDAS BICYCLES" src={Vaidas} />
                        {/* Trigger the modal with a button */}
                        <span class="btn btn-info btn-lg"><Link to={"/vaidas"}>Open</Link></span>
                    </div>
                </div>
            </div>
        </section>
        {/* Projects-section-end */}
        {/* Experience-section-start */}
        <section class="text-center" id="Experience" style={experienceBackground}>
                <h2 class="text-center text-uppercase font-weight-bold">Experience</h2>
                <div class="job">
                    <p class="company bold">EventsTag</p>{/* class="company" CSS class */}
                    <p>August 2018 - September 2018</p>
                    <p>Elephant & Castle</p>
                    <p>Development Intern</p>
                    <p>●Used CSS and JSON to customise products</p>
                    <p>●Wrote QA tests using QA testing tools such as Ghost Inspector.</p>
                </div>
                <div class="job">
                    <p class="company bold">Starlizard</p>{/* class="company" CSS class */}
                    <p>March 2015 - February 2018</p>
                    <p>Camden</p>
                    <p>IT Support Analyst</p>
                    <p>●Provided basic documentation for procedures and manuals. </p>
                    <p>●Provided support to internal users and external users located across the globe. </p>
                </div>
                <div class="job">
                    <p class="company bold">Dixons Retail</p>{/* class="company" CSS class */}
                    <p>October 2013 - January 2015</p>
                    <p>Stevenage</p>
                    <p>Sales colleague/Knowhow colleague</p>
                    <p>●Troubleshot and resolved application and network 30 - 70 issues.</p>
                    <p>●Setup and supported PC, Laptop, Macintosh and mobile devices. </p>
                </div>
                <div class="job">
                    <p class="company bold">Man Electrics</p>{/* class="company" CSS class */}
                    <p>July 2010 - October 2013</p>
                    <p>Ware</p>
                    <p>Electrical Trainee</p>
                    <p>●Experience with control circuitry.</p>
                    <p>●Troubleshot issues and ensured the issue wouldnt reoccure.</p>
                </div>
        </section>
        {/* Experience-section-end */}
        {/* Skills-section-start */}
        <section class="fullscreen" id="Skills" style={skillsBackground}>
            <h2 class="text-center text-uppercase font-weight-bold">Skills</h2>
            <div class="row">
                <div class="col">
                    <img src={HTML} id="HTML" alt="HTML5 Logo"></img>
                    <img src={CSS} id="CSS" alt="CSS3 Logo"></img>
                    <img src={JS} id="JS" alt="Javascrip Logo"></img>
                </div>
            </div>
            <p class="text-center">
                ● Experienced in <b>HTML5</b>, <b>CSS3</b>, <b>Javascript</b> and <b>ReactJS</b>.<br />
                ● Experience of ticket logging systems to log all support calls placed.<br />
                ● Supplied basic documentation for procedures and manuals.<br />
                ● Met strict targets set by superiors.<br />
                ● Worked under pressure and will prioritize work to making sure tasks are completed delivering results.<br />
                ● Communicated with clients to identify their requirements.
            </p>
        </section>
        {/* Skills-section-end */}
        {/* Education-section-start */}
        <section class="fullscreen" id="Education" style={educationBackground}>
                <h2 class="text-center text-uppercase font-weight-bold">Education</h2>
                <p class="text-center school wow fadeInUp delay-1s">Just IT Training LTD, London</p>{/* class="school" CSS class */}
                <p class="text-center">May 2018 - Present</p>
                <p class="text-center">● MTA Software Development Fundamentals (Expected 2018)</p>
                <p class="text-center">● CIW Advanced HTML5 & CSS3 Specialist 1D0-620 (Expected 2018)</p>
                <p class="text-center">● MCSD Programming in HTML5 with JavaScript and CSS3 (Expected 2018)</p>
                <p class="text-center">● MCSD Developing ASP.NET MVC Web Application (Expected 2018)</p>
                <p class="text-center school">Just IT Training LTD, London</p>{/* class="school" CSS class */}
                <p class="text-center">January 2015 - March 2015</p>
                <p class="text-center">● CompTIA A+ Essentials</p>
                <p class="text-center">● CompTIA A+ IT Technician</p>
                <p class="text-center school">Hertford Regional College, Turnford - City &#38; Guilds</p>{/* class="school" CSS class */}
                <p class="text-center">September 2013 - February 2014</p>
                <p class="text-center">● Level 3 Understanding the fundamental principles and requirements of environmental technology systems (Pass)</p>
                <p class="text-center school">Oaklands College, St Albans - City &#38; Guilds</p>{/* class="school" CSS class */}
                <p class="text-center">September 2010 - March 2013</p>
                <p class="text-center">● Installation (Buildings and Structures) Online (Pass)</p>
                <p class="text-center">● Installation (Buildings and Structures) Practical Assignment (Pass)</p>
                <p class="text-center">● Principles of Electro technology (Stage 1) Online (Pass)</p>
        </section>
        {/* Education-section-end */}
        {/* LetsTalk-section-start */}
        <section id="LetsTalk" style={letsTalk}>
            <h2 class="text-center text-uppercase font-weight-bold wow fadeInLeft">Let’s Talk.</h2>
        </section>
        {/* LetsTalk-section-end */}
        {/* Contact-section-start */}
        <section class="text-center" id="Contact" style={contactBackground}>
            {/* col-lg-6 col-sm-7 wow fadeInLeft */}
            {/* src="js/wow.js" */}
            <h3 class="text-uppercase font-weight-normal" id="linkedin">linkedin:</h3>{/* id="linkedin" CSS id */}
            <a href="https://uk.linkedin.com/in/maximilian-lever-09214097">
                <img alt="LinkedIn Logo" id="linkedinLogo" src={LinkedinLogo}></img>
            </a>{/* href link to Linkedin */}
            <a href="https://uk.linkedin.com/in/maximilian-lever-09214097">
                MAXIMILIAN LEVER
            </a>{/* href link to Linkedin */}
            <h3 class="text-uppercase font-weight-normal" id="email">email:</h3>{/* id="email" CSS id */}
            <img alt="Gmail Logo" id="emailLogo" src={GmailLogo}></img>
            <span id="emailAddress">
                maximilian.lever@gmail.com
            </span>
            <h3 class="text-uppercase font-weight-normal" id="telephone">Telephone:</h3>
            <img alt="Telephone Logo" id="telephoneLogo" src={TelephoneLogo}></img>
            <span id="telephoneN0">
                +44 7588 107 261
            </span>
            <span id="madeWithReact">Made with React.</span>
            <img src={ReactLogo} id='reactContactLogo' alt='React Logo'></img>
        </section>
        {/* Contact-section-end */}
        <Route path="/forex" component={forex}/>
        <Route path="/shutTheBox" component={shutTheBox}/>
        <Route path="/vaidas" component={vaidas}/>
      </div>
      </Router>
    );

    function forex(){
        return (
            <div>
            <header class="whiteCLR">
                <div id="accountFunds">
                    Funds:<div id="money"></div>
                </div>
            </header>
            </div>
        );
    }

    function shutTheBox(){
        return (
            <div></div>
        );
    }

    function vaidas(){
        return (
            <div></div>
        );
    }
  }
}

export default App;
