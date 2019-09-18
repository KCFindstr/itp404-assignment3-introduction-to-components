import React from 'react';
import './App.css';
import Loading from './Loading';
import { getRedditData } from './RedditApi';
import SubRedditList from './SubRedditList';
import SearchForm from './SearchForm';
import SearchHistory from './SearchHistory';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: [],
      history: [],
      count: 0
    };
  }
  doSearch = async (term, incognito) => {
    if (!incognito) {
      this.state.history.push(term);
    }
    this.setState({ loading: true });
    try {
      let data = await getRedditData(term);
      this.setState({ loading: false, data });
    } catch (e) {
      this.setState({ loading: false, data: [] });
    }
  }
  increaseReadCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="App">
        <SearchForm onSearch={this.doSearch}/>
        <SearchHistory onSearch={this.doSearch} history={this.state.history}/>
        <div>Total read count: {this.state.count}</div>
        { this.state.loading ? <Loading/> :
          <SubRedditList
            data={this.state.data}
            onClick={this.increaseReadCount}
          /> }
      </div>
    );
  }
}

export default App;
