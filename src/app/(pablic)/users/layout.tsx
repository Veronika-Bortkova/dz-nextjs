import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users layout",
    description: "Users description layout",
};

const UsersLayout = ({ children }: LayoutProps<"/users">) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default UsersLayout;