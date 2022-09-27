import style from './DoggoMenu.module.scss';
import { IoMdHelpCircle } from 'react-icons/io';
import { useState } from 'react';
import Dog from '../../dog/dog';

const QuickHoverMenu = (props) => {
	const [spawnDog, setSpawnDog] = useState(false);

	return (
		<>
			<div className={style.hoverbutton}>
				<span className={style.icon}>
					<IoMdHelpCircle />
				</span>
				<div
					onClick={() => {
						setSpawnDog(true);
					}}
					className={`${style.button} ${style.button1}`}
				>
					Guide me
				</div>
			</div>
			{spawnDog ? <Dog dayTime={props.dayTime} removeDog={()=>setSpawnDog(false)} /> : null}
		</>
	);
};

export default QuickHoverMenu;
