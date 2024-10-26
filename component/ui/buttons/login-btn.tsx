import Link from "next/link"

const Login = () => {
  return (
    <button className='text-white px-4 rounded-xl border border-gray-light hover:text-theme-green' >
       <Link href={"/login"}>Login</Link>
    </button>
  )
}

export default Login