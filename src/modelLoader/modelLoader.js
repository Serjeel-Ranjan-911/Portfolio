import style from './modelLoader.module.scss';

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import ContentBox from '../ContentBox/ContentBox';
import QuickHoverMenu from './QuickHoverMenu/QuickHoverMenu';

import HoverTag from '../hoverTag/hoverTag';
import NightScene from '../static/scenes/FullSceneMidNightBaked.glb';
import MorningScene from '../static/scenes/FullSceneMorningBaked.glb';

const pages = [
	'Profile',
	'Skills',
	'Career',
	'Projects',
	'ProblemSolving',
	'Mug',
	'Contact',
	'StickyNote',
];
const invisibleObjects = [
	'Skills',
	'Career',
	'Projects',
	'ProblemSolving',
	'Clock',
];

//default to night settings
let tone = 2;
let background = 0x000000;

const ModelLoader = (props) => {
	const raycaster = new THREE.Raycaster();
	const mouse = new THREE.Vector2(); //vector to store mouse position

	//object to store current postion of mouse pointer
	const hoverPosition = {
		x: 0,
		y: 0,
	};

	function onMouseMove(event) {
		mouse.x = (event.clientX / (window.innerWidth / 2)) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		hoverPosition.x = event.clientX;
		hoverPosition.y = event.clientY;
	}

	window.addEventListener('mousemove', onMouseMove, false);

	let canvasMount = useRef(null);
	let mixer = null;
	let [clock, setClock] = useState(new THREE.Clock());

	const [sizes, setSizes] = useState({
		width: window.innerWidth / (props.mobile ? 1 : 2),
		height: window.innerHeight,
	});

	const [aspectRatio, setAspectRatio] = useState(sizes.width / sizes.height);
	const [viewSize, setViewSize] = useState(5);

	const [camera, setCamera] = useState(
		new THREE.OrthographicCamera(
			-viewSize * aspectRatio,
			viewSize * aspectRatio,
			viewSize,
			-viewSize,
			-50,
			50
		)
	);

	const [renderer, setRenderer] = useState(
		new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})
	);

	const [dayTime, setDayTime] = useState(props.dayTime);
	const [currentScene, setCurrentScene] = useState(NightScene);

	const hoverRefernce = useRef(null); //to position the tag
	const hoverNameRef = useRef(null); //to change text inside tag

	const [rightComponent, setRightComponent] = useState('Profile');

	useEffect(() => {
		setDayTime(props.dayTime);
		console.log('dayTime is = ' + dayTime);

		//selecting corrent model
		if (props.dayTime === 0) {
			setCurrentScene(MorningScene);
			background = 0xb5b4ae;
			tone = 1.3;
		} else if (props.dayTime === 3) {
			setCurrentScene(NightScene);
		}
	}, [dayTime, props.dayTime]);

	useEffect(() => {
		//time not decided yet
		if (dayTime === -1) {
			return;
		}
		//scene
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(background);
		scene.fog = new THREE.FogExp2(background, 0.04);
		// scene.fog = new THREE.Fog('#fff', 5, 30);
		const loader = new GLTFLoader();

		//camera

		camera.position.set(5, 3.2, 0);
		scene.add(camera);

		//renderer
		renderer.clear();

		renderer.shadowMap.enabled = false;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.toneMappingExposure = tone;

		// document.body.appendChild(renderer.domElement);
		canvasMount.appendChild(renderer.domElement);

		//oribit controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.target.set(2.5, 2.5, 2.5);
		controls.enableDamping = true;
		controls.dampingFactor = 0.1;
		controls.rotateSpeed = 0.3;
		controls.minAzimuthAngle = 0 + (Math.PI / 180) * 5;
		controls.maxAzimuthAngle = Math.PI / 2 - (Math.PI / 180) * 5;

		controls.minZoom = 0.8;
		controls.maxZoom = 2.2;
		//down
		controls.maxPolarAngle = Math.PI / 2.1;
		// up
		controls.minPolarAngle = Math.PI / 6;
		controls.enablePan = false;
		controls.maxDistance = 30;
		
		//loader
		loader.load(currentScene, (models) => {
			// console.log(models);

			// console.log('model loaded');

			mixer = new THREE.AnimationMixer(models.scene);

			if (mixer) {
				models.animations.forEach((animation) => {
					animation.timeScale = 3;
					mixer.clipAction(animation).reset().play();
				});
				// console.log('animation run here');
			}

			const children = [...models.scene.children];
			for (const child of children) {
				// console.log(child.name);
				scene.add(child);
				if (invisibleObjects.includes(child.name)) child.visible = false;
			}

			//rotate the needle of clock to proper time
			const setClock = () => {
				// scene.getObjectByName('Minute').rotation.z = 0;
				scene
					.getObjectByName('Minute')
					.rotateZ((new Date().getMinutes() * Math.PI) / -30);

				const hour = new Date().getHours() + new Date().getMinutes() / 60;
				// scene.getObjectByName('Hour').rotation.z = 0;
				scene.getObjectByName('Hour').rotateZ((hour * Math.PI) / -6);
			};
			setClock();

			//functions to run once loading is over
			(() => {
				props.loadingOver();

				setTimeout(() => {
					controls.autoRotate = true;
					setTimeout(() => {
						controls.autoRotate = false;
					}, 7000);
				}, 5000);
			})();
		});

		function animate() {
			controls.update();

			raycaster.setFromCamera(mouse, camera);

			var intersects = raycaster.intersectObjects(scene.children);

			if (intersects.length > 0) {
				hoverNameRef.current.innerHTML = intersects[0].object.name;
				//custom style if the object is clickable
				if (
					hoverNameRef.current &&
					pages.includes(hoverNameRef.current.innerHTML)
				) {
					hoverNameRef.current.style.background = '#56670b60';
					hoverNameRef.current.style.color = '#f3f3bc';
					hoverNameRef.current.style.fontSize = '2rem';
				} else {
					hoverNameRef.current.style.background = '';
					hoverNameRef.current.style.color = '#e3bcf3';
					hoverNameRef.current.style.fontSize = '1.5rem';
				}
				hoverRefernce.current.style.left = hoverPosition.x + 'px';
				hoverRefernce.current.style.top = hoverPosition.y + 'px';
			}

			renderer.render(scene, camera);

			var delta = clock.getDelta();
			if (mixer) mixer.update(delta);

			window.requestAnimationFrame(animate);
		}
		animate();
	}, [dayTime]);

	useEffect(() => {
		// console.log('changed' + window.innerHeight);
		//Update camera
		setAspectRatio(sizes.width / sizes.height);
		camera.left = -viewSize * aspectRatio;
		camera.right = viewSize * aspectRatio;
		camera.aspect = aspectRatio;
		camera.updateProjectionMatrix();

		// Update renderer
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	}, [sizes, aspectRatio, camera, renderer, viewSize]);

	useEffect(() => {
		// timeoutId for debounce mechanism
		let timeoutId = null;
		const resizeListener = () => {
			// prevent execution of previous setTimeout
			clearTimeout(timeoutId);
			timeoutId = setTimeout(
				() =>
					setSizes({
						width: window.innerWidth / (props.mobile ? 1 : 2),
						height: window.innerHeight,
					}),
				150
			);
		};
		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, []);

	return (
		<>
			<QuickHoverMenu clicked={(value) => {
					if (pages.includes(value)) {
						setRightComponent(value);
					}
				}}/>
			<ContentBox
				mobile={props.mobile}
				rightComponent={rightComponent}
			></ContentBox>
			<div className={style.halfScreen} ref={(ref) => (canvasMount = ref)} />
			<HoverTag
				innerRef={hoverRefernce}
				hoverNameRef={hoverNameRef}
				width="1rem"
				height="5rem"
				style={{
					left: hoverPosition.x + 'px',
					top: hoverPosition.y + 'px',
				}}
				clicked={() => {
					if (pages.includes(hoverNameRef.current.innerHTML)) {
						// console.log(hoverNameRef.current.innerHTML + ' was clicked');
						setRightComponent(hoverNameRef.current.innerHTML);
					}
				}}
			/>
		</>
	);
};

export default ModelLoader;
