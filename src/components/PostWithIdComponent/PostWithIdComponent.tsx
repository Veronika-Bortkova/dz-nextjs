import React, {FC} from 'react';
import {IPost} from "@/src/models/UserModel";
import "./PostWithIdComponent.css"

type Props = {
    post: IPost
}

const PostWithIdComponent: FC<Props> = ({post}) => {
    return (
        <div className={"postId"}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

        </div>
    );
};

export default PostWithIdComponent;