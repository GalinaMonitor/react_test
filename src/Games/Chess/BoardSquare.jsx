import React from 'react';

const BoardSquare = ({position, color, children, movePiece, cleanBoard}) => {

	function dragOverHandler(e) {
		e.preventDefault();
		if (!children) {e.target.style.backgroundColor = 'yellow';}
		else (e.target.style.backgroundColor = 'red')
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
		e.target.style.backgroundColor = color;
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