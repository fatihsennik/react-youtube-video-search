import React from "react";
import './VideoItem.css'




const VideoListItem = ({videos,onVideoItemSelectProp}) => {


    return (
        <div onClick={() => onVideoItemSelectProp(videos)} className="video-item item" >
            <img className="ui image" src={videos.snippet.thumbnails.medium.url}   />

            <div className="content" >
                <div className="header" >
                    {videos.snippet.title}
                </div>
            </div>


        </div>
    );


}


export default VideoListItem
