import { LoginDto } from "../dto/auth/login";
import ServiceResponseDTO from "../dto/serviceResponseDto";
import authRepositories from "../repositories/authRepositories";
import { validationErrorHandler } from "../utils/errorHandler/schemaError";
import { serviceErrorHandler } from "../utils/errorHandler/serviceErrorHandler";
import { loginSchema } from "../validator/authSchema";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


class authService{
async login(data:LoginDto):Promise<ServiceResponseDTO<string|null>>{
try {
    const {success, error} = loginSchema.safeParse(data)

    if(!success){
        throw new Error(`Validation Error : ${validationErrorHandler(error)}`)
    }
        const checkUser = await authRepositories.checkUser(data)

        if(!checkUser){
            throw new Error("User Not Found")
        }

        const comparePassword = bcrypt.compare(data.password,checkUser.password)

        if(!comparePassword){
            throw new Error("Invalid Password")
        }
        
        const token = jwt.sign({email:checkUser.email,comparePassword},"129312839asd",{expiresIn:"1d"})



        return new ServiceResponseDTO<string>({
            error:false,
            message:"Logged In Successfully",
            payload:token,
        })
} catch (error) {
return serviceErrorHandler<string>(error)
}

}
}

export default new authService()