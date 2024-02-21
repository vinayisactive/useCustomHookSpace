import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="flex flex-col h-full w-full bg-black pt-14 lg:pr-4 gap-10">
      <div className="h-[40%] w-full relative overflow-hidden rounded-lg">
        <div className="absolute h-full w-full bg-gradient-to-l from-black to-gray-900 animate-gradient-x animate-pulse"></div>
      </div>
      <div className="h-[60%] w-full relative overflow-hidden rounded-lg">
        <div className="absolute h-full w-full bg-gradient-to-l from-black to-gray-900 animate-gradient-x animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;









