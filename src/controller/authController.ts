import { Request,Response } from "express";
import authService from "../service/authService";
import ResponseDTO from "../dto/reponseDto";
import { LoginDto } from "../dto/auth/login";


class authController{
   async login (req:Request,res:Response) {
        const data:LoginDto = req.body        

        const {error,message,payload}= await authService.login(data)

        if(error){
            res.status(401).json(
                new ResponseDTO<string>({
                    error,
                    message:message ?? 'An Error occured',
                    data:payload
                })
            )
        }
        res.status(200).json(
            new ResponseDTO<string>({
                error,
                message:message ?? 'Logged In Successfully',
                data:payload
            })
        )
    }
}

export default new authController()