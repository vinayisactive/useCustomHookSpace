import MaxWithWrapper from "@/component/ui/max-width-wrapper";
import Sidebar from "@/component/ui/side-bar";

export default async function CustomhookpageLayout({ children }: {children: React.ReactNode}) {
    return (
        <MaxWithWrapper className="flex justify-between gap-3 mt-14 bg-black overflow-x-hidden">
            <Sidebar />
                <div className=" w-full lg:w-[80%] overflow-x-hidden">
                      {children}
                </div>
        </MaxWithWrapper>
    );
}
