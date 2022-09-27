import { getConnection } from "../database/database";

const getServicios= async (req, res)=>{
    try{
        const connection= await getConnection();
    const result = await connection.query("SELECT * FROM servicios");


    res.json(result);

    }catch(error){
        res.status(500);
        
    }
}




const getServicio = async (req, res) => {
    try {
        console.log(req.params);
        const { idServicio } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM servicios WHERE idServicio = ?", {idServicio} );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};







// exporto para usarla en otro lugar


export const methods = {
    getServicios,
    getServicio
    
}