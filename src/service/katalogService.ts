import cloudinary from "../configs/cloudinary";
import { CreateKatalogDto } from "../dto/katalog/createKatalogDTO";
import { getAllKatalogDto } from "../dto/katalog/getAllKatalog";
import { UpdateKatalogDTO } from "../dto/katalog/updateKatalogDTO";
import ServiceResponseDTO from "../dto/serviceResponseDto";
import katalogRepositories from "../repositories/katalogRepositories";
import { serviceErrorHandler } from "../utils/errorHandler/serviceErrorHandler";


class KatalogService {
async getAllKatalog():Promise<ServiceResponseDTO<getAllKatalogDto[]|null>>{
    try {
        const data = await katalogRepositories.getAllKatalog()

        return new ServiceResponseDTO<getAllKatalogDto[]>({
            error:false,
            message:"Success Get All Katalog",
            payload:data
        })

    } catch (error) {
    return serviceErrorHandler<getAllKatalogDto[]>(error)
    }
    }
    async create({ nama, alt, image, url }:any): Promise<ServiceResponseDTO<any>> {
        try {
          const imageUpload = await new Promise<string>((resolve, reject) => {
            cloudinary.uploader.upload_stream(
              { folder: 'katalog_images' },
              (error, result) => {
                if (error) return reject(error);
                resolve(result?.secure_url as string);
              }
            ).end(image.buffer);
          });
          
          const katalog = await katalogRepositories.create({nama,img: imageUpload,alt,url});
    
          return new ServiceResponseDTO({ 
            error: false,
            message: 'Katalog created successfully',
            payload: katalog
          });
    
        } catch (error) {
          return serviceErrorHandler(error)
        }
      }
      async updateKatalog ({ id, nama, alt, image, url }:any): Promise<ServiceResponseDTO<any>> {
        try {
          const imageUpload = await new Promise<string>((resolve, reject) => {
            cloudinary.uploader.upload_stream(
              { folder: 'katalog_images' },
              (error, result) => {
                if (error) return reject(error);
                resolve(result?.secure_url as string);
              }
            ).end(image.buffer);
          });
          const katalog = await katalogRepositories.updateKatalog({ id, nama, alt, img: imageUpload, url }); 

          return new ServiceResponseDTO({ 
            error: false,
            message: 'Katalog updated successfully',
            payload: katalog 
          });
        } catch (error) {
          return serviceErrorHandler(error)
        }
      }

      async deleteKatalog(id:string):Promise<ServiceResponseDTO<string | null>>{
        try {
          const katalog = await katalogRepositories.deleteKatalog(id)

          return new ServiceResponseDTO({ 
            error: false,
            message: 'Katalog deleted successfully',
            payload: katalog.id });
        } catch (error) {
          return serviceErrorHandler(error)
        }
      }
}

export default new KatalogService()