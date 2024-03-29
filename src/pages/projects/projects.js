import style from './projects.module.scss';

import useMousePosition from '../../useMousePosition/useMousePosition';

import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans2 = (x, y) =>
	`translate3d(0px,${y / 10}px,0) skew(-12deg) rotate(-12deg)`;
const trans3 = (x, y) =>
	`translate3d(${x / 50 - 250}px,${y / 50 - 100}px,0) rotate(-15deg)`;
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const Projects = (props) => {
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
					Staying in <br />
					the <br /> hussle
				</animated.h1>

				<animated.h1
					style={{ transform: config.xy.to(trans4) }}
					className={style.title}
				>
					Projects
				</animated.h1>

				<div className={style.contentBox}>

					<h2 className={style.coffeeQuote}>
						Page under construction ;&#41;
					</h2>
				</div>
			</main>
		</div>
	);
};

export default Projects;
