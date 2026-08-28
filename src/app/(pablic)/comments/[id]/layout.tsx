import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Comment layout",
    description: "Comment description layout",
};

const CommentLayout = ({ children }: LayoutProps<"/comments/[id]">) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default CommentLayout;