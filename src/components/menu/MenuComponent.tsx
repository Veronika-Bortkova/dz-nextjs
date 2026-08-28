import React from 'react';
import Link from "next/link";
import "./MenuComponent.css"

const MenuComponent = () => {
    return (
        <div className={"menu"}>
            <ul className={"ulMenu"}>
                <Link href={"/users"}> <li>Users list</li></Link>
                <Link href={"/posts"}> <li>Posts list</li></Link>
                <Link href={"/comments"}> <li>Comments list</li></Link>
            </ul>
        </div>
    );
};

export default MenuComponent;