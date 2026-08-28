import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comments layout",
    description: "Comments description layout",
};

const CommentsLayout = ({ children }: LayoutProps<"/comments">) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default CommentsLayout;