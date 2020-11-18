import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import subjectRoutes from './routes/subject.routes'
import studentRoutes from './routes/student.routes'

//Inicializaciones
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(studentRoutes);

/* //Routes
app.get('/', (req,res) => {
    return res.send('It works!');
}); */

export default app;
