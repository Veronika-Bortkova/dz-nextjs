import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Post layout",
    description: "Post description layout",
};

const PostLayout = ({ children }: LayoutProps<"/posts/[id]">) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default PostLayout;