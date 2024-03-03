import Sidebar from "@/app/component/SideBar/Sidebar";

export default async function CustomhookpageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative h-[92vh] flex justify-end lg:px-8 xl:px-16">
            <div className="h-full  2xl:w-[20%] xl:w-[20%] lg:w-[20%] hidden lg:flex fixed left-14">
                <Sidebar />
            </div>
            <div className=" w-full xl:w-[77%] 2xl:w-[78%] lg:w-[75%] scroll-smooth px-2 pt-4">
                {children}
            </div>
        </div>
    );
}
