import { FaGoogle } from "react-icons/fa"
import "@/style/auth/GoogleAuthButton.scss"

export const GoogleAuthButton = () =>{
    return(
        <button>
            <FaGoogle/>
            Continue with Google
        </button>
    )
}