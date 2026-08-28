import React from 'react';
import {getAllComments} from "@/src/services/api.services";
import CommentComponent from "@/src/components/CommentComponent/CommentComponent";
import "./CommentsComponents.css"

const CommentsComponents = async () => {
    const comments = await getAllComments();
    return (
        <div className={"commentBlock"}>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponents;