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
				style={{borderColor: color, color: color}}
				className="tile-name"
			>
				{name}
			</div>
		</div>
	)
}

export default PlayerTile;