import { getConnection } from "./../database/database";

const getHardware= async (req, res)=>{
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT * FROM equipos ORDER BY idEquipo DESC ");
    res.json(result);

    }catch(error){
        res.status(500);      
    }
}

const addHardware = async (req, res) => {
    try {
        const { idEquipo, tarea } = req.body;

        if (idEquipo === undefined || tarea === undefined )  {
            res.status(400).json({ message: "Registre todos los datos" });
        }

        const TareaRegistro = { idequipo, tarea};
        const connection = await getConnection();
        await connection.query("INSERT INTO equipos SET ?", TareaRegistro);
        res.json({ message: "Equipo agregado con exito" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getHardware,
    addHardware
   
}