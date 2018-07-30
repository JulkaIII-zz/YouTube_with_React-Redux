import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import YTSearch from 'youtube-api-search';
import VideoDetails from './components/videoDetails';
const API_KEY = 'AIzaSyAl4Qx3-fB7sZ451e0yJESslH5cQa2gRDs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };


    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // === { videos: videos }
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));






// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
