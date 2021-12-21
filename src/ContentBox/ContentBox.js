import { useEffect, useRef, useState } from 'react';

import style from './ContentBox.module.scss';
import Biography from '../pages/biography/biography';
import Skills from '../pages/skills/skills';
import Career from '../pages/career/career';
import Coffee from '../pages/coffee/coffee';
import Contact from '../pages/contact/contact';
import Stickynote from '../pages/stickynote/stickynote';

const ContentBox = (props) => {
	const overlayRef = useRef(null);
	const [currentSelect, setCurrentSelect] = useState(props.rightComponent);

	const exit = () => {
		overlayRef.current.style.opacity = '1';
		overlayRef.current.style.transform = 'scale(100)';
	};

	const entry = () => {
		overlayRef.current.style.transform = 'scale(1)';
		setTimeout(() => {
			overlayRef.current.style.opacity = '0';
		}, 450);
	};

	useEffect(() => {
		// console.log(props.rightComponent);
		exit();
		setTimeout(() => setCurrentSelect(props.rightComponent), 1000);

		setTimeout(() => {
			entry();
		}, 2000);
	}, [props.rightComponent]);

	return (
		<div className={style.wrapper}>
			<div ref={overlayRef} className={style.overlay}></div>
			{currentSelect === 'Profile' ? <Biography mobile={props.mobile} /> : null}
			{currentSelect === 'Skills' ? <Skills mobile={props.mobile} /> : null}
			{currentSelect === 'Career' ? <Career mobile={props.mobile} /> : null}
			{currentSelect === 'Mug' ? <Coffee mobile={props.mobile} /> : null}
			{currentSelect === 'Contact' ? <Contact /> : null}
			{currentSelect === 'StickyNote' ? <Stickynote />: null}
		</div>
	);
};

export default ContentBox;
