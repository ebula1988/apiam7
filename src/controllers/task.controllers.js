import { getConnection } from "./../database/database";

const getTaskId = async (req, res) => {
    
    try {
        const { idEquipo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tareas WHERE idEquipo =?",idEquipo  );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addTask = async (req, res) => {
    try {
        const { idEquipo, tarea } = req.body;

        if (idEquipo === undefined || tarea === undefined) {
            res.status(400).json({ message: "Registre todos los datos" });
        }
        
        const taskRegistro = { idEquipo, tarea };
        const connection = await getConnection();
        await connection.query("INSERT INTO tareas SET ?", taskRegistro);
        res.json({ message: "Tarea agregada con exito" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getTaskId,
    addTask,
    getTaskId   
}