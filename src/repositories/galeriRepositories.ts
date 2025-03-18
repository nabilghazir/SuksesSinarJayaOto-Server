import { createGaleriDTO } from "../dto/galeri/createGaleriDTO"
import { getAllGaleriDTO } from "../dto/galeri/getGaleriDTO"
import prisma from "../libs/prisma"
import { GaleriEntities } from "../types/entities"


export class galeriRepositories{
    async getGaleri(){
        const data = await prisma.galeri.findMany({
        })

        const finalData:getAllGaleriDTO[] = (data.map((galeri)=>({
            id:galeri.id,
            url:galeri.url,
            alt:galeri.alt
        })))
        return finalData
    }

    async createGaleri(data:createGaleriDTO){
        return prisma.galeri.create({data:{url:data.url,alt:data.alt}})
    }

    async updateGaleri(data:GaleriEntities){
        return prisma.galeri.update({where:{id:data.id},data:{url:data.url,alt:data.alt}})
    } 

    async deleteGaleri(id:string){
        return prisma.galeri.delete({where:{id:id}})
    }
}

export default new galeriRepositories()