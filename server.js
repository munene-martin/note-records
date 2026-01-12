import express from 'express';
import notesRoutes from './src/Routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5008;

connectDB();

app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());
app.use(rateLimiter);



app.use("/api/notes", notesRoutes);

// app.use((req,res,next)=>{
//    console.log("We Just Got A New Request");
//     next();
// });

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});



//mongodb+srv://martinmunene_db_user:<db_password>@cluster0.whqiybn.mongodb.net/?appName=Cluster0
