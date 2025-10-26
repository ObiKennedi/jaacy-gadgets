import { AlertTriangle } from "lucide-react"
import "@/style/auth/FormMessage.scss"

interface FormErrorProps {
    message?: string;
}

export const FormError = ({message}: FormErrorProps) =>{
   if (!message) return null

   return(
        <div className="form-message error">
            <AlertTriangle/>
            <p>{message}</p>
        </div>
   )
}