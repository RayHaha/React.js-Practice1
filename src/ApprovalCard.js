import React from 'react';

// we use the CSS in https://semantic-ui.com/views/card.html
const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            {/* the CommentDetail component will store in props.children */}
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;