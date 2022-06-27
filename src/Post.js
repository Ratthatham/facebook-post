import React from "react";

function Post({id, title, deletePost}) {
    return(
        <div className="Post">
            <div className="Post__delete" onClick={()=>deletePost(id)}>x</div>
            <div className="Post__title">{title}</div>
            
        </div>
    )
};

export default Post;