import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " Cars layout",
    description: "Cars description layout",
};

const CarsLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <div>
            {children}
        </div>

    );
}


export default CarsLayout;