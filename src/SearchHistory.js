import React from 'react';

class SeachHistory extends React.Component {
	handleSearch = async (term) => {
		this.props.onSearch(term, true);
	}
	render() {
		return <div>Search History: 
			{this.props.history.length ? this.props.history.map((term, index) => {
				return <button onClick={this.handleSearch.bind(this, term)} href="#" key={term}>
					{term}
				</button>
			}): 'Empty.'}
		</div>
	}
}

export default SeachHistory;