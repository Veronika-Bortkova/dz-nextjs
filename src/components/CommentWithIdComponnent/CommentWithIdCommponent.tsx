import React, {FC} from 'react';
import "./CommentWithIdComponnent.css"
import {IComment} from "@/src/models/CommentModel";

type Props = {
    comment: IComment
}

const CommentWithIdCommponent: FC<Props> = ({comment}) => {
    return (
        <div className={"commentId"}>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
            <p className={"email"}>{comment.email}</p>

        </div>
    );
};

export default CommentWithIdCommponent;