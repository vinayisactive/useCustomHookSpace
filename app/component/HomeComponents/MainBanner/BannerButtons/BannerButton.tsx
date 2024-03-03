const BannerButton = ({ text }:any) => {
    return (
      <button className="border py-1 px-4 border-[#303030] rounded-2xl bg-[#1c1c1c6f] text-[#8d8d8d] text-sm hover:border-[#93e9b4] hover:scale-110 hover:z-[100] hover:text-white my-1">
        {text}
      </button>
    );
  };

  export default BannerButton;