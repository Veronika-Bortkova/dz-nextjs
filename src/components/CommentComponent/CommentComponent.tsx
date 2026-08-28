import React, {FC} from 'react';
import Link from "next/link";
import "./CommentComponent..css"

type Props = {
    comment: IComment
}

const CommentComponent: FC<Props> = ({comment}) => {
    return (
        <div className={"comment"}>
            <Link href={"/comments/" + comment.id}>Comment № {comment.id} {comment.name}</Link>
        </div>
    );
};

export default CommentComponent;