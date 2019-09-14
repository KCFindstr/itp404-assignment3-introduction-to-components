import React from 'react';
import './App.css';
import Loading from './Loading';
import SubReddit from './SubReddit';
import { getRedditData } from './RedditApi';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: []
    };
  }
  async componentDidMount() {
    let data = await getRedditData('lovelive');
    this.setState({ loading: false, data })
  }
  render() {
    return (
      <div className="App">
        { this.state.loading ? <Loading/> : [
        <h1 className="subtitle">SubReddit Subscribers: {this.state.data[0].data.subreddit_subscribers}</h1>, this.state.data.map((reddit, index) => {
          return <SubReddit title={reddit.data.title} url={reddit.data.url} ups={reddit.data.ups} author={reddit.data.author} numComments={reddit.data.num_comments} key={reddit.data.id}/>
        })] }
      </div>
    );
  }
}

export default App;
