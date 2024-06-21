import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
// import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
// Catch-all "Not Found" middleware

// application routes
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/products', ProductRoutes )
app.use('/api/v1/orders', OrderRoutes )


app.get('/', function(req : Request , res : Response){
  return res.send("Hello world!")
});

//unmatched route handle
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});
export default app;
