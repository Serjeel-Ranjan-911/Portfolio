import { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import cards from './cards.js';
import './phone.css';

const to = (i) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
	`perspective(1500px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`;

const Phone = () => {
	const [gone] = useState(() => new Set());
	const [props, set] = useSprings(cards.length, (i) => ({
		...to(i),
		from: from(i),
		delay: 2000,
	}));
	const bind = useGesture(
		({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
			const trigger = velocity > 0.2;
			const dir = xDir < 0 ? -1 : 1;
			if (!down && trigger) gone.add(index);
			set((i) => {
				if (index !== i) return;
				const isGone = gone.has(index);
				const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
				const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
				const scale = down ? 1.1 : 1;
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
				};
			});
			if (!down && gone.size === cards.length)
				setTimeout(() => gone.clear() || set((i) => to(i)), 600);
		}
	);
	return props.map(({ x, y, rot, scale }, i) => (
		<animated.div
			className="cardContainer"
			key={i}
			style={{
				transform: interpolate(
					[x, y],
					(x, y) => `translate3d(${x}px,${y}px,0)`
				),
			}}
		>
			<animated.div
				className="card"
				{...bind(i)}
				style={{
					transform: interpolate([rot, scale], trans),
				}}
			>
				{cards[i]}
			</animated.div>
		</animated.div>
	));
};

export default Phone;
