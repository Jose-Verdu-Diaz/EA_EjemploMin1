import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config/config'

//Inicializaciones
const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const connection = mongoose.connection;

mongoose.connect(config.DB.URI, dbOptions);

connection.once('open', () => {
    console.log('Conexion a MongoDB establecida');
});

connection.on('error', err => {
    console.log(err);
    process.exit(0);
});