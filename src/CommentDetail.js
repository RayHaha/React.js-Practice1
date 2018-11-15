import React from 'react';
import faker from 'faker';

//  the prop is going to show up in the parameter as an object
const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                {/* use faker library to generate a fake image */}
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {/* then we refer to the props.author object here */}
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
}

// export the CommentDetail function/variable
export default CommentDetail;