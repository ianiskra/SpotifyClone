import express from 'express';
import router from './routes'

const app = express();

const port = process.env.port || 8080;

app.use(router);

app.use((req, res, next)=>{
    // global error handler
    console.log('error')
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`);
})