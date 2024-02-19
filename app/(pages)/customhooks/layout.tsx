import Sidebar from "@/app/component/sidebar/sidebar";

export default async function CustomhookpageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex justify-end h-[92vh] lg:px-8 xl:px-16 relative">
            <div className="2xl:w-[20%] xl:w-[20%] lg:w-[20%] hidden lg:flex fixed h-full left-14">
                <Sidebar />
            </div>
            <div className=" w-full xl:w-[77%] 2xl:w-[78%] lg:w-[75%] scroll-smooth px-2">
                {children}
            </div>
        </div>
    );
}
