import styles from './hoverTag.module.scss';

const HoverTag = (props) => {
	return (
		<div
			ref={props.innerRef}
			className={styles.wrapper}
			style={{
				width: props.width,
				height: props.height,
				transform: 'translate(-50%, -50%)',
			}}
		>
			<h3
				ref={props.hoverNameRef}
				className={styles.hoverBox}
				onClick={props.clicked}
			>
				Serjeel's Den
			</h3>
		</div>
	);
};

export default HoverTag;
