import MainBanner from "./component/HomeComponents/MainBanner/MainBanner";

const Home = () => {
  return (
    <div className=" w-full h-full flex flex-col  items-center bg-black text-white text-3xl md:text-5xl">
      <MainBanner />
    </div>
  );
};

export default Home;
