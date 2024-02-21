import Link from "next/link";
import { hooks } from "@/static/hooks";

const page = () => {
  return (
    <div className="w-full h-full text-white overflow-y-auto pt-4">
      <div className="flex sm:flex-col md:flex-row flex-wrap w-full justify-center lg:justify-start  gap-7 py-10">
        {hooks?.map((hook: any) => {
          return (
            <div key={hook}className=" group w-[90%] md:w-[48%] border h-28 flex justify-center items-center rounded-xl text-3xl relative overflow-hidden hover:cursor-pointer">
              <div className=" absolute top-0 left-0 h-full w-[0%] group-hover:w-full transition-all duration-500 delay-50 bg-[#121212bd] z-0"></div>
              <Link href={`/customhooks/${hook}`} className="w-full h-full z-[100000] flex justify-center items-center">
                <div className="group-hover:text-[#62F983]" >{hook}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
