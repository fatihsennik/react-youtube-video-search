import React from "react";
import VideoListItem from "./VideoListIItem";


const VideoList = ({videos,onVideoSelectProp}) => {

    const renderList = videos.map((video) => {
        return <VideoListItem onVideoItemSelectProp={onVideoSelectProp} videos={video}></VideoListItem>

    });
    return <div className="ui segment padded relaxed divided list">{renderList}</div>

}
export default VideoList

