import ServiceResponseDTO from "../dto/serviceResponseDto";
import { createTentangDTO } from "../dto/tentang/createTentangDTO";
import { updateTentangDTO } from "../dto/tentang/updateTentangDTO";
import tentangRepositories from "../repositories/tentangRepositories";
import { TentangEntities } from "../types/entities";
import { serviceErrorHandler } from "../utils/errorHandler/serviceErrorHandler";

export class tentangService{
    async getAllTentang():Promise<ServiceResponseDTO<TentangEntities[]|null>>{
        try {
            const data = await tentangRepositories.getAllTentang();

            return new ServiceResponseDTO<TentangEntities[]>({
                error:false,
                message:"Success Get All Tentang",
                payload:data
            })
        } catch (error) {
            return serviceErrorHandler<TentangEntities[]>(error)
    }
}

    async createTentang(data:createTentangDTO):Promise<ServiceResponseDTO<TentangEntities|null>>{
        try {
            const payload = await tentangRepositories.createTentang(data)

            return new ServiceResponseDTO<TentangEntities>({
                error:false,
                message:"Success Create Tentang",
                payload:payload
            })
        } catch (error) {
            return serviceErrorHandler<TentangEntities>(error)
        }
    }

    async updateTentang(data: updateTentangDTO):Promise<ServiceResponseDTO<TentangEntities|null>>{
        try {
            const payload = await tentangRepositories.updateTentang(data)

            return new ServiceResponseDTO<TentangEntities>({
                error:false,
                message:"Success Update Tentang",
                payload:payload
            })
        } catch (error) {
            return serviceErrorHandler<TentangEntities>(error)
        }
    }

    async deleteTentang(id:string):Promise<ServiceResponseDTO<string|null>>{
        try {
            const payload = await tentangRepositories.deleteTentang(id)

            return new ServiceResponseDTO<string>({
                error:false,
                message:"Success Delete Tentang",
                payload:payload.nama
            })
        } catch (error) {
            return serviceErrorHandler<string>(error)
        }
    }
}

export default new tentangService();