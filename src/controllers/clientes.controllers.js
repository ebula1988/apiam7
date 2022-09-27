import { getConnection } from "./../database/database";

const getClientes= async (req, res)=>{
    try{
        const connection= await getConnection();
    const result = await connection.query("SELECT * FROM clientes order by idcliente DESC ");


    res.json(result);

    }catch(error){
        res.status(500);
        
    }
}



const addCliente = async (req, res) => {
    try {
        const { nombres,nit, ciudad, direccion, telefono,email } = req.body;

        if (nombres === undefined || nit === undefined || ciudad === undefined || telefono === undefined || email === undefined) {
            res.status(400).json({ message: "Registre todos los datos" });
        }

        const clienteRegistro = { nombres,nit, ciudad, direccion, telefono,email };
        const connection = await getConnection();
        await connection.query("INSERT INTO clientes SET ?", clienteRegistro);
        res.json({ message: "Cliente agregado con exito" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCliente = async (req, res) => {
    try {
        console.log(req.params);
        const { idCliente } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM clientes WHERE idCliente = ?", idCliente );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteCliente = async (req, res) => {
    try {
        const { idCliente } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM clientes WHERE idCliente = ?", idCliente);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const removeCliente = async (req, res) => {
    try {
        const { idCliente } = req.body;


        const clienteElminar = { idCliente };
        const connection = await getConnection();
        await connection.query("DELETE FROM clientes SET ?", clienteElminar);
        res.json({ message: "Cliente agregado con exito" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateCliente = async (req, res) => {
    try {
        //console.log(req.params);
        //console.log(req.body);
        const { idCliente } = req.params;
        //console.log(idCliente);
        const { nombreCliente, ciudadCliente } = req.body;
        const clienteUpdate = { nombreCliente, ciudadCliente }; 
        console.log(ciudadCliente);
        //
        //console.log(nombreCliente)

        ///if (idCliente === undefined || nombreCliente === undefined || ciudadCliente === undefined) {
           // res.status(400).json({ message: "llenar todo el formulario" });
        //}

        //
        //const connection = await getConnection();
        //const result = await connection.query("UPDATE clientes SET ? WHERE idCliente = ?", [clienteUpdate, idCliente]);
        //res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


// exporto para usarla en otro lugar


export const methods = {
    getClientes,
    addCliente,
    getCliente,
    deleteCliente,
    updateCliente,
    removeCliente
}