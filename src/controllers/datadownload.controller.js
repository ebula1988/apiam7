import { getConnection } from "./../database/database";


    const getDataDownload = async (req, res) => {
        try {
            const { idcliente } = req.params;
            const connection = await getConnection();
            const result = await connection.query("SELECT * FROM equipos WHERE idcliente =?",idcliente  );
            res.json(result);
            console.log("entre a donde querias")
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    };



export const methods = {
    getDataDownload
      
}