import React, { Component } from 'react';
import ColumnHeader from './ColumnHeader.js';
import ColumnBody from './ColumnBody.js';
import './column.css';

const formatPropAsKey = (key, value) => {
	return {[key]: value}
}

class PositionColumn extends Component<{}> {
	constructor(props) {
		super(props)

		this.state = {
			refresh: false,
			nameFilter: '',
			showUnavailable: false,
			filteredPlayers: this.props.players
		}
	}

	static getDerivedStateFromProps(props, state) {
		if (props.refresh !== state.refresh) {
			return {
				refresh: props.refresh,
				filteredPlayers: props.players
			}
		}
		return null;
	}

	filterDb = () => {
		const regexp = new RegExp(this.state.nameFilter, 'gi');
		const filtered = this.props.players.filter((player, i) => {
			return player.name.match(regexp);
		});
		this.setState({filteredPlayers: filtered});
	}

	filterInput = (e) => {
		this.setState(formatPropAsKey('nameFilter', e.target.value), () => {
			this.filterDb();
		});
	}

	render() {
		const showHide = this.state.showUnavailable ? 'Hide' : 'Show';
		return(
			<div className="position-column-outer">
				<ColumnHeader filter={this.filterInput} position={this.props.position} />
				<ColumnBody toggle={this.props.toggle} players={this.state.filteredPlayers} showUnavailable={this.state.showUnavailable} />
				<div
					className="filter-unavailable-button"
					onClick={() => this.setState({showUnavailable: !this.state.showUnavailable})}
				>
					<div className="filter-unavailable-inner">
						{showHide} Taken
					</div>
				</div>
			</div>
		)
	}
}

export default PositionColumn;