import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// import the CommentDetail.js
import CommentDetail from './CommentDetail';
// import the ApprovalCard.js
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure about this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                {/* use props to pass a child component CommentDetail to ApprovalCard*/}
                {/* use the CommentDetail component with properties */}
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    textToPost="Nice!" 
                    fakeImage={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    textToPost="Great!" 
                    fakeImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    textToPost="Not bad!" 
                    fakeImage={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
} 

ReactDOM.render(<App />, document.querySelector('#root'));

