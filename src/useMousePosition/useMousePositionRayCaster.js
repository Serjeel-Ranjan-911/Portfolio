import { useState, useEffect } from 'react';

const useMousePositionRayCaster = () => {
	const [position, setPosition] = useState({
		clientX: 0,
		clientY: 0,
	});

	const updatePosition = (event) => {
		const { pageX, pageY, clientX, clientY } = event;
		// console.log(clientX, clientY);
		setPosition({
			clientX: (clientX / window.innerWidth) * 2 - 1,
			clientY: -(clientY / window.innerHeight) * 2 + 1,
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

export default useMousePositionRayCaster;
