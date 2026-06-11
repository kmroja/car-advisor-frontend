import express from 'express';
import cors from 'cors';
import recommendationRoutes from './routes/recommendationRoutes.js';
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://car-advisorr.netlify.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.use('/api', recommendationRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})