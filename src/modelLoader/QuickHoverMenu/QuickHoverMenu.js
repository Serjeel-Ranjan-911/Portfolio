import style from "./QuickHoverMenu.module.scss"
import { IoNavigate } from "react-icons/io5"

const QuickHoverMenu = (props) => {
	return (
		<div className={style.hoverbutton}>
            <span className={style.icon}>
                <IoNavigate />
            </span>
			<div onClick={()=>props.clicked("Profile")} className={`${style.button} ${style.button5}`}>Profile</div>
			<div onClick={()=>props.clicked("Skills")} className={`${style.button} ${style.button4}`}>Skills</div>
			<div onClick={()=>props.clicked("Career")} className={`${style.button} ${style.button3}`}>Career</div>
			<div onClick={()=>props.clicked("Projects")} className={`${style.button} ${style.button2}`}>Projects</div>
			<div onClick={()=>props.clicked("Contact")} className={`${style.button} ${style.button1}`}>Contact</div>
		</div>
	);
};

export default QuickHoverMenu;