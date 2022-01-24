import style from './skills.module.scss';

import useMousePosition from '../../useMousePosition/useMousePosition';

import { useSpring, animated } from 'react-spring';

import html from './logos/html.png';
import css from './logos/css.png';
import javascript from './logos/javascript.png';
import node from './logos/node.png';
import sql from './logos/sql.png';
import mongo from './logos/mongo.png';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans2 = (x, y) =>
	`translate3d(0px,${y / 10}px,0) skew(-12deg) rotate(-12deg)`;
const trans3 = (x, y) =>
	`translate3d(${x / 50 - 250}px,${y / 50 - 100}px,0) rotate(-15deg)`;
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const Skills = (props) => {
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
					Always <br /> Learning <br /> Fresh <br /> Tech
				</animated.h1>

				<animated.h1
					style={{ transform: config.xy.to(trans4) }}
					className={style.title}
				>
					My skills
				</animated.h1>

				<div className={style.gridBox}>
					<div className={style.cell}>
						<img className={style.skillLogo} src={html} alt="html" />
						<p>HTML</p>
					</div>
					<div className={style.cell}>
						<img className={style.skillLogo} src={css} alt="css" />
						<p>CSS</p>
					</div>
					<div className={style.cell}>
						<img
							className={style.skillLogo}
							src={javascript}
							alt="javascript"
						/>
						<p>JavaScript</p>
					</div>
					<div className={style.cell}>
						<img className={style.skillLogo} src={node} alt="node" />
						<p>Node.js</p>
					</div>
					<div className={style.cell}>
					<img className={style.skillLogo} src={sql} alt="sql" />
						<p>Sql</p>
					</div>
					<div className={style.cell}>
					<img className={style.skillLogo} src={mongo} alt="mongo" />
						<p>MongoDB</p>
					</div>
					<div className={style.cell}>SaSS</div>
					<div className={style.cell}>React</div>
					<div className={style.cell}>Express</div>
					<div className={style.cell}>Python</div>
					<div className={style.cell}>Java</div>
					<div className={style.cell}>Git</div>
					<div className={style.cell}>WordPress</div>
					<div className={style.cell}>Docker</div>
					<div className={style.cell}>Electron</div>
				</div>
			</main>
		</div>
	);
};

export default Skills;
