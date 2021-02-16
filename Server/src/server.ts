import express from 'express';
import router from './routes'

const app = express();

const port = process.env.port || 8080;

// this will allow the express framework to read JSON in the request body,
//   and parse it to a JavaScript object
app.use(express.json());

app.use(router);

app.use((req, res, next)=>{
    // global error handler
    console.log('error')
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`);
})