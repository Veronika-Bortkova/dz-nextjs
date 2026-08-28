import React, {FC} from 'react';
import Link from "next/link";
import "./PostComponent.css"

type Props = {
    post: IPost
}

const PostComponent: FC<Props> = ({post}) => {
    return (
        <div className={"post"}>
            <Link href={"/posts/" + post.id.toString()}>Post № {post.id} {post.title}</Link>
        </div>
    );
};

export default PostComponent;