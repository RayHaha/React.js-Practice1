import React from 'react';
import ReactDOM from 'react-dom';
// import the CommentDetail.js
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            {/* then use the CommentDetail component with properties */}
            <CommentDetail author="Sam" />
            <CommentDetail author="Alex" />
            <CommentDetail author="Jane" />
        </div>
    );
} 

ReactDOM.render(<App />, document.querySelector('#root'));

