import express from "express";
import { con } from "./dbConfig/dbConfig.js";
import cors from 'cors';
import adminPanelLoginRouter from './routes/AdminLoginRoute.js'
import homePageRouter from './routes/HomePageRoute.js';
import updateContentRouter from './routes/UpdateContentRoute.js'
import projectRouter from './routes/ProjectsRoute.js';
import messagesRouter from './routes/MessagesRoute.js'

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());
con();

app.use('/adminLogin',adminPanelLoginRouter);
app.use('/homePage',homePageRouter);
app.use('/update',updateContentRouter);
app.use('/projects',projectRouter)
app.use('/messages',messagesRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;