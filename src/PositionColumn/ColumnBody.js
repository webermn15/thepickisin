import React from 'react';
import PlayerTile from './PlayerTile.js';

const ColumnBody = ({toggle, players, showUnavailable}) => {
	//handle emtpy list
	if (players === undefined || players.length < 0) {
		return <div className="body-container" style={{paddingTop: '5px'}}>No available players found</div>
	}
	//map here
	const playerList = showUnavailable ? players.map((player, i) => {
		return <PlayerTile key={i} {...player} toggle={toggle} />
	})
	:
	players.map((player, i) => {
		return player.available ? <PlayerTile key={i} {...player} toggle={toggle}/> : null;
	})
	;

	return(
		<div className="body-container">
			{playerList}
		</div>
	)
}

export default ColumnBody;