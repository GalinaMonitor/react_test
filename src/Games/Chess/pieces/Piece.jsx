import React from 'react';

const Piece = ({piece, position, onDragStart, color}) => {
	const PieceType = piece;
	return (
		<PieceType position={position} onDragStart={onDragStart} color={color}/>
	);
};

export default Piece;