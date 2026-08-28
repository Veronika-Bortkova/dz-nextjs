import React, {FC} from 'react';
import {IUser} from "@/src/models/UserModel";
import "./UserWithIdComponent.css"

type Props = {
    user: IUser;
}

const UserWithIdComponent:FC<Props> = ({user}) => {
    return (
        <div className={"cardUser"}>
            <h1>User card</h1>
            <h3>{user.name}</h3>
            <p>Username - {user.username}</p>
            <p>email: {user.email}</p>

        </div>
    );
};

export default UserWithIdComponent;