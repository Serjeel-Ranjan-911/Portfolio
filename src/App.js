import './App.css';
import './Typography.css';

import ModelLoader from './modelLoader/modelLoader';
import Phone from './Phone/phone';

import Dog from './dog/dog';
import { isMobile, isTablet } from 'react-device-detect';
import { useEffect, useState } from 'react';

function App() {
	const [opacity, setOpacity] = useState(0);
	const [spawnDog, setSpawnDog] = useState(false);
	const [phoneMode, setPhoneMode] = useState(false);
	const [dayTime, setDayTime] = useState(-1);

	const loadingOver = () => {
		let doc = document.getElementById('loader');
		if (doc) {
			doc.style.opacity = 0;
			setTimeout(() => {
				try {
					setOpacity(1);
					setSpawnDog(true);
					doc.parentNode.removeChild(doc);
				} catch (error) {}
			}, 4000);
		}
	};

	useEffect(() => {
		const hour = new Date().getHours();
		if (hour > 5 && hour < 12) {
			setDayTime(0);
			console.log('Good Morning');
		} else if (hour >= 12 && hour < 16) {
			setDayTime(1);
			console.log('Good Afternoon');
		} else if (hour >= 16 && hour < 20) {
			setDayTime(2);
			console.log('Good Evening');
		} else {
			setDayTime(3);
			console.log('Night');
		}

		setTimeout(() => {
			console.clear();
			const style = `
			font-size: 3rem;
			text-align: center;
			height:20vh;
			padding: 3rem;
			line-height: 20vh;
			color: #fcedd8;
			background: #d52e3f;
			font-family: 'Niconne', cursive;
			font-weight: 700;
			text-shadow: 3px 3px 0px #eb452b,
						6px 6px 0px #efa032,
						9px 9px 0px #46b59b,
						12px 12px 0px #017e7f,
						15px 15px 0px #052939,
						18px 18px 0px #c11a2b,
						21px 21px 0px #c11a2b,
						24px 24px 0px #c11a2b,
						27px 27px 0px #c11a2b;`;

			console.log('%c Hello Fellow Tech Developer', style);
			console.log(
				'%c If you like my work we can connect at LinkedIn -> https://www.linkedin.com/in/serjeel-ranjan-0331b31ab/',
				`
				font-size: 16px;
				color: #ebd834;
				`
			);
		}, 10000);
	}, []);

	const enterPhoneMode = () => {
		var el = document.body;
		var requestMethod =
			el.requestFullScreen ||
			el.webkitRequestFullScreen ||
			el.mozRequestFullScreen ||
			el.msRequestFullScreen;
		requestMethod.call(el);
		setPhoneMode(true);
	};

	return (
		<>
			<div
				style={{
					opacity: opacity,
					transition: 'opacity 1s',
					overflow: 'hidden',
				}}
				className="App"
			>
				{isMobile || isTablet ? (
					<>
						{function (){setTimeout(loadingOver,3000)}()}
						{!phoneMode ? (
							<div className="phoneEnterWindow">
								<button className="EnterButton" onClick={enterPhoneMode}>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									ENTER
								</button>
							</div>
						) : (
							<div className="phoneContainer">
								<Phone />
							</div>
						)}
					</>
				) : (
					<>
						{spawnDog ? <Dog dayTime={dayTime} /> : null}

						<ModelLoader
							mobile={isMobile}
							loadingOver={loadingOver}
							dayTime={dayTime}
						/>
					</>
				)}
			</div>
		</>
	);
}

export default App;
