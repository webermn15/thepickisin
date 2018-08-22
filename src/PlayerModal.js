import React from 'react';
import './Modal/modal.css';

const PlayerModal = ({name, position, team, available, toggle, pick, undo}) => {
	const selectionText = available ? 'Select Player' : 'Make Available';

	return(
		<div className="player-modal">
			<div className="modal-player-container">
				<div className="player-name">
					{name}
				</div>
				<div className="team-and-position-container">
					{position} on {team}
				</div>
			</div>
			<div className="modal-button-container">
				<div className="modal-button" onClick={() => {available ? pick() : undo()}}><span>{selectionText}</span></div>
				<div className="modal-button" onClick={() => toggle()}><span>Cancel</span></div>
			</div>
		</div>
	)
}

export default PlayerModal;