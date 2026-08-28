import React from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {Metadata} from "next";
import {getPost} from "@/src/services/api.services";
import PostWithIdComponent from "@/src/components/PostWithIdComponent/PostWithIdComponent";


type Props = {
    params: Promise<{id:string}>;
    searchParams?: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const {id} = await params;
    return {
        title: `Post ${id} title`,
        description: `Post ${id} description`
    }
}

const PostPage = async ({params}:Props) => {
    const {id} = await params;
    const post = await getPost(id);

    return (
        <div>
            <PostWithIdComponent post={post}/>

        </div>
    );
};

export default PostPage;