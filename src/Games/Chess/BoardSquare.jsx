import React from 'react';

const BoardSquare = ({position, color, children, movePiece, setDragOverColor}) => {

	function dragOverHandler(e) {
		e.preventDefault();
		if (!children) {
			setDragOverColor(position, 'yellow')
		} else if (children) {
			setDragOverColor(position, 'red')
		}
		return undefined;
	}

	function dropHandler(e) {
		e.preventDefault()
		e.stopPropagation()
		movePiece(position);
		return undefined;
	}

	function dragLeaveHandler(e) {
		e.preventDefault();
		e.stopPropagation()
		setDragOverColor(position, null);

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