import React from 'react';

//  the props is going to show up in the parameter as an object
const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                {/* use faker library in index.js then past to here */}
                <img alt="avatar" src={props.fakeImage}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {/* then we refer to the props.author here */}
                    {props.author}
                </a>
                <div className="metadata">
                    {/* we refer to the props.timeAgo here */}
                    <span className="date">{props.timeAgo}</span>
                </div>
                {/* we refer to the props.textToPost here */}
                <div className="text">{props.textToPost}</div>
            </div>
        </div>
    );
}

// export the CommentDetail function/variable
export default CommentDetail;