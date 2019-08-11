import React from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import YouTube from '../apis/YouTube'

class App extends React.Component{
    state = {videos: []};

    onTermSubmit = async (term)=>{
        const response = await YouTube.get('/search', {
            params: {
                q: term
            }
        }); 
        this.setState({videos: response.data.items});
        //console.log(response.data.items);
    };

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;