import React from 'react';
import Searchbar from './SearchBar'
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "../VideoDetail";

const KEY = "AIzaSyCYGrzdZa9xVJzPM2DvAuatwhOX2iDA-rU";

class App extends React.Component {

    state = {videos: [], VideoSelect: null};

    componentDidMount() {
        this.onTermSubmit('İstanbul');
    }

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: `${KEY}`
            }
        });
        this.setState({
            videos: response.data.items,
            VideoSelect: response.data.items[0]
        });
    }

    onVideoSelect = (videoSelect) => {
        this.setState({VideoSelect: videoSelect});
    }

    render() {
        return (
            <div className="searchbar-ui ui container">
                <Searchbar onSearchProp={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.VideoSelect}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelectProp={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}


export default App