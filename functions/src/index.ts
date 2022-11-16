import * as functions from "firebase-functions";


import { MysqlDataSource } from "./config";
import { Usuario } from "./entity/Usuario";
import { Colonia } from "./entity/Colonia";
import { Queja } from "./entity/Queja";
import { Noticia } from "./entity/Noticia";


console.log("Starting up");

export const startUp = console.log("Starting up");

export const checkIfDatabaseIsConnected = functions.https.onRequest(async (request, response) => {
    const connection = MysqlDataSource.isInitialized;
    console.log("Connection to database established: ", connection);
    response.send(connection);
});

export const getUsuarios = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {

        const usuarioRepo = MysqlDataSource.getRepository(Usuario)

        const allUsuarios = await usuarioRepo.find();

        response.send(allUsuarios);
        
    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });

});

export const getColonias = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {
    
        const coloniaRepo = MysqlDataSource.getRepository(Colonia)

        const allColonias = await coloniaRepo.find();
    
        response.send(allColonias);

    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });
});

export const getQuejas = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {
    
        const reportesRepo = MysqlDataSource.getRepository(Queja)

        const allReportes = await reportesRepo.find();
    
        response.send(allReportes);

    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });
});

export const getNoticias = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {
    
        const noticiasRepo = MysqlDataSource.getRepository(Noticia)

        const allNoticias = await noticiasRepo.find();
    
        response.send(allNoticias);

    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });
});

export const createUsuario = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {

        const { id, nombre, apellidos, email, tipo, direccion, codigo_postal, coloniaId  } = request.body;

        try{
            const usuarioRepo = MysqlDataSource.getRepository(Usuario);

            const newUsuario = usuarioRepo.create({
                id,
                nombre,
                apellidos,
                email,
                tipo,
                direccion,
                codigo_postal,
                colonia: coloniaId
            });

            const savedUsuario = await usuarioRepo.save(newUsuario);

            response.send(savedUsuario);

        } catch(err) {
            response.send(err);
        }
    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });

});

export const createColonia = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {

        const { nombre } = request.body;

        try{

            const coloniaRepo = MysqlDataSource.getRepository(Colonia);

            const newColonia = coloniaRepo.create({
                nombre
            });

            const savedColonia = await coloniaRepo.save(newColonia);

            response.send(savedColonia);

        } catch(err) {
            response.send(err);
        }
    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });
});

export const createQueja = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {

        const { naturaleza, descripcion, correo, fecha, tipoUsuario  } = request.body;

        try{
            const reporteRepo = MysqlDataSource.getRepository(Queja);

            const newReporte = reporteRepo.create({
                naturaleza,
                descripcion,
                correo,
                fecha,
                tipoUsuario
            });

            
            const savedReporte = await reporteRepo.save(newReporte);

            response.send(savedReporte);

        } catch(err) {
            response.send(err);
        }
    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });

});

export const createNoticia = functions.https.onRequest(async (request, response) => {

    MysqlDataSource.initialize().then(async () => {

        const { nombre, apellido, descripcion, correo, direccion, colonia, codigoPostal, tipoUsuario, fecha} = request.body;

        try{
            const noticiaRepo = MysqlDataSource.getRepository(Noticia);

            const newNoticia = noticiaRepo.create({
                nombre,
                apellido,
                descripcion,
                correo,
                direccion,
                colonia,
                codigoPostal,
                tipoUsuario,
                fecha
            });

            const savedNoticia = await noticiaRepo.save(newNoticia);

            response.send(savedNoticia);

        } catch(err) {
            response.send(err);
        }
    }).catch((err) => {
        response.send(err);
    }).then(() => {
        MysqlDataSource.destroy();
    });

});



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
