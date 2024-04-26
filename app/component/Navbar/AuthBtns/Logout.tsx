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
    <button onClick={handleLogout}  className='text-white px-4 rounded-xl border border-gray-light hover:text-theme-green' >
        Logout
    </button>
  )
}

export default Logout