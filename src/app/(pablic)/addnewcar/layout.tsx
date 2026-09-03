import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Add new car layout",
    description: "Add new car description layout",
};

const AddNewCarLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default AddNewCarLayout;