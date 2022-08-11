import app from "./app";

const main = ()=>{
    app.listen(process.env.PORT || app.get("port"));
    console.log(`Server on port ${process.env.PORT ||app.get("port")}`);
};

main();





