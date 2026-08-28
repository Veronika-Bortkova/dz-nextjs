import React from 'react';
import {getAllUsers} from "@/src/services/api.services";
import UserComponent from "@/src/components/UserComponent/UserComponent";
import "./UsersComponent.css"

const UsersComponent = async () => {
    const users = await getAllUsers();
    return (
        <div className={"UsersBlock"}>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;