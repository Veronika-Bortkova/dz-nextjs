import React from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {Metadata} from "next";
import {getComment} from "@/src/services/api.services";
import CommentWithIdCommponent from "@/src/components/CommentWithIdComponnent/CommentWithIdCommponent";

type Props = {
    params: Promise<{id:string}>;
    searchParams?: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Comment ${id} title`,
        description: `Comment ${id} description`
    }

}


const CommentPage = async ({params}:Props) => {
    const {id} = await params;
    const comment = await getComment(id);
    return (
        <div>
            <CommentWithIdCommponent comment={comment}/>
        </div>
    );
};

export default CommentPage;