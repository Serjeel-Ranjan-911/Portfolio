import React, { useState, useRef, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';

import useMousePosition from '../../useMousePosition/useMousePosition';

import style from './biography.module.scss';

import bioPhoto from '../../static/img/bio.png';
import crown from '../../static/img/crown.png';
import github from '../../static/img/icons/github.png';
import gmail from '../../static/img/icons/gmail.png';
import linkedin from '../../static/img/icons/linkedin.png';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans2 = (x, y) =>
	`translate3d(0px,${y / 10}px,0) skew(-12deg) rotate(-12deg)`;
const trans3 = (x, y) =>
	`translate3d(${x / 50 - 250}px,${y / 50 - 100}px,0) rotate(-15deg)`;
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const Biography = (props) => {
	const { clientX, clientY } = useMousePosition();
	const [config, setConfig] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}));



	return (
		// <div className={props.mobile ? style.wrapperFull : style.wrapperHalf}>
		<div className={style.wrapperFull}>

			
			<main
				className={style.main}
				onMouseMove={({ clientX: x, clientY: y }) =>
					setConfig({ xy: calc(x, y) })
				}
			>
				{props.mobile ? null : (
					<div
						className={style.bubble}
						style={{
							left: clientX,
							top: clientY,
							transform: 'translate(-50%, -50%)',
						}}
					></div>
				)}

				<animated.h1
					style={{ transform: config.xy.to(trans3) }}
					className={style.name}
				>
					Serjeel <br /> Ranjan
				</animated.h1>

				<animated.h2
					style={{ transform: config.xy.to(trans4) }}
					className={style.about}
				>
					About Me
				</animated.h2>
				<animated.p
					style={{ transform: config.xy.to(trans2) }}
					className={style.bio}
				>
					Hi, I'm{' '}
					<span
						style={{
							fontFamily: 'Sacramento',
							color: '#4b0b67',
							fontSize: '2.5rem',
							fontWeight: 'bold',
							letterSpacing: '0rem',
						}}
					>
						Serjeel Ranjan
					</span>
					<br />a Creative Web Developer
					<br /> I like to maintain Equilibrium between
					<br /> Dynamic{' '}
					<span
						style={{
							fontFamily: 'Kaushan',
							color: '#4b0b67',
							fontSize: '2.5rem',
							fontWeight: 'bold',
							letterSpacing: '0rem',
						}}
					>
						CODE
					</span>{' '}
					and Attractive{' '}
					<span
						style={{
							fontFamily: 'Kaushan',
							color: '#4b0b67',
							fontSize: '2.5rem',
							fontWeight: 'bold',
							letterSpacing: '0rem',
						}}
					>
						DESIGN
					</span>
				</animated.p>
				<animated.div
					style={{ transform: config.xy.to(trans1) }}
					className={style.images}
				>
					<img className={style.crown} src={crown} alt="Serjeel Ranjan Crown" />
					<img className={style.bioPhoto} src={bioPhoto} alt="Serjeel Ranjan" />
				</animated.div>

				<div className={style.icons}>
					<div className={style.square} onClick={()=>window.open('https://github.com/Serjeel-Ranjan-911', '_blank')}>
						<img src={github} alt="github" />
					</div>
					<div className={style.square} onClick={()=>window.open("https://mail.google.com/mail/?view=cm&fs=1&to=serjeelranjan@gmail.com&su=SUBJECT&body=BODY&bcc=serjeelranjan@gmail")}>
						<img src={gmail} alt="gmail" />
					</div>
					<div className={style.square} onClick={()=>window.open('https://linkedin.com/in/serjeel-ranjan-0331b31ab', '_blank')}>
						<img src={linkedin} alt="linkedin" />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Biography;
