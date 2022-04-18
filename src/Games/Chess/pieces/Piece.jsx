import React from 'react';

const Piece = ({piece, position, onDragStart}) => {
	const PieceType = piece;
	return (
		<PieceType position={position} onDragStart={onDragStart}/>
	);
};

export default Piece;