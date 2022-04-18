import React from 'react';
import {getColorFromPosition} from "./service";

const BoardSquare = ({position, color, children, movePiece, cleanBoard, setColor}) => {

	function dragOverHandler(e) {
		e.preventDefault();
		if (!children && color !== 'green') {setColor(position, 'yellow')}
		else if (children) {setColor(position, 'red')}
		return undefined;
	}

	function dropHandler(e) {
		e.preventDefault();
		movePiece(position);
		cleanBoard();
		return undefined;
	}

	function dragLeaveHandler(e) {
		e.preventDefault();
		if (color === 'yellow' || color === 'red') {
			setColor(position, getColorFromPosition(position));
		}
		return undefined;
	}

	return (
		<div
			style={{
				backgroundColor: color,
				position: 'relative',
				width: '50px',
				height: '50px',
			}}
			onDragOver={(e) => dragOverHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDrop={(e) => dropHandler(e)}
			draggable={false}
		>
			{children}
		</div>
	);
};

export default BoardSquare;