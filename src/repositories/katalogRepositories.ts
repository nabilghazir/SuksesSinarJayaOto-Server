import { CreateKatalogDto } from "../dto/katalog/createKatalogDTO"
import { getAllKatalogDto } from "../dto/katalog/getAllKatalog"
import { UpdateKatalogDTO } from "../dto/katalog/updateKatalogDTO"
import prisma from "../libs/prisma"


class KatalogRepositories {
    async getAllKatalog(){
        const data = await prisma.katalog.findMany({})

        const finalData:getAllKatalogDto[] = (data.map((katalog)=>({
            id: katalog.id,
            nama: katalog.nama,
            img: katalog.img,
            alt: katalog.alt,
            url: katalog.url
        }))) 

        return finalData
    }
    async create({ nama, img, alt, url }:CreateKatalogDto) {
        console.log({ nama, img, alt, url });
        
        return prisma.katalog.create({ data: { nama, img, alt, url } });
    }

    async updateKatalog({ id, nama, img, alt, url }:UpdateKatalogDTO) {
        return prisma.katalog.update({
            where: { id },
            data: { 
                nama,
                img,
                alt,
                url 
            }});
    }

    async deleteKatalog(id:string){
        return prisma.katalog.delete({ where: { id } });
    }
}

export default new KatalogRepositories()