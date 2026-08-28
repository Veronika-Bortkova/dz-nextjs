import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Posts layout",
    description: "Possts description layout",
};

const PostsLayout = ({ children }: LayoutProps<"/posts">) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default PostsLayout;