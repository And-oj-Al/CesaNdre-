import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;

    switch (method) {
        case "GET":
            res.json("Obteniendo una unica tarea");           
            break;
        case "PUT":
            res.json("Actualizando una unica tarea");
            break;
        case "DELETE":
            res.json("Borrando una unica tarea");
            break;
        default:
            res.status(400).json("Metodo no permitido");
            break;
    }
}