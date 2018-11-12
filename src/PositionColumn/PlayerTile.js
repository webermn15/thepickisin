import React from 'react';

const PlayerTile = ({toggle, name, position, team, available, id}) => {
	const color = available ? 'black' : 'red';

	return(
		<div 
			className="tile-outer"
			style={{backgroundImage: 'url(http://mnweber.me/tpii/assets/'+ team +'.gif)'}}
			onClick={() => toggle(id, position)}
		>
			<div 
				className="tile-inner"
				style={{borderColor: color, color: color}}
			>
				<div
					className="rank-container"
				>
					<div className="player-rank">
						#{id}
					</div>
				</div>
				<div className="name-container">
					<div>
						{name}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayerTile;