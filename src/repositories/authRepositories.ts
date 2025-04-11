import { LoginDto } from "../dto/auth/login"
import prisma from "../libs/prisma"


class AuthReposiotories {

    async checkUser(data:LoginDto){
     return await prisma.user.findFirst({
            where:{email :data.email}
        })
    }
}

export default new AuthReposiotories()