import Link from "next/link";

const BannerButton = ({ text }:any) => {
    return (
      <Link href={`customhooks/${text}`} className="py-1 px-4 border  border-bnr-btn rounded-2xl   hover:border-theme-green hover:scale-110 hover:z-[100] hover:text-white my-1 bg-bnr-btn-bg text-bnr-btn-text text-sm">
         <button>
             {text}
         </button>
      </Link>
    );
  };

  export default BannerButton; 