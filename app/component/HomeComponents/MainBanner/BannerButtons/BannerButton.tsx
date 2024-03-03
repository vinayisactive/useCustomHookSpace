import Link from "next/link";

const BannerButton = ({ text }:any) => {
    return (
      <Link href={`customhooks/${text}`} className="py-1 px-4 border  border-[#303030] rounded-2xl   hover:border-[#93e9b4] hover:scale-110 hover:z-[100] hover:text-white my-1 bg-[#1c1c1c6f] text-[#8d8d8d] text-sm">
         <button>
             {text}
         </button>
      </Link>
    );
  };

  export default BannerButton; 