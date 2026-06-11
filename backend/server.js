import express from 'express';
import cors from 'cors';
import recommendationRoutes from './routes/recommendationRoutes.js';
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.use('/api', recommendationRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})