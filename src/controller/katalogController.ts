import e, { Request,Response } from "express";
import KatalogService from "../service/katalogService";
import ResponseDTO from "../dto/reponseDto";
import { getAllKatalogDto } from "../dto/katalog/getAllKatalog";

class KatalogController{
async getAllKatalog(req:Request,res:Response){
    const {error,message,payload}= await KatalogService.getAllKatalog()

    if(error){
        res.status(401).json(new ResponseDTO<getAllKatalogDto[]>({
            error,
            message:message ?? 'An Error occured',
            data:payload
        }))
    }

    res.status(200).json(new ResponseDTO<getAllKatalogDto[]>({
        error,
        message:message ?? 'Success Get All Katalog',
        data:payload
    }))
}
async create(req: Request, res: Response) {
    const { nama, alt,url } = req.body;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

    if (!files || !files.image) {
        res.status(400).json(new ResponseDTO({
            error: true,
            message: 'Missing image',
            data:null 
        }));
    }

    const image = files?.image[0]; 

    if (!req.body||!req.files) {
        res.status(400).json(
            new ResponseDTO({
                error: true,
                message: 'Missing required fields',
                data:null 
            }));
    }

    const {error,message,payload} = await KatalogService.create({
        nama,
        alt,
        image,
        url
        });

        if(error){
            res.status(400).json(
                new ResponseDTO({ 
                    error: error,
                    message: {message},
                    data: payload 
                }));
        }


    res.status(200).json(new ResponseDTO({
        error: error,
        message: {message},
        data: payload }));
}

async updateKatalog(req:Request,res:Response){
    const { id } = req.params;
    const { nama, alt,url } = req.body;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

    if (!files || !files.image) {
        res.status(400).json(new ResponseDTO({
            error: true,
            message: 'Missing image',
            data:null 
        }));
    }

    const image = files?.image[0]; 

    if (!req.body||!req.files) {
        res.status(400).json(
            new ResponseDTO({
                error: true,
                message: 'Missing required fields',
                data:null 
            }));
    }

    const {error,message,payload} = await KatalogService.updateKatalog({id,nama,alt,image,url});

        if(error){
            res.status(400).json(
                new ResponseDTO({
                    error: error,
                    message: {message},
                    data: payload 
                }));
        }


    res.status(200).json(new ResponseDTO({
        error: error,
        message: {message},
        data: payload
    }));
    }

    async deleteKatalog(req:Request,res:Response){
        const { id } = req.params;

        const {error,message,payload} = await KatalogService.deleteKatalog(id) 

        if(error){
            res.status(400).json(
                new ResponseDTO({
                    error: error,
                    message: {message},
                    data: payload 
                }));
        }

        res.status(200).json(new ResponseDTO({
            error: error,
            message: {message},
            data: payload
        }));
    }
}


export default new KatalogController()