import { useState,useEffect } from "react";
import style from './stickynote.module.scss';

import useMousePosition from '../../useMousePosition/useMousePosition';
import { FaQuoteLeft } from "react-icons/fa";
import { useSpring, animated } from 'react-spring';
import Atropos from 'atropos/react/atropos-react.esm';

import quotes from "./quotes/quotes.json";

import img1 from './img/1.svg';
import img2 from './img/2.svg';
import img3 from './img/3.svg';
import img4 from './img/4.svg';
import img5 from './img/5.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const trans2 = (x, y) =>
	`translate3d(0px,${y / 10}px,0) skew(-12deg) rotate(-12deg)`;
const trans3 = (x, y) =>
	`translate3d(${x / 50 - 250}px,${y / 50 - 100}px,0) rotate(-15deg)`;
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

const Stickynote = (props) => {
    const [apiQuote,setApiQuote] = useState({quote:"Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart",author:"Mahatma Gandhi"});
	const { clientX, clientY } = useMousePosition();
	const [config, setConfig] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}));

    useEffect(()=>{
        const quote = quotes[Math.floor(Math.random()*quotes.length)];
        setApiQuote({
            quote:quote.text,
            author:quote.author
        });
    },[])

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
					Sticky Note
				</animated.h1>

				<animated.h1
					style={{ transform: config.xy.to(trans4) }}
					className={style.title}
				>
					Today's motivation
				</animated.h1>

				<Atropos className={style.atroposWindow}>
					<img data-atropos-offset="0" src={img1} alt="img1" className={style.atroimg} />
					<img data-atropos-offset="-3" src={img2} alt="img2" className={style.atroimg} />
					<img data-atropos-offset="0" src={img3} alt="img3" className={style.atroimg} />
					<img data-atropos-offset="3" src={img4} alt="img4" className={style.atroimg} />
					<img data-atropos-offset="6" src={img5} alt="img5" className={style.atroimg} />
                    
                    <p data-atropos-offset="5" className={style.quote}>{apiQuote.quote}
                        <FaQuoteLeft className={style.quoteIcon}/>
                        <p data-atropos-offset="5" className={style.quoteName}>-{apiQuote.author}</p>    
                    </p>    
                </Atropos>
			</main>
		</div>
	);
};

export default Stickynote;
