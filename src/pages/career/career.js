import style from './career.module.scss';

import useMousePosition from '../../useMousePosition/useMousePosition';

import { useSpring, animated } from 'react-spring';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans2 = (x, y) =>
	`translate3d(0px,${y / 10}px,0) skew(-12deg) rotate(-12deg)`;
const trans3 = (x, y) =>
	`translate3d(${x / 50 - 250}px,${y / 50 - 100}px,0) rotate(-15deg)`;
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const Career = (props) => {
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
					Rising <br />
					up with <br /> Every <br /> Step
				</animated.h1>

				<animated.h1
					style={{ transform: config.xy.to(trans4) }}
					className={style.title}
				>
					My career timeline
				</animated.h1>

				<VerticalTimeline >


					<VerticalTimelineElement
						date="June 2021 - present"
						contentStyle={{background: 'transparent' ,boxShadow: 'none',"padding":"2rem","color":"#fff","fontFamily":"OpenSansExtraBold","fontSize":"1.5rem","border":"3px solid rgb(255, 255, 255)","boxShadow":"0 1.5rem 2rem rgba(0, 0, 0, 0.575),\n\t\tinset 0 1.5rem 2rem rgba(0, 0, 0, 0.575)","textShadow":"0 2rem 1.5rem rgba(0, 0, 0, 0.575)","userSelect":"none","textAlign":"center"}}
						iconStyle={{"width":"2rem","height":"2rem","marginLeft":"-10px","backgroundColor":"#ff206b","marginTop":"24px"}}
						dateClassName={style.timelineDate}
					>
						<h3 className={style.timelineHeading}>ProActAI</h3>
						<p className={style.timelineText}>Full Stack web developer</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						date="October 2020 - April 2021"
						contentStyle={{background: 'transparent' ,boxShadow: 'none',"padding":"2rem","color":"#fff","fontFamily":"OpenSansExtraBold","fontSize":"1.5rem","border":"3px solid rgb(255, 255, 255)","boxShadow":"0 1.5rem 2rem rgba(0, 0, 0, 0.575),\n\t\tinset 0 1.5rem 2rem rgba(0, 0, 0, 0.575)","textShadow":"0 2rem 1.5rem rgba(0, 0, 0, 0.575)","userSelect":"none","textAlign":"center"}}
						iconStyle={{"width":"2rem","height":"2rem","marginLeft":"-10px","backgroundColor":"#ff206b","marginTop":"24px"}}
						dateClassName={style.timelineDate}
					>
						<h3 className={style.timelineHeading}>Vedanth Industrial Zone</h3>
						<p className={style.timelineText}>WordPress developer, Content Writer, SEO developer</p>
					</VerticalTimelineElement>

				</VerticalTimeline>
			</main>
		</div>
	);
};

export default Career;
