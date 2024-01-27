import Image from 'next/image';
import uchslogo from '../public/uchslogo.png';


const Home = () => {
  return (
    <div className=" w-screen h-screen bg-black flex justify-center items-center flex-col text-white text-3xl md:text-5xl">
      <Image src={uchslogo} alt="uchslogo" className='w-48' />
      <h1>use<span className='text-[#62F983]'>Custom</span>HookSpace</h1>
      <h1 className='text-lg'>coming soon...</h1>
    </div>
  );
};

export default Home;
