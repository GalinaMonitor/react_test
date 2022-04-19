import React from 'react';

const Piece = ({piece, position, onDragStart, onDragEnd, color}) => {
	const PieceType = piece;
	return (
		<PieceType position={position} onDragStart={onDragStart} onDragEnd={onDragEnd} color={color}/>
	);
};

export default Piece;