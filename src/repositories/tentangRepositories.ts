import { createTentangDTO } from "../dto/tentang/createTentangDTO";
import { updateTentangDTO } from "../dto/tentang/updateTentangDTO";
import prisma from "../libs/prisma";
import { TentangEntities } from "../types/entities";



export class tentangRepositories{
    async getAllTentang(){
        const data = await prisma.tentang.findMany();

        const finalData:TentangEntities[] = (data.map((tentang)=>({
            id: tentang.id,
            nama: tentang.nama,
            url: tentang.url
        }))) 

        return finalData
    }
    
    async createTentang(data:createTentangDTO){
        return await prisma.tentang.create({data:data});
    }

    async updateTentang(data:updateTentangDTO){
        return await prisma.tentang.update({
            where:{id:data.id},
            data:{
                id:data.id,
                nama:data.nama,
                url:data.url
            }});
    }

    async deleteTentang(id:string){
        return await prisma.tentang.delete({where:{id:id}});
    }
}

export default new tentangRepositories();