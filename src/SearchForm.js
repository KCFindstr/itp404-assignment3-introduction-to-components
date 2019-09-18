import React from 'react';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}
	handleSearch = async (event) => {
		event.preventDefault();
		this.props.onSearch(this.state.term);
	}
	handleSearchInput = (event) => {
		this.setState({
			term: event.target.value
		});
	}
	render() {
		return <form onSubmit={this.handleSearch}>
			<input type="text" value={this.state.term} onChange={this.handleSearchInput}/>
			<button type="submit">Search</button>
		</form>
	}
}

export default SearchForm;