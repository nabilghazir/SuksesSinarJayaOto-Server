import { Request,Response } from "express";
import tentangService from "../service/tentangService";
import ResponseDTO from "../dto/reponseDto";

export class tentangController{
    async getAllTentang(req:Request,res:Response){
        const {error,message,payload} = await tentangService.getAllTentang()

        if(error){
            res.status(400).json(
                new ResponseDTO({
                    error:error,
                    message:message ?? 'An Error occured',
                    data:payload
                })
            )
        }

        res.status(200).json(
                new ResponseDTO({
                error:error,
                message:message ?? 'Success Get All Tentang',
                data:payload
                }))
    }

    async createTentang(req:Request,res:Response){
        const data = req.body

        const {error,message,payload} = await tentangService.createTentang(data)

        if(error){
            res.status(400).json(
                new ResponseDTO({
                    error:error,
                    message:message ?? 'An Error occured',
                    data:payload
                })
            )
        }

        res.status(200).json(
            new ResponseDTO({
                error:error,
                message:message ?? 'Success Create Tentang',
                data:payload
            })
        )
    }

    async updateTentang(req:Request,res:Response){
        const {url,nama} = req.body
        const { id } = req.params;

        const {error,message,payload} = await tentangService.updateTentang({id,url,nama})

        if(error){
            res.status(400).json(
                new ResponseDTO({
                    error:error,
                    message:message ?? 'An Error occured',
                    data:payload
                })
            )
        }

        res.status(200).json(
            new ResponseDTO({
                error:error,
                message:message ?? 'Success Update Tentang',
                data:payload
            })
        )
    }

    async deleteTentang(req:Request,res:Response){
        const { id } = req.params;

        const {error,message,payload} = await tentangService.deleteTentang(id)

        if(error){
            res.status(400).json(
                new ResponseDTO({
                    error:error,
                    message:message ?? 'An Error occured',
                    data:payload
                })
            )
        }

        res.status(200).json(
            new ResponseDTO({
                error:error,
                message:message ?? 'Success Delete Tentang',
                data:payload
            })
        )
    }
}

export default new tentangController();