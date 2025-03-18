import { Request,Response } from "express";
import galeriService from "../service/galeriService";
import ResponseDTO from "../dto/reponseDto";

export class galeriController{
async getGaleri(req:Request,res:Response){
    const {error,message,payload} = await galeriService.getGaleri()

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
            message:message ?? 'Success Get All Galeri',
            data:payload,
        }))
    }


    async createGaleri(req: Request, res: Response) {
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

        if (!files || !files.url || files.url.length === 0 || !files.url[0].originalname) {
            res.status(400).json(
                new ResponseDTO({
                    error: true,
                    message: 'Missing or invalid image file',
                    data: null
                })
            );
        }
    
        const filename = files?.url[0].originalname ?? 'default_image';

        const alt = filename
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_]/g, ' ') 
            .trim();
    
            console.log("url : ",files);
            console.log("alt : ",alt);
            
        const {error,message,payload} = await galeriService.createGaleri({url:files,alt})
    
        if(error){
            res.status(400).json(
                new ResponseDTO({
                    error:error,
                    message:message ?? 'An Error occured',
                    data:payload
                })
            )
            return
        }
    
        res.status(200).json(
            new ResponseDTO({
                error:error,
                message:message ?? 'Success Create Galeri',
                data:payload,
            }))
    }

    async updateGaleri(req:Request,res:Response){
        const { id } = req.params;
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
    
        if (!files || !files.url || files.url.length === 0 || !files.url[0].originalname) {
            res.status(400).json(
                new ResponseDTO({
                    error: true,
                    message: 'Missing or invalid image file',
                    data: null
                })
            );
        }
    
        const filename = files?.url[0].originalname ?? 'default_image';

        const alt = filename
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_]/g, ' ') 
            .trim();
    
        const {error,message,payload} = await galeriService.updateGaleri({id,alt,url:files})
    
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
                message:message ?? 'Success Update Galeri',
                data:payload,
            }))
    }

    async deleteGaleri(req:Request,res:Response){
        const { id } = req.params;
        const {error,message,payload} = await galeriService.deleteGaleri(id)

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
                message:message ?? 'Success Delete Galeri',
                data:payload
            }))
    }
}

export default new galeriController();