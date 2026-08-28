import React, {FC} from 'react';
import {IUser} from "@/src/models/UserModel";
import "./UserComponent.css"
import Link from "next/link";
type Props = {
    user: IUser
}

const UserComponent: FC<Props> = ({user}) => {
    return (
        <div className={"user"}>
            <Link href={{pathname:"/users/" +user.id.toString()}}>User № {user.id} - {user.name}</Link>
        </div>
    );
};

export default UserComponent;

