import { useState, useEffect } from 'react';

const useMousePosition = () => {
	const [position, setPosition] = useState({
		clientX: 0,
		clientY: 0,
	});

	const updatePosition = (event) => {
		const { pageX, pageY, clientX, clientY } = event;
		// console.log(clientX, clientY);
		setPosition({
			clientX: clientX - window.innerWidth / 2,
			clientY: clientY,
		});
	};

	useEffect(() => {
		document.addEventListener('mousemove', updatePosition, false);
		document.addEventListener('mouseenter', updatePosition, false);

		return () => {
			document.removeEventListener('mousemove', updatePosition);
			document.removeEventListener('mouseenter', updatePosition);
		};
	}, []);

	return position;
};

export default useMousePosition;
