import style from './contact.module.scss';

import useMousePosition from '../../useMousePosition/useMousePosition';

import { useSpring, animated } from 'react-spring';

import Linkedin from './img/linkedin.png';
import Email from './img/gmail.png';
import Twitter from './img/twitter.png';
import Youtube from './img/youtube.png';
import Github from './img/github.png';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans2 = (x, y) =>
	`translate3d(0px,${y / 10}px,0) skew(-12deg) rotate(-12deg)`;
const trans3 = (x, y) =>
	`translate3d(${x / 50 - 250}px,${y / 50 - 100}px,0) rotate(-15deg)`;
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const Contact = (props) => {
	const { clientX, clientY } = useMousePosition();
	const [config, setConfig] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}));

	return (
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
					className={style.hiddenText}
				>
					Social Accounts
				</animated.h1>

				<animated.h1
					style={{ transform: config.xy.to(trans4) }}
					className={style.title}
				>
					Contact Me
				</animated.h1>

				{/* for animated phone */}
				<div className={style.phone}>
					<figure className={style['front-side']}>
						<div className={style.screen}>
							<div className={style.addDrawer}>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/serjeel-ranjan-0331b31ab"
									className={style.appIcon}
									rel="noreferrer"
								>
									<img src={Linkedin} alt="linkedin" />
									<p>LinkedIn</p>
								</a>

								<a
									target="_blank"
									href="https://mail.google.com/mail/?view=cm&fs=1&to=serjeelranjan@gmail.com&su=SUBJECT&body=BODY&bcc=serjeelranjan@gmail"
									className={style.appIcon}
									rel="noreferrer"
								>
									<img src={Email} alt="Email" />
									<p>Email</p>
								</a>

								<a
									target="_blank"
									href="https://twitter.com/r_serjeel"
									className={style.appIcon}
									rel="noreferrer"
								>
									<img src={Twitter} alt="twitter" />
									<p>Twitter</p>
								</a>

								<a
									target="_blank"
									href="https://www.youtube.com/channel/UCMFo5Zg2RUpji3tbKmLcuZQ"
									className={style.appIcon}
									rel="noreferrer"
								>
									<img src={Youtube} alt="youtube" />
									<p>YouTube</p>
								</a>

								<a
									target="_blank"
									href="https://github.com/Serjeel-Ranjan-911"
									className={style.appIcon}
									rel="noreferrer"
								>
									<img src={Github} alt="github" />
									<p>Github</p>
								</a>
							</div>
						</div>
						<div className={style.camera}></div>
					</figure>
					<figure></figure>
					<figure></figure>
					<figure></figure>
					<figure></figure>
					<figure></figure>
				</div>
			</main>
		</div>
	);
};

export default Contact;
