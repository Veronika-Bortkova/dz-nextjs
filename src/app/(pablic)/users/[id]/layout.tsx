import type { Metadata } from "next";
import {SearchParams} from "next/dist/server/request/search-params";
export const metadata: Metadata = {
    title: "User layout",
    description: "User description layout",
};


const UserLayout = ({ children }: LayoutProps<"/users/[id]">) => {
    return (
        <div>
             {children}
        </div>

    );
}


export default UserLayout;