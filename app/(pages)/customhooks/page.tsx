import { hooks } from "@/utils/static/index";
import ListingCards from "@/component/ui/listing-card";

const page = () => {
  return (
      <div className="flex px-2 text-white sm:flex-col md:flex-row flex-wrap justify-center items-center lg:justify-start gap-7 pb-10">
        {hooks?.map((hook: string) => {
          return (
              <ListingCards hook={hook} key={hook}/>
          )})}
      </div>
  );
};

export default page;
