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

const getHardwareId = async (req, res) => {
    
    try {
        const { idCliente } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM equipos WHERE idCliente =?",idCliente  );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addHardware = async (req, res) => {
    try {
        const { idCliente,nombreEquipo, modeloEquipo, marcaEquipo, ubicacionEquipo, serieEquipo } = req.body;

        if (idCliente === undefined || nombreEquipo === undefined || modeloEquipo === undefined || marcaEquipo === undefined || ubicacionEquipo === undefined || serieEquipo === undefined )  {
            res.status(400).json({ message: "Registre todos los datos" });
        }

        const equipoRegistro = { idCliente,nombreEquipo, modeloEquipo, marcaEquipo, ubicacionEquipo, serieEquipo};
        const connection = await getConnection();
        await connection.query("INSERT INTO equipos SET ?", equipoRegistro);
        res.json({ message: "Equipo agregado al cliente con exito" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getHardware,
    addHardware,
    getHardwareId
   
}