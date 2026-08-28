
import type {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {getUser} from "@/src/services/api.services";
import {IUser} from "@/src/models/UserModel";
import UserWithIdComponent from "@/src/components/UserWithIdComponent/UserWithIdComponent";

type Props = {
    params: Promise<{id:string}>;
    searchParams?: Promise<SearchParams>
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `User ${id} title`,
        description: `User ${id} description`
    }
};



const UserPage = async ({params}: Props) => {
    const {id} =  await params;

    const user = await getUser(id);
    return (
        <>
            <UserWithIdComponent user={user}/>
        </>
    );
};

export default UserPage;