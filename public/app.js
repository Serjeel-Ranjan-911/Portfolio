import anime from './animejs/lib/anime.es.js';

var cnt = 4;
const shapes = [
	'triangle',
	'square',
	'pentagon',
	'hexagon',
	'heptagon',
	'octagon',
];

const divide = (e) => {
	// console.log(e.target.id);

	const coordinates = mapToPercentage(e.clientX - 20, e.clientY - 20);

	destroy(e.target.id);

	const idx = shapes.indexOf(e.target.classList[1]) - 1;

	if (idx >= 0)
		spawn(
			coordinates,
			{
				x: e.clientX,
				y: e.clientY,
			},
			idx
		);

	e.stopPropagation();
};

// anime({
// 	targets: document.querySelectorAll('[id^="spawn"]'),
// 	scale: {
// 		value: [0, 1],
// 		duration: 1000,
// 		easing: 'easeOutBounce',
// 	},
// 	duration: 3000,
// 	// delay: anime.stagger(300),
// 	delay: 300
// });

document.getElementById('spawn1').addEventListener('click', divide);
document.getElementById('spawn2').addEventListener('click', divide);
// document.getElementById('spawn3').addEventListener('click', divide);
// document.getElementById('spawn4').addEventListener('click', divide);

const mapToPercentage = (x, y) => {
	return {
		x: (x * 100) / window.innerWidth,
		y: (y * 100) / window.innerHeight,
	};
};

const destroy = (id) => {
	const dom = document.getElementById(id);
	dom.parentNode.removeChild(dom);
};

const spawn = (coordinates, client, idx) => {
	document
		.querySelector('.polygons')
		.insertAdjacentHTML(
			'afterbegin',
			`<div id="spawn${++cnt}" style="top:${coordinates.y}%;left:${
				coordinates.x
			}%" class="polygon ${shapes[idx]}"></div>`
		);

	document.getElementById(`spawn${cnt}`).addEventListener('click', divide);

	document
		.querySelector('.polygons')
		.insertAdjacentHTML(
			'afterbegin',
			`<div id="spawn${++cnt}" style="top:${coordinates.y}%;left:${
				coordinates.x
			}%" class="polygon ${shapes[idx]}"></div>`
		);

	document.getElementById(`spawn${cnt}`).addEventListener('click', divide);

	const translateX = Math.random() * window.innerWidth - client.x;
	const translateY = Math.random() * window.innerHeight - client.y;

	anime({
		targets: document.getElementById(`spawn${cnt}`),
		translateX: translateX,
		translateY: translateY,
		rotate: `${Math.floor(Math.random() * 6 + 1)}turn`,
		scale: {
			value: [0, 1],
			duration: 500,
			easing: 'easeOutBounce',
		},
		easing: 'easeOutExpo',
		delay: 10,
		duration: Math.random() * 10000 + 5000,
	});

	anime({
		targets: document.getElementById(`spawn${cnt - 1}`),
		translateX: -translateX,
		translateY: -translateY,
		rotate: `${Math.floor(Math.random() * 6 + 1)}turn`,
		scale: {
			value: [0, 1],
			duration: 500,
			easing: 'easeOutBounce',
		},
		easing: 'easeOutExpo',
		delay: 10,
		duration: Math.random() * 10000 + 5000,
	});
};

////////////////////////////////////////////////////

var textWrapper = document.querySelector('.textWrapper');
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime
	.timeline({ loop: true })
	.add({
		targets: '.textWrapper .letter',
		translateY: [80, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: 'easeOutExpo',
		duration: 1000,
		delay: (el, i) => 300 + 30 * i,
	})
	.add({
		targets: '.textWrapper .letter',
		translateY: [0, -80],
		opacity: [1, 0],
		easing: 'easeInExpo',
		duration: 700,
		delay: (el, i) => 100 + 30 * i,
	});
