import React from 'react';

const ColumnHeader = ({filter, dbFilter, position}) => {


	return(
		<div className="header-container">
			<div>
				{position}
			</div>
			<input className="header-filter-input" placeholder="Filter Name" onChange={e => {
				filter(e);
			}} />
		</div>
	)
}

export default ColumnHeader;