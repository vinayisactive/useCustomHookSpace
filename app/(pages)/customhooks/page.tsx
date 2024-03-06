import { hooks } from "../../../static/hooks";
import { ListingCards } from '@/app/component/index'

const page = () => {
  return (
    <div className="w-full h-full text-white overflow-y-auto">
      <div className="w-full flex sm:flex-col md:flex-row flex-wrap justify-center items-center lg:justify-start gap-7 py-6">
        {hooks?.map((hook: string) => {
          return (
              <ListingCards hook={hook} key={hook}/>
          )})}
      </div>
    </div>
  );
};

export default page;
