import { NextApiRequest, NextApiResponse } from "next"
import conn from "../../../utils/database";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest, 
    res: NextApiResponse
    ) => {

    const { method, body } = req;
    switch (method) {
        case "GET":
            res.status(200).json("Consiguiendo tarea");
            break;
        case "POST":
            await conn.query()
            
            res.status(200).json("Creando tarea");
            break;
        default:
            res.status(400).json("Metodo invalido");
            break;
    }
};