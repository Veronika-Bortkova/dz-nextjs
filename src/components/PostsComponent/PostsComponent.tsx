import React from 'react';
import {getAllPosts} from "@/src/services/api.services";
import PostComponent from "@/src/components/PostComponent/PostComponent";
import "./PostsComponent.css"

const PostsComponent = async () => {
const posts = await getAllPosts();
    return (
        <div className={"postsBlock"}>
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}

        </div>
    );
};

export default PostsComponent;