import axios from "axios"
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async() => {
    try {

      const {data} = await axios.post("/api/users/logout");
      localStorage.setItem("userInfo", "");
      localStorage.setItem("isAuthenticated", "");

      if (data?.success) {
        router.push("/")
    
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error: any) {
      return new Error(error.message);
    }    
  }

  return (
    <button onClick={handleLogout}  className='px-4 py-2 rounded-xl border border-gray-light text-white bg-red-500' >
        Logout
    </button>
  )
}

export default Logout