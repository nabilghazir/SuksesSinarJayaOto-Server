import cloudinary from "../configs/cloudinary";
import { createGaleriDTO, createGaleriResponseDTO } from "../dto/galeri/createGaleriDTO";
import { getAllGaleriDTO } from "../dto/galeri/getGaleriDTO";
import { updateGaleriDTO } from "../dto/galeri/updateGaleriDTO";
import ServiceResponseDTO from "../dto/serviceResponseDto";
import galeriRepositories from "../repositories/galeriRepositories";
import { GaleriEntities } from "../types/entities";
import { serviceErrorHandler } from "../utils/errorHandler/serviceErrorHandler";


export class galeriService{
    async getGaleri():Promise<ServiceResponseDTO<getAllGaleriDTO[]|null>>{
        try {
            
            const data = await galeriRepositories.getGaleri()

            return new ServiceResponseDTO<getAllGaleriDTO[]>({
                error:false,
                message:"Success Get All Galeri",
                payload:data
            })
        } catch (error) {
            return serviceErrorHandler<getAllGaleriDTO[]>(error)
        }
    }
    async createGaleri(data: createGaleriDTO): Promise<ServiceResponseDTO<createGaleriResponseDTO | null>> {
        try {

            const file = (data.url as any)?.url?.[0];
    
            if (!file || !Buffer.isBuffer(file.buffer)) {
                throw new Error("Invalid file buffer. Check the file structure.");
            }
    
            const imageUpload = await new Promise<string>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'katalog_images' },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result?.secure_url as string);
                    }
                );
                uploadStream.end(file.buffer);
            });
    
            const payload = await galeriRepositories.createGaleri({ url: imageUpload, alt: data.alt });
    
            return new ServiceResponseDTO<createGaleriResponseDTO>({
                error: false,
                message: "Success Create Galeri",
                payload: payload,
            });
        } catch (error) {
            return serviceErrorHandler<createGaleriResponseDTO>(error);
        }
    }
    
    

    async updateGaleri(data:updateGaleriDTO):Promise<ServiceResponseDTO<GaleriEntities|null>>{
        try {
            const file = (data.url as any)?.url?.[0];
    
            if (!file || !Buffer.isBuffer(file.buffer)) {
                throw new Error("Invalid file buffer. Check the file structure.");
            }
            
    
            const imageUpload = await new Promise<string>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'katalog_images' },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result?.secure_url as string);
                    }
                );
                uploadStream.end(file.buffer);
            });
            const payload = await galeriRepositories.updateGaleri({url:imageUpload,alt:data.alt,id:data.id})

            return new ServiceResponseDTO<GaleriEntities>({
                error:false,
                message:"Success Update Galeri",
                payload:payload
            })
        } catch (error) {
            console.log("Service error :", error);
            
            return serviceErrorHandler<GaleriEntities>(error)
        }
    }
    async deleteGaleri(id:string):Promise<ServiceResponseDTO<GaleriEntities|null>>{
        try {
            const payload = await galeriRepositories.deleteGaleri(id)

            return new ServiceResponseDTO<GaleriEntities>({
                error:false,
                message:"Success Delete Galeri",
                payload:payload
            })
        } catch (error) {
            return serviceErrorHandler<GaleriEntities>(error)
        }
    }
}

export default new galeriService()