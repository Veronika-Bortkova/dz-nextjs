import React from 'react';
import Link from "next/link";
import "./MenuComponent.css"

const MenuComponent = () => {
    return (
        <div className={"menu"}>
            <ul>
                <Link href={"/cars"}><li>All Cars</li></Link>
                <Link href={"/addnewcar"}><li>Add New Cars</li></Link>
            </ul>
        </div>
    );
};

export default MenuComponent;