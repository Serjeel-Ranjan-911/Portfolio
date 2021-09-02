import './cards.css';
import character from './img/halloweenCharacter.jpg';
import react from './img/react.png';
import mongo from './img/mongo.jpg';
import express from './img/express.png';
import node from './img/node.png';
import github from './img/github.png';
import docker from './img/docker.png';
import python from './img/python.png';
import java from './img/java.jpg';
import eqixs from './img/eqixs.jpg';
import linkedin from './img/linkedin.png';
import gmail from './img/gmail.png';

const cards = [
	<div className="cardContentBox">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<h2 className="cardTitleTop">MORE</h2>
		<h2 className="cardTitleBottom">MORE</h2>

		<div className="textBoxTop">
			<h2><div className="boldText" style={{fontSize: "6rem"}}>Wait !!!</div></h2> 
			<br/>
			<br/>
			<h3>This is not the end.</h3>
			<br/>
			<h3>Visit this site on <div className="boldText" style={{fontSize: "3rem"}}>Desktop /PC</div> for a <div className="boldText" style={{fontSize: "3rem"}}>UNIQUE</div> experience!</h3>
		</div>

		<div className="textBox">
			<h3>I look forward to seeing you there</h3>
		</div>
	</div>,
	
	<div className="cardContentBox">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<h2 className="cardTitleTop">CONTACT</h2>
		<h2 className="cardTitleBottom">CONTACT</h2>

		<div className="textBoxTop">
			<h2>We can get in touch here</h2> 
			<br/>

			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "center",margin: "3rem"}} onClick={()=>window.open("https://mail.google.com/mail/?view=cm&fs=1&to=serjeelranjan@gmail.com&su=SUBJECT&body=BODY&bcc=serjeelranjan@gmail")}>
				<img className="skillLogo" src={gmail} alt="gmail" />
				<h2 style={{marginLeft:"1rem"}}>Gmail</h2>
			</div>
			<div style={{display: "flex", justifyContent: "flex-start", alignItems: "center",margin: "3rem"}} onClick={()=>window.open('https://linkedin.com/in/serjeel-ranjan-0331b31ab', '_blank')}>
				<img className="skillLogo" src={linkedin} alt="linkedin" />
				<h2 style={{marginLeft:"1rem"}}>LinkedIn</h2>
			</div>
		</div>
	</div>,
	<div className="cardContentBox">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<h2 className="cardTitleTop">WORK</h2>
		<h2 className="cardTitleBottom">WORK</h2>

		<div className="textBoxTop">
			<h2>I like to contribute to <div className="boldText" style={{fontSize: "3rem"}}>Open Source</div> Projects.</h2> 
			<br/>
			<h2>Check my &#10142; <a target="_blank"  rel="noopener noreferrer" href="https://github.com/Serjeel-Ranjan-911"><img style={{transform: "translate(0,1rem)"}} className="skillLogo" src={github} alt="my gihub" /></a></h2> 
			<br/>
			<h2>Plus I have done some <div className="boldText" style={{fontSize: "3rem"}}>Freelance</div> Projects &#10142;  <a target="_blank"  rel="noopener noreferrer" href="https://eqixs.org/"><img style={{transform: "translate(0,10px)"}} className="skillLogo" src={eqixs} alt="Eqixs" /></a></h2>
		</div>

		<div className="textBox">
			Currently at <a target="_blank"  rel="noopener noreferrer" href="https://proactaiconsulting.com/"  style={{textDecoration: "none"}} ><div className="boldText">ProAct AI</div> </a> <br />
		</div>
	</div>,
	<div className="cardContentBox">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<h2 className="cardTitleTop">SKILLS</h2>
		<h2 className="cardTitleBottom">SKILLS</h2>

		<div className="textBoxTop">
			<h3>Good with Other <div className="boldText" style={{fontSize: "4rem"}}>Tech</div> as well</h3>
		</div>

		<div className="logoGroup">
			<div className="logoText">
				<img src={github} alt="github" className="skillLogo" />
				<p>Git / GitHub</p>
			</div>

			<div className="logoText">
				<img src={docker} alt="docker" className="skillLogo" />
				<p>Docker</p>
			</div>

			<div className="logoText">
				<img src={python} alt="python" className="skillLogo" />
				<p>Python</p>
			</div>

			<div className="logoText">
				<img src={java} alt="java" className="skillLogo" />
				<p>Java</p>
			</div>
		</div>
		

		<div className="textBox">
			- Good knowledge of <div className="boldText">DSA</div> and <div className="boldText">Problem Solving</div> skills. <br />
		</div>
	</div>
	,
	<div className="cardContentBox">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<h2 className="cardTitleTop">SKILLS</h2>
		<h2 className="cardTitleBottom">SKILLS</h2>

		<div className="textBoxTop">
			<h3>I work in <div className="boldText" style={{fontSize: "4rem"}}>MERN</div> Stack</h3>
		</div>

		<div className="logoGroup">
			<div className="logoText">
				<img src={mongo} alt="Mongo" className="skillLogo" />
				<p>MongoDB</p>
			</div>

			<div className="logoText">
				<img src={express} alt="express" className="skillLogo" />
				<p>Express</p>
			</div>

			<div className="logoText">
				<img src={react} alt="react" className="skillLogo" />
				<p>React</p>
			</div>

			<div className="logoText">
				<img src={node} alt="node" className="skillLogo" />
				<p>Node JS</p>
			</div>
		</div>
		

		<div className="textBox">
			- I write good <div className="boldText">Documentation</div>. <br/>
			- Adaptive to new <div className="boldText">Tech</div>. <br/>
		</div>
	</div>,
	<div className="cardContentBox">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<h2 className="cardTitleTop">SERJEEL</h2>
		<h2 className="cardTitleBottom">SERJEEL</h2>

		<div className="imageContainer">
			<img src={character} alt="profile" />
		</div>

		<div className="textBox">
			Hi, I'm <div className="myName">Serjeel Ranjan</div> <br/> A Creative Web Developer <br />I like to maintain
			Equilibrium between Dynamic <div className="boldText">CODE</div>  and Attractive <div className="boldText">DESIGN</div> 
		</div>
	</div>,
];

export default cards;
