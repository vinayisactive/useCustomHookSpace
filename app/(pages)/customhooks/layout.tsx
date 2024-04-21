import {Sidebar} from '@/app/component/index'

export default async function CustomhookpageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full w-full lg:w-[1100px] xl:w-[1400px] flex justify-between">
            
            <div className="h-full w-[20%] hidden lg:flex ">
                <Sidebar />
            </div>

            <div className="w-full lg:w-[75%] scroll-smooth px-2 pt-4">
                {children}
            </div>

        </div>
    );
}
