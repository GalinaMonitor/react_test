import React from 'react';
import Board from "../Games/Chess/Board";
import LabelsTop from "../Games/Chess/LabelsTop";
import LabelsLeft from "../Games/Chess/LabelsLeft";

const Games = () => {
	return (
		<>
			<h1>DragNDrop</h1>
			<div
				style={{
					width: '445px',
					height: '445px',
					display: 'flex',
					flexWrap: 'wrap',
				}}
			>
				<LabelsTop/>
				<LabelsLeft/>
				<Board/>
			</div>
		</>
	);
};

export default Games;