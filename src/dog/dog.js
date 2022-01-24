import { useRef, useEffect, useState } from 'react';
import style from './dog.module.scss';

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const messages = [
	'I welcome you to Serjeel\'s Den',
	['Glad to see you work hard early in the morning','Wishing you a splendid afternoon','Wising for a Great Evening','Hope you are having fun working in night'],
	'This is an interactive portfolio </br>and a cool place to explore',
	'Click on the items on the shelf which </br>interests you  and know more',
	"Enjoy your stay here"
];

const Dog = (props) => {
	const dog = useRef(null);
	const messageBox = useRef(null);

	const entry = () => {
		dog.current.style.transform = 'scale(-.7, .7) translate(30%,24%)';
	};

	const exit = () => {
		dog.current.style.transform = 'scale(0) translate(-80%,24%)';
		setTimeout(()=>dog.current.style.display="none",1000);
	};

	const changeMessage = async (index) => {
		messageBox.current.style.transform = 'scale(0)';
		await sleep(500);
		if(index === 1)
		messageBox.current.innerHTML = messages[index][props.dayTime];
		else
		messageBox.current.innerHTML = messages[index];
		await sleep(500);
		messageBox.current.style.transform = 'scale(-1,1)';
	};

	useEffect(() => {
		(async () => {
			await sleep(1000);
			entry();
			await sleep(7000);
			changeMessage(0);
			await sleep(7000);
			changeMessage(1);
			await sleep(7000);
			changeMessage(2);
			await sleep(7000);
			changeMessage(3);
			await sleep(7000);
			changeMessage(4);
			await sleep(7000);
			exit();
		})();
	}, []);

	return (
		<div ref={dog} className={style.container}>
			<div className={style.box}>
				<div className={style.sign} />
			</div>
			<div className={style.dog}>
				<div className={style['dog-group']}>
					<div className={style['tongue-open']} />
					<div className={style['body-group']}>
						<div className={style['dog-box']}>
							<div className={style['dog-box-sign']}>
								<div className={style['content']} />
							</div>
							<div className={style['bottom-shadow']} />
							<div className={style['top-left-shadow']} />
						</div>
						<div className={style['tail-group']}>
							<div className={style['tail']}>
								<div className={style['tail']}>
									<div className={style['tail']}>
										<div className={style['tail']}>
											<div className={style['tail']}>
												<div className={style['tail']}>
													<div
														className={[style['tail'], style['last']].join(' ')}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={style['dog-shape']} />
					</div>
					<div className={style['head-group']}>
						<div className={style['ear']}>
							<div className={style['ear-container']}>
								<div className={style['ear-left']} />
							</div>
						</div>
						<div className={style['head']} />
						<div className={[style['ear'], style['right']].join(' ')}>
							<div className={style['ear-container']}>
								<div className={style['ear-right']} />
							</div>
						</div>
						<div className={style['face']}>
							<div ref={messageBox} className={style['messageBox']}>
								Hey there! I'm am Pogo <br /> glad to see you here
							</div>
							<div className={style['muzzle']}>
								<div className={style['nose']} />
								<div className={style['mouth-close']} />
								<div className={style['mouth-open']}>
									<div className={style['teeth']} />
								</div>
								<div className={style['mouth-barks']} />
							</div>
							<div className={style['eyes']}>
								<div className={style['eye-left']}>
									<div className={style['pupil']} />
								</div>
								<div className={style['eye-right']}>
									<div className={style['pupil']} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style['plant-group']}>
				<div className={style['pot']} />
				<div className={style['plant']}>
					<div className={style['stem']}>
						<div className={style['leaf']} />
						<div className={style['leaf']} />
						<div className={style['leaf']} />
						<div className={style['leaf']} />
						<div className={style['leaf']} />
					</div>
				</div>
			</div>
			<div className={style['shapes']}>
				<div className={style['red-shape']} />
				<div className={style['blue-shape']} />
				<div className={style['yellow-shape']} />
			</div>
		</div>
	);
};

export default Dog;
