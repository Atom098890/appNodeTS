import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

//если all будет не выше методов, то он будет игнорироваться
// app.all('/hello', (req, res, next) => {
//     console.log('All');
//     next();
// });

app.use((req, res, next) => {
    console.log('Time', Date.now());
    next();
});

app.get('/hello', (req, res) => {
    // res.cookie('token', 'qfregqetggt', {
    //     domain: '',
    //     path: '/',
    //     secure: true
    // })
    // res.set('Content-Type', 'text/plain')
    // res.status(201).json({ success: true });

    throw new Error('Error!!!!!!!');
});

app.use('/users', userRouter)

//после всех use
// next обязательная вещь, не веришь попробуй без него запустить
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log('Server start...');
});



